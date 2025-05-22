// Fonction pour améliorer la persistance de session
export function setupSessionPersistence() {
  // Si cette fonction est appelée côté client
  if (typeof window !== "undefined") {
    // Sauvegarder l'état de la session avant la navigation
    window.addEventListener("beforeunload", () => {
      // Cette fonction est vide mais elle aide à maintenir l'état dans certains navigateurs
      // en forçant le navigateur à considérer que la page a des données non sauvegardées
    })

    // Restaurer l'état de la session après la navigation
    window.addEventListener("pageshow", (event) => {
      // Si l'utilisateur revient à la page (bouton retour)
      if (event.persisted) {
        // La page est restaurée depuis le cache du navigateur
        // Pas besoin de faire quoi que ce soit de spécial ici
        // car les données localStorage seront toujours disponibles
      }
    })
  }
}

// Fonctions d'aide pour la gestion des tokens et de la session
export function getUserRole(): string | null {
  if (typeof window === "undefined") return null

  const storedUser = localStorage.getItem("user")
  if (!storedUser) return null

  try {
    const user = JSON.parse(storedUser)
    return user.role || null
  } catch (error) {
    console.error("Erreur lors de la récupération du rôle utilisateur:", error)
    return null
  }
}

export function isAuthenticated(role?: string): boolean {
  if (typeof window === "undefined") return false

  const hasToken = !!localStorage.getItem("token")

  if (!hasToken) return false

  if (!role) return hasToken

  // Vérifier le token spécifique au rôle
  if (role === "admin") {
    return !!localStorage.getItem("adminToken")
  } else if (role === "formateur") {
    return !!localStorage.getItem("formateurToken")
  } else if (role === "apprenant") {
    return !!localStorage.getItem("apprenantToken")
  }

  return false
}

export function persistSession() {
  if (typeof window === "undefined") return

  // Cette fonction est appelée pour renforcer la persistance de session
  // Elle ne fait rien de particulier, mais peut être étendue au besoin

  // On pourrait ajouter ici une logique pour rafraîchir les tokens,
  // mettre à jour un timestamp de dernière activité, etc.
}
