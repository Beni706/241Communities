"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
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
import { ArrowLeft, Calendar, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth-provider";
import { Input } from "@/components/ui/input";

type Veille = {
  id_veille: number;
  titre: string;
  date_creation: string;
  date_fin: string;
  lien_docDonnee: string;
  referentiel: string;
  lien_docRendu: string | null;
}

export default function VeilleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [veille, setVeille] = useState<Veille | null>(null);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchVeille = async () => {
      try {
        const token =
          localStorage.getItem("apprenantToken") ||
          localStorage.getItem("token");
        if (!token) {
          router.push("/login/apprenant");
          return;
        }

        const response = await fetch(
          `${API_BASE_URL}/veille/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setVeille(data);
        } else {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible de récupérer la veille.",
          });
        }
      } catch (error) {
        console.error("Erreur :", error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue.",
        });
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchVeille();
    }
  }, [params.id, user?.id, API_BASE_URL, router, toast]);

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsSubmitting(true);
      const token =
        localStorage.getItem("apprenantToken") ||
        localStorage.getItem("token");

      const response = await fetch(
        `${API_BASE_URL}/veille/soumission`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: "Soumission réussie",
          description: "Votre document a bien été soumis.",
        });
        router.refresh();
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "La soumission a échoué.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!veille) {
    return <div>Veille non trouvée.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/apprenant/veilles">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux veilles
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{veille.titre}</CardTitle>
            <Badge>{new Date(veille.date_fin) > new Date() ? "En cours" : "Terminée"}</Badge>
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
            <p className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(veille.date_fin).toLocaleDateString()} à{" "}
              {new Date(veille.date_fin).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-2">Document de la veille</h3>
            <a
              href={veille.lien_docDonnee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FileText className="h-4 w-4" />
              Télécharger le document
            </a>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="font-medium">Soumettre mon document</h3>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Button
              disabled={!file || isSubmitting}
              onClick={handleSubmit}
              className="flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              {isSubmitting ? "Envoi en cours..." : "Soumettre"}
            </Button>
            {veille.lien_docRendu && (
              <div className="text-sm text-muted-foreground">
                Vous avez déjà soumis un document :{" "}
                <a
                  href={veille.lien_docRendu}
                  target="_blank"
                  className="underline"
                >
                  Voir ma soumission
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
