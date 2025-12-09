import { Link } from 'react-router-dom'
import { Shield, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00FF88]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-4">
          <p className="text-[#00FF88] text-sm font-bold mb-2">
            Scan Smart. Stay Safe.
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 P.I.S.H. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
