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
              繝励Λ繧､繝舌す繝ｼ繝昴Μ繧ｷ繝ｼ
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
              蛻ｩ逕ｨ隕冗ｴ・            </Link>
            <Link href="/legal" className="text-xs text-gray-400 hover:text-white transition-colors">
              迚ｹ螳壼膚蜿門ｼ墓ｳ輔↓蝓ｺ縺･縺剰｡ｨ險・            </Link>
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
