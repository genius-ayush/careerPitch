import { Sparkle } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center gap-2" href="/">
                <Sparkle className="h-5 w-5" />
                <span className="font-medium">CareerPitch</span>
              </Link>
              <p className="text-sm text-white/50">
                CareerPitch helps job seekers create personalized LinkedIn messages and emails to get more referrals and
                land their dream jobs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/50 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
            <p className="text-xs text-white/50">© 2025 CareerPitch. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer