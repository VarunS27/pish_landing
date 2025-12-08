import { Link } from 'react-router-dom'
import { Shield, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00FF88]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-[#00FF88]" />
              <span className="text-2xl font-bold text-glow">PISH</span>
            </div>
            <p className="text-gray-400 text-sm">
              Phishing Intelligence & Security Hub - Your personal anti-phishing shield.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#00FF88] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#home" className="text-gray-400 hover:text-[#00FF88] transition-colors">Home</a></li>
              <li><a href="/#features" className="text-gray-400 hover:text-[#00FF88] transition-colors">Features</a></li>
              <li><a href="/#pricing" className="text-gray-400 hover:text-[#00FF88] transition-colors">Pricing</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-[#00FF88] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#00FF88] mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="text-gray-400 hover:text-[#00FF88] transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-gray-400 hover:text-[#00FF88] transition-colors">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-[#00FF88] transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#00FF88] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="text-gray-400 hover:text-[#00FF88] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-[#00FF88] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00FF88]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 PISH. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#twitter" className="text-gray-400 hover:text-[#00FF88] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-[#00FF88] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#github" className="text-gray-400 hover:text-[#00FF88] transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#00FF88] text-sm font-bold">
            Scan Smart. Stay Safe.
          </p>
        </div>
      </div>
    </footer>
  )
}
