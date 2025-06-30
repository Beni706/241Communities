"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Edit,
  FileText,
  Trash2,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Veille = {
  id_veille: number;
  titre: string;
  date_creation: string;
  date_fin: string;
  lien_docDonnee: string;
  referentiel: string;
};

type Apprenant = {
  id_apprenant: number;
  nom: string;
  prenom: string;
  email: string;
  referentiel: string;
};

type Soumission = {
  id_soumission: number;
  id_apprenant: number;
  id_veille: number;
  lien_soumission: string;
  date_soumission: string;
  apprenant: {
    nom: string;
    prenom: string;
  };
};

// Composant principal pour afficher le détail d'une veille
export default function VeilleDetailPage() {
  // Récupération des paramètres d'URL et des hooks utiles
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  // États pour stocker les données de la veille, des apprenants et des soumissions
  const [veille, setVeille] = useState<Veille | null>(null);
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const [soumissions, setSoumissions] = useState<Soumission[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  // Effet pour charger les données de la veille, des apprenants et des soumissions au chargement
  useEffect(() => {
    const fetchVeille = async () => {
      try {
        // Vérifie l'authentification
        const token =
          localStorage.getItem("formateurToken") ||
          localStorage.getItem("token");
        if (!token) {
          router.push("/login/formateur");
          return;
        }

        // Récupère la veille par son id
        const veilleResponse = await fetch(
          `${API_BASE_URL}/veille/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (veilleResponse.ok) {
          const veilleData = await veilleResponse.json();
          setVeille(veilleData);

          // Récupère tous les apprenants puis filtre par référentiel de la veille
          const apprenantsResponse = await fetch(`${API_BASE_URL}/apprenant`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (apprenantsResponse.ok) {
            const apprenantsData = await apprenantsResponse.json();
            // Filtre les apprenants selon le référentiel de la veille
            const filteredApprenants = apprenantsData.filter(
              (apprenant: Apprenant) =>
                apprenant.referentiel === veilleData.referentiel
            );
            setApprenants(filteredApprenants);
          }

          // Récupère les soumissions pour cette veille
          const soumissionsResponse = await fetch(
            `${API_BASE_URL}/veille/soumission/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (soumissionsResponse.ok) {
            const soumissionsData = await soumissionsResponse.json();
            setSoumissions(soumissionsData)
          }
        } else {
          // Si la veille n'existe pas, redirige
          console.error("Failed to fetch veille");
          router.push("/formateur/veilles");
        }
      } catch (error) {
        // Gestion d'erreur globale
        console.error("Error fetching veille:", error)
        router.push("/formateur/veilles")
      } finally {
        setLoading(false)
      }
    }

    fetchVeille();
  }, [params.id, router, API_BASE_URL]);

  // Fonction pour supprimer la veille
  const handleDelete = async () => {
    try {
      const token =
        localStorage.getItem("formateurToken") || localStorage.getItem("token");
      if (!token) {
        router.push("/login/formateur");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/veille/${params.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast({
          title: "Veille supprimée",
          description: "La veille a été supprimée avec succès.",
        });
        router.push("/formateur/veilles");
      } else {
        throw new Error("Failed to delete veille");
      }
    } catch (error) {
      console.error("Error deleting veille:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description:
          "Une erreur est survenue lors de la suppression de la veille.",
      });
    }
  };

  // Fonction utilitaire pour savoir si la veille est encore active
  const isVeilleActive = (dateFin: string) => {
    const now = new Date();
    const endDate = new Date(dateFin);
    return endDate > now;
  };

  // Affichage d'un loader pendant le chargement
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-muted rounded w-64"></div>
        <div className="h-4 bg-muted rounded w-96"></div>
        <div className="h-64 bg-muted rounded"></div>
      </div>
    );
  }

  // Affichage si la veille n'existe pas
  if (!veille) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href="/formateur/veilles">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux veilles
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Veille non trouvée</CardTitle>
            <CardDescription>
              La veille que vous recherchez n'existe pas ou a été supprimée.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/formateur/veilles">
              <Button>Voir toutes les veilles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Rendu principal de la page détail veille
  return (
    <div className="space-y-6">
      {/* En-tête et actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/formateur/veilles">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux veilles
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/formateur/veilles/${params.id}/modifier`}>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Modifier
            </Button>
          </Link>
          {/* Boîte de dialogue de confirmation pour la suppression */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Supprimer
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Êtes-vous sûr de vouloir supprimer cette veille ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Cette action est irréversible. La veille sera définitivement
                  supprimée.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-destructive text-destructive-foreground"
                >
                  Supprimer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="h-2 bg-secondary"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{veille.titre}</CardTitle>
                <Badge
                  variant={
                    isVeilleActive(veille.date_fin) ? "secondary" : "outline"
                  }
                >
                  {isVeilleActive(veille.date_fin) ? "En cours" : "Terminée"}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-2">
                <span>{veille.referentiel}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Créée le {new Date(veille.date_creation).toLocaleDateString()}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Date limite</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(veille.date_fin).toLocaleDateString()} à{" "}
                  {new Date(veille.date_fin).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <Separator />

              {/* Affichage du document associé à la veille */}
              <div>
                <h3 className="font-medium mb-2">Document de la veille</h3>
                {(() => {
                  const fileUrl = veille.lien_docDonnee.startsWith("/uploads/")
                    ? veille.lien_docDonnee
                    : `/uploads/${veille.lien_docDonnee}`;
                  const fileName = veille.lien_docDonnee.replace(
                    /^\/uploads\//,
                    ""
                  );
                  const ext = fileName.split(".").pop()?.toLowerCase();
                  // Extensions à forcer en téléchargement
                  const forceDownload = [
                    "pdf",
                    "doc",
                    "docx",
                    "rtf",
                    "txt",
                    "png",
                    "jpg",
                    "jpeg",
                    "gif",
                    "csv",
                    "zip",
                    "rar",
                    "xls",
                    "xlsx",
                  ];
                  return (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                      {...(forceDownload.includes(ext || "")
                        ? { download: fileName }
                        : {})}
                    >
                      <FileText className="h-4 w-4" />
                      {fileName}
                    </a>
                  );
                })()}
              </div>
            </CardContent>
          </Card>

          {/* Liste des soumissions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Soumissions
              </CardTitle>
              <CardDescription>
                {soumissions.length} soumission(s) sur {apprenants.length}{" "}
                apprenants
              </CardDescription>
            </CardHeader>
            <CardContent>
              {soumissions.length > 0 ? (
                <div className="space-y-4">
                  {soumissions.map((soumission) => (
                    <div
                      key={soumission.id_soumission}
                      className="flex items-center justify-between p-3 rounded-md border"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <span className="font-bold text-secondary text-xs">
                            {soumission.apprenant.prenom.charAt(0)}
                            {soumission.apprenant.nom.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">
                            {soumission.apprenant.prenom}{" "}
                            {soumission.apprenant.nom}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Soumis le{" "}
                            {new Date(
                              soumission.date_soumission
                            ).toLocaleDateString()}{" "}
                            à{" "}
                            {new Date(
                              soumission.date_soumission
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                      <a
                        href={soumission.lien_soumission}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Voir la soumission
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Aucune soumission pour cette veille.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Liste des apprenants concernés */}
        <div className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Apprenants
              </CardTitle>
              <CardDescription>
                Apprenants du référentiel {veille.referentiel} qui ont accès à
                cette veille
              </CardDescription>
            </CardHeader>
            <CardContent>
  {apprenants.length > 0 ? (
    <div className="space-y-2">
      {apprenants.map((apprenant) => {
        const soumission = soumissions.find(
          (s) => s.id_apprenant === apprenant.id_apprenant
        );
        
        return (
          <div
            key={apprenant.id_apprenant}
            className="flex items-center justify-between p-3 rounded-md border hover:bg-muted/50"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">
                  {apprenant.prenom.charAt(0)}{apprenant.nom.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {apprenant.prenom} {apprenant.nom}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {apprenant.email}
                </p>
                {soumission && (
                  <p className="text-xs text-green-600 mt-1">
                    Soumis le {new Date(soumission.date_soumission).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {soumission ? (
                <>
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    <FileText className="h-3 w-3 mr-1" />
                    Soumis
                  </Badge>
                  <a
                    href={soumission.lien_soumission}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Voir
                  </a>
                </>
              ) : (
                <Badge variant="outline">En attente</Badge>
              )}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="text-muted-foreground">
      Aucun apprenant dans ce référentiel.
    </p>
  )}
</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
