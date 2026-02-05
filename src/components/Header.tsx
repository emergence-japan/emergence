import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tighter">Emergence</h1>
        </div>
        
        <nav role="navigation">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
                Top
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#company" className="text-sm font-medium hover:text-accent transition-colors">
                Company
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
