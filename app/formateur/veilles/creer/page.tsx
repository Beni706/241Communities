"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GooglePicker } from "@/components/google-picker";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CustomCalendar } from "@/components/custom-calendar";
import { TimePicker } from "@/components/time-picker";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CreerVeillePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  // Formulaire
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [lienDocument, setLienDocument] = useState("");
  const [nomDocument, setNomDocument] = useState("");
  const [dateFin, setDateFin] = useState<Date | undefined>(undefined);
  const [referentiel, setReferentiel] = useState("");

  // Ajout d'un mode de sélection : lien ou fichier
  const [modeDocument, setModeDocument] = useState<"lien" | "fichier">("lien");
  const [fichier, setFichier] = useState<File | null>(null);

  // Vérifier l'authentification de l'utilisateur dès le chargement
  useEffect(() => {
    // Récupérer les informations utilisateur depuis diverses sources possibles
    const userStr =
      localStorage.getItem("user") || localStorage.getItem("userData");
    const token =
      localStorage.getItem("token") || localStorage.getItem("formateurToken");

    console.log("Token trouvé:", !!token);
    console.log("URL API Base:", process.env.NEXT_PUBLIC_API_URL);

    if (!token) {
      toast({
        variant: "destructive",
        title: "Erreur d'authentification",
        description:
          "Vous n'êtes pas connecté. Veuillez vous connecter pour créer une veille.",
      });
      router.push("/login/formateur");
      return;
    }

    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        console.log("Données utilisateur:", userData);

        // Récupérer l'ID selon différentes structures possibles
        const id = userData.id || userData.id_formateur;

        if (id) {
          setUserId(id);
          console.log("ID formateur trouvé:", id);

          // Initialiser le référentiel si disponible
          if (userData.referentiel) {
            setReferentiel(userData.referentiel);
          }
        } else {
          console.error("ID formateur non trouvé dans les données utilisateur");
        }
      } catch (error) {
        console.error("Erreur lors du parsing des données utilisateur:", error);
      }
    } else {
      console.error("Aucune donnée utilisateur trouvée");
    }
  }, [router, toast]);

  const handleDocumentSelect = (url: string, name: string) => {
    setLienDocument(url);
    setNomDocument(name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFichier(file);
      setNomDocument(file.name);
      setLienDocument(""); // On efface le lien si on choisit un fichier
    }
  };

  const handleLienChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLienDocument(e.target.value ?? "");
    setFichier(null);
    setNomDocument("");
  };

  // Initialiser la date avec l'heure par défaut (23:59)
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const newDate = new Date(date);
      // Si c'est une nouvelle date (pas déjà définie), définir l'heure par défaut à 23:59
      if (!dateFin) {
        newDate.setHours(23);
        newDate.setMinutes(59);
      } else {
        // Conserver l'heure précédemment définie
        newDate.setHours(dateFin.getHours());
        newDate.setMinutes(dateFin.getMinutes());
      }
      setDateFin(newDate);
    } else {
      setDateFin(undefined);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!titre || (!lienDocument && !fichier) || !dateFin || !referentiel) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      });
      return;
    }

    if (!userId) {
      toast({
        variant: "destructive",
        title: "Erreur d'authentification",
        description: "ID formateur non trouvé. Veuillez vous reconnecter.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const token =
        localStorage.getItem("formateurToken") || localStorage.getItem("token");

      if (!token) {
        throw new Error("Non authentifié");
      }

      let lienDocFinal = lienDocument;
      let nomDocFinal = nomDocument;
      // Si fichier, upload d'abord
      if (modeDocument === "fichier" && fichier) {
        const formData = new FormData();
        formData.append("file", fichier);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!uploadRes.ok) {
          throw new Error("Erreur lors de l'upload du fichier");
        }
        const uploadData = await uploadRes.json();
        lienDocFinal = uploadData.url;
        nomDocFinal = fichier.name;
      }

      // Construction de requestData selon le mode
      let requestData: {
        titre: string;
        description: string;
        date_fin: string;
        id_formateur: number;
        referentiel: string; // Assurez-vous que le référentiel est inclus
        lien_docDonnee?: string;
        nom_document?: string;
      } = {
        titre,
        description: description || titre,
        date_fin: dateFin.toISOString(),
        id_formateur: userId,
        referentiel: referentiel, // Utiliser la valeur de l'état
      };
      if (modeDocument === "lien") {
        requestData.lien_docDonnee = lienDocFinal;
        requestData.nom_document = "";
      } else if (modeDocument === "fichier" && nomDocFinal) {
        requestData.lien_docDonnee = lienDocFinal;
        requestData.nom_document = nomDocFinal;
      }

      console.log("Données à envoyer:", requestData);

      const response = await fetch(`${API_URL}/veille`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      // Log de la réponse
      console.log("Statut de la réponse:", response.status);
      console.log("URL de la requête:", response.url);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erreur API:", errorText);

        // Vérifier si c'est une erreur 404
        if (response.status === 404) {
          throw new Error(
            "Route API non trouvée. Vérifiez que l'API /api/veille existe."
          );
        }

        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("Réponse API:", result);

      toast({
        title: "Veille créée",
        description: "La veille a été créée avec succès.",
      });

      router.push("/formateur/veilles");
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de la création de la veille.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Avant le return, définir une date du jour sans l'heure
  const todaySansHeure = new Date();
  todaySansHeure.setHours(0, 0, 0, 0);

  return (
    <div className="space-y-6 w-full px-2 sm:px-4 md:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Créer une nouvelle veille
          </h1>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous pour créer une nouvelle veille
            technologique.
          </p>
        </div>
        <Link href="/formateur/veilles">
          <Button
            variant="outline"
            size="sm"
            className="self-start sm:self-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <Card className="border-0 shadow-sm w-full">
          <CardHeader>
            <CardTitle>Informations de la veille</CardTitle>
            <CardDescription>
              Entrez les détails de la veille que vous souhaitez créer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="titre">Titre de la veille *</Label>
              <Input
                id="titre"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Ex: Veille sur les frameworks JavaScript modernes"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description détaillée de la veille"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Document associé *</Label>
              <Select
                value={modeDocument}
                onValueChange={(v) => setModeDocument(v as "lien" | "fichier")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir le mode de saisie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lien">Saisir un lien</SelectItem>
                  <SelectItem value="fichier">
                    Sélectionner un fichier
                  </SelectItem>
                </SelectContent>
              </Select>
              {modeDocument === "lien" ? (
                <Input
                  type="url"
                  id="lienDoc"
                  value={lienDocument ?? ""}
                  onChange={handleLienChange}
                  placeholder="https://..."
                  required={modeDocument === "lien"}
                />
              ) : (
                <Input
                  key={modeDocument} // force le reset de l'input file lors du changement de mode
                  type="file"
                  id="fichierDoc"
                  onChange={handleFileChange}
                  required={modeDocument === "fichier"}
                />
              )}
              {modeDocument === "fichier" && nomDocument && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <div className="truncate flex-1 w-full">
                    <p className="font-medium truncate">{nomDocument}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateFin">Date limite de rendu *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                      id="dateFin"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateFin ? (
                        format(dateFin, "PPP", { locale: fr })
                      ) : (
                        <span>Sélectionner une date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CustomCalendar
                      selected={dateFin}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < todaySansHeure}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <TimePicker
                date={dateFin}
                setDate={setDateFin}
                label="Heure limite de rendu *"
                className="space-y-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referentiel">Référentiel *</Label>
              <Select value={referentiel} onValueChange={setReferentiel}>
                <SelectTrigger id="referentiel" >
                  <SelectValue placeholder="Sélectionner un référentiel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DEVELOPPEUR">
                    Développeur
                  </SelectItem>
                  <SelectItem value="REFERENT_DIGITAL">
                    Référent Digital
                  </SelectItem>
                  <SelectItem value="DIGITAL_CREATOR">
                    Digital Creator
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/formateur/veilles")}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "Création en cours..." : "Créer la veille"}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <div className="text-sm text-muted-foreground">
        <p>* Champs obligatoires</p>
        <p>
          Les apprenants pourront soumettre leur travail jusqu'à la date et
          l'heure limite.
        </p>
      </div>
    </div>
  );
}
