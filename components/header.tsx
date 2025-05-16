import { Button } from "@/components/ui/button"
import Link from "next/link"


const Header = () => {
    return (
        <div> <header className="border-b bg-white">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">école {241} communities</span>
                </div>
                <nav className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <Link href="/login/apprenant" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Apprenant
                        </Link>
                        <Link href="/login/formateur" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Formateur
                        </Link>
                        <Link
                            href="/login/administrateur"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            Admin
                        </Link>
                    </div>
                    <Link href="/contact">
                        <Button className="bg-orange-500" variant="default">Nous contacter</Button>
                    </Link>
                </nav>
            </div>
        </header>
        </div>
    )
}

export default Header



