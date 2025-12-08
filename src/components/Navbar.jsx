import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Shield, Menu, X, LogOut } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = localStorage.getItem('pish_user')
  const user = isLoggedIn ? JSON.parse(isLoggedIn) : null

  const handleLogout = () => {
    localStorage.removeItem('pish_user')
    navigate('/')
  }

  const isDashboard = location.pathname.startsWith('/dashboard')

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#00FF88]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-[#00FF88]" />
            <span className="text-2xl font-bold text-glow">PISH</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {!isDashboard && (
              <>
                <a href="/#home" className="hover:text-[#00FF88] transition-colors">Home</a>
                <a href="/#features" className="hover:text-[#00FF88] transition-colors">Features</a>
                <a href="/#pricing" className="hover:text-[#00FF88] transition-colors">Pricing</a>
                <a href="/#contact" className="hover:text-[#00FF88] transition-colors">Contact</a>
              </>
            )}
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-[#00FF88] transition-colors">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-[#00FF88] text-sm">Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-[#00FF88] border border-[#00FF88] px-4 py-2 rounded hover:bg-[#00FF88] hover:text-black transition-all flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-[#00FF88] border border-[#00FF88] px-4 py-2 rounded hover:bg-[#00FF88] hover:text-black transition-all"
              >
                Login
              </Link>
            )}
          </div>

          <button 
            className="md:hidden text-[#00FF88]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#00FF88]/20">
          <div className="px-4 py-4 space-y-3">
            {!isDashboard && (
              <>
                <a href="/#home" className="block hover:text-[#00FF88]">Home</a>
                <a href="/#features" className="block hover:text-[#00FF88]">Features</a>
                <a href="/#pricing" className="block hover:text-[#00FF88]">Pricing</a>
                <a href="/#contact" className="block hover:text-[#00FF88]">Contact</a>
              </>
            )}
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="block hover:text-[#00FF88]">Dashboard</Link>
                <button onClick={handleLogout} className="block text-[#00FF88]">Logout</button>
              </>
            ) : (
              <Link to="/login" className="block text-[#00FF88]">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
