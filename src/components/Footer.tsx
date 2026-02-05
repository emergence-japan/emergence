const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Emergence-japan合同会社</h2>
            <p className="text-sm text-gray-400 mt-2">
              Innovating the future with technology.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Emergence-japan合同会社. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
