import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Emergence-Japan LLC</h2>
            <p className="text-sm text-gray-400 mt-2">
              Innovating the future with technology.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/legal" className="text-xs text-gray-400 hover:text-white transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Emergence-Japan LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
