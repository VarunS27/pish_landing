import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Shield, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import MatrixBackground from '../components/MatrixBackground'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Admin credentials
    if (formData.email === 'admin@pish.com' && formData.password === 'admin123') {
      const adminUser = {
        name: 'Admin',
        email: 'admin@pish.com',
        role: 'admin',
        plan: 'Enterprise'
      }
      localStorage.setItem('pish_user', JSON.stringify(adminUser))
      navigate('/dashboard')
      return
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('pish_users') || '[]')
    const user = users.find(u => u.email === formData.email && u.password === formData.password)

    if (user) {
      const { password, ...userWithoutPassword } = user
      localStorage.setItem('pish_user', JSON.stringify(userWithoutPassword))
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="bg-black text-[#E8FFE8] min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <MatrixBackground />
      
      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A0A] border-2 border-[#00FF88]/30 rounded-lg p-8 neon-glow"
        >
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-[#00FF88] mx-auto mb-4" style={{ 
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))' 
            }} />
            <h1 className="text-4xl font-bold mb-2 text-glow">Welcome Back</h1>
            <p className="text-gray-400">Login to access your PISH dashboard</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 mb-6 text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FF88]" size={20} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-[#00FF88]/30 rounded-lg pl-12 pr-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FF88]" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-black border border-[#00FF88]/30 rounded-lg pl-12 pr-12 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00FF88]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#forgot" className="text-sm text-[#00FF88] hover:underline">
                Forgot Password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#00FF88] text-black py-3 rounded-lg font-bold hover:bg-[#39FF14] transition-all neon-glow"
            >
              Login to Dashboard
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#00FF88] hover:underline font-bold">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#00FF88]/20 text-center text-sm text-gray-400">
            <p className="mb-2">Demo Credentials:</p>
            <p>Admin: admin@pish.com / admin123</p>
          </div>
        </motion.div>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-400 hover:text-[#00FF88] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
