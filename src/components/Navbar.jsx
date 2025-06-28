import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    //{ name: 'Activités', href: '#activites' },
    { name: 'Horaires des prières', href: '#horaires' },
   // { name: 'Événements', href: '#evenements' },
    { name: 'Dons', href: '#donations' },
    { name: 'Centre Culturel du Chablais', href: '#galerie' },
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
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img
                src="/images/amt.svg"
                alt="AMT Logo"
                className="h-10 w-10 object-contain"
              />

            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-noto-kufi font-bold transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-noto-kufi font-bold text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-amiri font-bold text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}