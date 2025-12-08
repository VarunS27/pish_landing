import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Shield, Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import MatrixBackground from '../components/MatrixBackground'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    plan: 'Free'
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('pish_users') || '[]')
    if (users.find(u => u.email === formData.email)) {
      setError('Email already registered')
      return
    }

    // Save user
    users.push(formData)
    localStorage.setItem('pish_users', JSON.stringify(users))

    // Login user
    const { password, ...userWithoutPassword } = formData
    localStorage.setItem('pish_user', JSON.stringify(userWithoutPassword))
    navigate('/dashboard')
  }

  return (
    <div className="bg-black text-[#E8FFE8] min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden">
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
            <h1 className="text-4xl font-bold mb-2 text-glow">Join PISH</h1>
            <p className="text-gray-400">Create your account and start protecting yourself</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 mb-6 text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FF88]" size={20} />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border border-[#00FF88]/30 rounded-lg pl-12 pr-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
              <p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Choose Your Plan</label>
              <select
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                className="w-full bg-black border border-[#00FF88]/30 rounded-lg px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
              >
                <option value="Free">Free - 5 scans/day</option>
                <option value="Basic">Basic - ₹999/year</option>
                <option value="Pro">Pro - ₹3,599/year (Recommended)</option>
                <option value="Enterprise">Enterprise - Custom</option>
              </select>
            </div>

            <div className="flex items-start">
              <input type="checkbox" required className="mr-2 mt-1" />
              <span className="text-sm text-gray-400">
                I agree to the{' '}
                <a href="#terms" className="text-[#00FF88] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="text-[#00FF88] hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#00FF88] text-black py-3 rounded-lg font-bold hover:bg-[#39FF14] transition-all neon-glow"
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-[#00FF88] hover:underline font-bold">
                Login
              </Link>
            </p>
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
