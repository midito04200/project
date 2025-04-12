import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Actualités', href: '#actualites' },
    { name: 'Événements', href: '#evenements' },
    { name: 'À propos', href: '#about' },
    { name: 'Centre Culturel', href: '#projet-mosquee' },
    { name: 'Faire un don', href: '#faire-un-don' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-[#40916C] w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => scrollToSection('#home')} className="flex items-center">
              <svg className="h-16 w-16 text-[#E6C86E]" viewBox="0 0 578.38 723.99">
                <g>
                  <path fill="currentColor" d="M10.6,719.3v-115.16c0-2.59,2.1-4.7,4.7-4.7h39.51c3.52,0,5.79-3.74,4.17-6.86l-22.47-43.25c-1.62-3.13.64-6.86,4.17-6.86h25.6c3.6,0,5.87-3.88,4.09-7.01-20.77-36.59-105.96-205.29-18.95-367.6C105.81,66.41,197.66,23.08,232.16,9.05c1.68-.68,2.81-2.27,2.91-4.08h0c.19-3.21-2.84-5.65-5.94-4.8-25.29,6.95-62.79,20.73-101.23,49.11-14.51,10.71-55.08,42.64-86.57,98.86C3.84,215.06,1.18,277.21.19,308.96c-3.06,98.1,31.8,174.31,54.39,214.21,1.77,3.13-.49,7.01-4.09,7.01h-29.05c-3.6,0-5.86,3.88-4.09,7.01l26.16,46.31c1.77,3.13-.49,7.01-4.09,7.01H4.7c-2.59,0-4.7,2.1-4.7,4.7v124.1c0,2.59,2.1,4.7,4.7,4.7h1.21c2.59,0,4.7-2.1,4.7-4.7Z"/>
                </g>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#E6C86E] hover:text-[#f4d989] px-3 py-2 text-sm transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E6C86E] hover:text-[#f4d989] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#40916C] border-t border-[#95D5B2]`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 text-[#E6C86E] hover:text-[#f4d989] text-base"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}