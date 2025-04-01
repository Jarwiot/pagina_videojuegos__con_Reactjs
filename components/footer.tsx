import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GameShowcase</h3>
            <p className="text-slate-300">
              Your ultimate destination for discovering amazing video games from around the world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-slate-300 mb-2">Follow us on social media for the latest updates and game news.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Discord
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} GameShowcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

