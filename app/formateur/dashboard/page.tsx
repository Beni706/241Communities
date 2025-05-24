"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/components/auth-provider";
import { BookOpen, Clock, GraduationCap, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Types pour les données
interface Cours {
  id_cours: number;
  titre: string;
  dateCreation: string;
  id_formateur: number;
  chapitre?: Chapitre[];
}

interface Chapitre {
  id_chapitre: number;
  titre: string;
  id_cours: number;
}

interface Veille {
  id_veille: number;
  titre: string;
  id_formateur: number;
}

interface SuiviCours {
  id_suivi: number;
  id_cours: number;
  id_apprenant: number;
}

interface ItemRecent {
  // Renommé pour plus de généricité si on ajoute des veilles récentes etc.
  id: number;
  titre: string;
  date: string; // Peut être date de création ou modification
  type: "cours" | "veille"; // Pour distinguer si besoin
}
interface ActiviteApprenant {
  id: number;
  nom: string;
  prenom: string;
  action: string;
  date: string;
}

interface Stats {
  coursActifs: number;
  apprenants: number;
  chapitres: number;
  veilles: number;
}

// Type Apprenant pour la liste complète
interface Apprenant {
  id_apprenant: number;
  nom: string;
  prenom: string;
  email: string;
  referentiel: string;
}

export default function FormateurDashboard() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    coursActifs: 0,
    apprenants: 0,
    chapitres: 0,
    veilles: 0,
  });
  const [itemsRecents, setItemsRecents] = useState<ItemRecent[]>([]);
  const [activitesRecentes, setActivitesRecentes] = useState<
    ActiviteApprenant[]
  >([]);
  const [debugInfo, setDebugInfo] = useState<any>({});
  const { user: formateurConnecte, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Mettre isLoading à true au début de fetchData

      if (authLoading) {
        // Attendre que l'authentification soit terminée
        return;
      }

      try {
        const token = localStorage.getItem("token"); // ou formateurToken
        const formateurId = formateurConnecte?.id;
        const formateurReferentiel = formateurConnecte?.referentiel;

        console.log("Token:", token);
        console.log("Formateur ID:", formateurId);

        if (!token || formateurId === null) {
          throw new Error("Informations d'authentification manquantes");
        }

        // Réinitialiser les stats au cas où
        setStats({ coursActifs: 0, apprenants: 0, chapitres: 0, veilles: 0 });
        setItemsRecents([]);
        setDebugInfo({});

        // Récupérer tous les cours
        const coursResponse = await fetch("/api/cours", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!coursResponse.ok) {
          throw new Error(
            `Erreur lors de la récupération des cours: ${coursResponse.status}`
          );
        }

        const allCours: Cours[] = await coursResponse.json();
        console.log("Tous les cours récupérés:", allCours);

        // Filtrer les cours du formateur
        const formateurCours = allCours.filter((cours) => {
          console.log(
            `Cours ${cours.id_cours}: id_formateur=${cours.id_formateur}, formateurId=${formateurId}`
          );
          return cours.id_formateur === formateurId;
        });

        console.log("Cours du formateur après filtrage:", formateurCours);
        console.log(`Nombre de cours du formateur: ${formateurCours.length}`);

        // Récupérer toutes les veilles
        const veillesResponse = await fetch("/api/veille", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!veillesResponse.ok) {
          throw new Error(
            `Erreur lors de la récupération des veilles: ${veillesResponse.status}`
          );
        }

        const allVeilles: Veille[] = await veillesResponse.json();
        console.log("Toutes les veilles récupérées:", allVeilles);

        // Filtrer les veilles du formateur
        const formateurVeilles = allVeilles.filter((veille) => {
          console.log(
            `Veille ${veille.id_veille}: id_formateur=${veille.id_formateur}, formateurId=${formateurId}`
          );
          return veille.id_formateur === formateurId;
        });

        console.log("Veilles du formateur après filtrage:", formateurVeilles);
        console.log(
          `Nombre de veilles du formateur: ${formateurVeilles.length}`
        );

        // Calculer le nombre de chapitres
        let totalChapitres = 0;
        formateurCours.forEach((cours) => {
          if (cours.chapitre && Array.isArray(cours.chapitre)) {
            totalChapitres += cours.chapitre.length;
            console.log(
              `Cours ${cours.id_cours}: ${cours.chapitre.length} chapitres`
            );
          } else {
            console.log(
              `Cours ${cours.id_cours}: pas de chapitres ou format incorrect`
            );
          }
        });
        console.log(`Nombre total de chapitres: ${totalChapitres}`);

        // Récupérer tous les apprenants
        const allApprenantsResponse = await fetch("/api/apprenant", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!allApprenantsResponse.ok) {
          throw new Error(
            `Erreur lors de la récupération des apprenants: ${allApprenantsResponse.status}`
          );
        }
        const allApprenantsList: Apprenant[] =
          await allApprenantsResponse.json();
        console.log("Tous les apprenants récupérés:", allApprenantsList);

        // Filtrer les apprenants par le référentiel du formateur
        const apprenantsDuReferentiel = allApprenantsList.filter(
          (app) => app.referentiel === formateurReferentiel
        );
        const nombreApprenants = apprenantsDuReferentiel.length;
        console.log(
          "Apprenants du référentiel du formateur:",
          apprenantsDuReferentiel
        );
        console.log(`Nombre d'apprenants du référentiel: ${nombreApprenants}`);

        // Stocker les informations de débogage
        setDebugInfo({
          formateurId,
          formateurReferentiel,
          totalCours: allCours.length,
          coursDuFormateur: formateurCours.length,
          totalVeilles: allVeilles.length,
          veillesDuFormateur: formateurVeilles.length,
          totalChapitres,
          nombreApprenants,
          totalApprenantsSystem: allApprenantsList.length,
        });

        // Mettre à jour les statistiques
        setStats({
          coursActifs: formateurCours.length,
          apprenants: nombreApprenants,
          chapitres: totalChapitres,
          veilles: formateurVeilles.length,
        });

        // Récupérer les cours récents (les 3 derniers)
        const coursRecentsList: ItemRecent[] = formateurCours
          .sort((a, b) => {
            const dateA = new Date(a.dateCreation).getTime();
            const dateB = new Date(b.dateCreation).getTime();
            return dateB - dateA;
          })
          .slice(0, 3)
          .map(
            (cours): ItemRecent => ({
              id: cours.id_cours,
              titre: cours.titre,
              date: new Date(cours.dateCreation).toLocaleDateString(),
              type: "cours",
            })
          );

        setItemsRecents(coursRecentsList);

        // Pour l'instant, nous utilisons des données simulées pour les activités des apprenants
        // Remplacer par des vraies activités : récupération des suivis de cours récents
        try {
          const suiviCoursResponse = await fetch("/api/suiviCours", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (suiviCoursResponse.ok) {
            const allSuiviCours = await suiviCoursResponse.json();
            // On ne garde que les suivis des cours du formateur
            const coursIds = formateurCours.map((c) => c.id_cours);
            const suivisFormateur = allSuiviCours.filter((suivi: any) =>
              coursIds.includes(suivi.id_cours)
            );
            // On récupère les 5 plus récents (par dateDebut ou dateFin)
            const suivisRecents = suivisFormateur
              .sort(
                (a: any, b: any) =>
                  new Date(b.dateDebut).getTime() -
                  new Date(a.dateDebut).getTime()
              )
              .slice(0, 5);
            // Pour chaque suivi, il faut récupérer l'apprenant et le cours
            const activitesRecentesList: ActiviteApprenant[] =
              await Promise.all(
                suivisRecents.map(async (suivi: any) => {
                  // Récupérer l'apprenant
                  let apprenant = apprenantsDuReferentiel.find(
                    (a) => a.id_apprenant === suivi.id_apprenant
                  );
                  if (!apprenant) {
                    // Si non trouvé dans la liste filtrée, essayer de le récupérer via l'API
                    try {
                      const apprenantRes = await fetch(
                        `/api/apprenant?id=${suivi.id_apprenant}`,
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );
                      if (apprenantRes.ok)
                        apprenant = await apprenantRes.json();
                    } catch {}
                  }
                  // Déterminer l'action
                  let action = "a commencé un cours";
                  if (suivi.pourcentage === 100) action = "a terminé un cours";
                  else if (suivi.pourcentage > 0)
                    action = `a progressé dans un cours (${suivi.pourcentage}%)`;
                  // Date relative
                  const date = new Date(suivi.dateDebut).toLocaleString();
                  return {
                    id: suivi.id_suiviCours,
                    nom: apprenant?.nom || "",
                    prenom: apprenant?.prenom || "",
                    action,
                    date,
                  };
                })
              );
            setActivitesRecentes(activitesRecentesList);
          } else {
            setActivitesRecentes([]);
          }
        } catch (err) {
          setActivitesRecentes([]);
        }
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données du dashboard:",
          error
        );
        toast({
          title: "Erreur",
          description:
            error instanceof Error
              ? error.message
              : "Impossible de charger les données du tableau de bord",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (formateurConnecte) {
      // Exécuter fetchData seulement si formateurConnecte est défini
      fetchData();
    } else if (!authLoading) {
      // Si l'auth est terminée et pas d'utilisateur, on arrête le chargement
      setIsLoading(false);
    }
  }, [toast, formateurConnecte, authLoading]);

  if (isLoading || authLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Bienvenue sur votre espace formateur
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours actifs</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursActifs}</div>
            <p className="text-xs text-muted-foreground">
              Cours que vous enseignez actuellement
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Apprenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.apprenants}</div>
            <p className="text-xs text-muted-foreground">
              Apprenants inscrits à vos cours
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chapitres</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.chapitres}</div>
            <p className="text-xs text-muted-foreground">
              Chapitres créés dans vos cours
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Veilles</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.veilles}</div>
            <p className="text-xs text-muted-foreground">
              Veilles technologiques publiées
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Cours récents</CardTitle>
            <CardDescription>
              Les derniers cours que vous avez créés ou modifiés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {itemsRecents.length > 0 ? (
                itemsRecents.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.titre}</p>
                      <p className="text-xs text-muted-foreground">
                        Créé le: {item.date}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <BookOpen className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-center text-muted-foreground">
                    Vous n'avez pas encore créé de cours.
                    <br />
                    Commencez par en créer un !
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Activité récente des apprenants</CardTitle>
            <CardDescription>
              Dernières activités de vos apprenants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activitesRecentes.map((activite, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-9 h-9 rounded bg-green-100 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {activite.prenom && activite.nom
                        ? `${activite.prenom} ${activite.nom} ${activite.action}`
                        : activite.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activite.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
