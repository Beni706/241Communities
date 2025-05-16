import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div><footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-bold">école {241} communities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Une plateforme éducative moderne pour apprendre, enseigner et grandir ensemble.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Formations</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Référent Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Digital Creator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Liens utiles</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/login/apprenant" className="text-muted-foreground hover:text-foreground">
                    Connexion Apprenant
                  </Link>
                </li>
                <li>
                  <Link href="/login/formateur" className="text-muted-foreground hover:text-foreground">
                    Connexion Formateur
                  </Link>
                </li>
                <li>
                  <Link href="/login/administrateur" className="text-muted-foreground hover:text-foreground">
                    Connexion Admin
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Contact</h4>
              <address className="not-italic text-sm text-muted-foreground">
                <p>123 Rue de l'Innovation</p>
                <p>Libreville, Gabon</p>
                <p className="mt-2">contact@ecole241.com</p>
                <p>+241 12 34 56 78</p>
              </address>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} école {241} communities. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer