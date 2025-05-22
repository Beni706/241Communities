import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full backdrop-blur">
        <div className="container max-w-screen-2xl mx-auto flex h-24 items-center px-4 md:px-6">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4 md:space-x-6">
            <Link href="/login/apprenant">
              <Button variant="outline" size="sm" className="h-9 bg-white text-black">
                Connexion
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-red-500 hover:bg-red-300 h-9" size="sm">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header