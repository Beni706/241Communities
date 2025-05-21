"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="École {241} Communities" width={120} height={120} className="h-24 w-auto border rounded-sm border-transparent" />
      </Link>
      <div className="hidden md:flex md:items-center md:space-x-4">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="transition-all hover:underline underline-offset-4 font-medium">
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Formations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-red/20 to-tertiary/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">École {241} Communities</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Développez vos compétences numériques avec nos formations de qualité.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/formations/developpement-web" title="Développement Web">
                    Apprenez à créer des sites web et des applications web modernes.
                  </ListItem>
                  <ListItem href="/formations/referent-digital" title="Référent Digital">
                    Devenez un expert en stratégie digitale et marketing numérique.
                  </ListItem>
                  <ListItem href="/formations/digital-creator" title="Digital Creator">
                    Créez du contenu digital captivant pour les réseaux sociaux.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Naviguez sur notre plateforme</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-start">Accueil</Button>
              </Link>
              <Link href="/formations/developpement-web" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Développement Web</Button>
              </Link>
              <Link href="/formations/referent-digital" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Référent Digital</Button>
              </Link>
              <Link href="/formations/digital-creator" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Digital Creator</Button>
              </Link>
              <Link href="/a-propos" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">À propos</Button>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Contact</Button>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full text-white bg-black">Nous contacter</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:underline underline-offset-4",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default MainNav
