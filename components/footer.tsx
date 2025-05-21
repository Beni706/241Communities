import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-black">
      <div className="container max-w-screen-2xl mx-auto py-6 md:py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="École {241} Communities" width={100} height={30} className="h-7 w-auto border rounded-sm border-transparent" />
            </Link>
            <p className="text-center text-sm leading-loose md:text-left text-gray-200">
              &copy; {new Date().getFullYear()} École {241} Communities. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Facebook className="h-5 w-5 text-gray-200" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Twitter className="h-5 w-5 text-gray-200" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Instagram className="h-5 w-5 text-gray-200" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Linkedin className="h-5 w-5 text-gray-200" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
