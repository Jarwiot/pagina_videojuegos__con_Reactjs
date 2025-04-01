import Link from "next/link"
import { GamepadIcon as GameController } from "lucide-react"

export function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GameController className="h-6 w-6" />
          <span className="font-bold text-xl">GameShowcase</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                New Releases
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

