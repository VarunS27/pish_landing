import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Shield, Link2, Mail, Bell, History, 
  CheckCircle2, AlertTriangle, Search, Trash2,
  TrendingUp, Activity, Eye, Download, Calendar
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [scanUrl, setScanUrl] = useState('')
  const [scanResult, setScanResult] = useState(null)
  const [scanning, setScanning] = useState(false)
  const [scanHistory, setScanHistory] = useState([])
  const [activeTab, setActiveTab] = useState('scanner')

  useEffect(() => {
    const userData = localStorage.getItem('pish_user')
    if (!userData) {
      navigate('/login')
      return
    }
    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Load scan history
    const history = JSON.parse(localStorage.getItem(`pish_history_${parsedUser.email}`) || '[]')
    setScanHistory(history)
  }, [navigate])

  const handleScan = async (e) => {
    e.preventDefault()
    setScanning(true)
    setScanResult(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simple phishing detection (demo logic)
    const suspiciousKeywords = ['login', 'verify', 'account', 'suspended', 'confirm', 'update', 'secure', 'click', 'urgent']
    const isSuspicious = suspiciousKeywords.some(keyword => scanUrl.toLowerCase().includes(keyword))
    const isShortUrl = scanUrl.includes('bit.ly') || scanUrl.includes('tinyurl') || scanUrl.includes('goo.gl')
    const hasHttps = scanUrl.startsWith('https://')
    
    const threatLevel = isSuspicious || isShortUrl || !hasHttps ? 'HIGH' : 'LOW'
    const isSafe = threatLevel === 'LOW'

    const result = {
      url: scanUrl,
      safe: isSafe,
      threatLevel,
      timestamp: new Date().toISOString(),
      details: {
        https: hasHttps,
        suspicious: isSuspicious,
        shortUrl: isShortUrl,
        score: isSafe ? 95 : 25
      }
    }

    setScanResult(result)
    setScanning(false)

    // Save to history
    const newHistory = [result, ...scanHistory].slice(0, 50)
    setScanHistory(newHistory)
    if (user) {
      localStorage.setItem(`pish_history_${user.email}`, JSON.stringify(newHistory))
    }
  }

  const clearHistory = () => {
    setScanHistory([])
    if (user) {
      localStorage.removeItem(`pish_history_${user.email}`)
    }
  }

  const stats = {
    totalScans: scanHistory.length,
    threatsBlocked: scanHistory.filter(s => !s.safe).length,
    securityScore: scanHistory.length > 0 
      ? Math.round((scanHistory.filter(s => s.safe).length / scanHistory.length) * 100)
      : 100,
    whatsappScans: Math.floor(scanHistory.length * 0.3)
  }

  if (!user) return null

  return (
    <div className="bg-black text-[#E8FFE8] min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-glow">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-400">Your security dashboard • {user.plan} Plan</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Scans', value: stats.totalScans, icon: Link2, color: '#00FF88' },
            { title: 'Threats Blocked', value: stats.threatsBlocked, icon: Shield, color: '#FF0000' },
            { title: 'Security Score', value: `${stats.securityScore}%`, icon: CheckCircle2, color: '#00FF88' },
            { title: 'WhatsApp Scans', value: stats.whatsappScans, icon: Mail, color: '#00FF88' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0A0A0A] border-2 border-[#00FF88]/30 rounded-lg p-6 hover:border-[#00FF88] transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 opacity-5">
                <stat.icon size={120} className="text-[#00FF88]" />
              </div>
              <div className="relative z-10">
                <stat.icon className="text-[#00FF88] mb-4" size={32} />
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-[#00FF88]/20">
          {[
            { id: 'scanner', label: 'Link Scanner', icon: Search },
            { id: 'history', label: 'Scan History', icon: History },
            { id: 'alerts', label: 'Security Alerts', icon: Bell }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-bold transition-all ${
                activeTab === tab.id
                  ? 'text-[#00FF88] border-b-2 border-[#00FF88]'
                  : 'text-gray-400 hover:text-[#00FF88]'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Scanner Tab */}
        {activeTab === 'scanner' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-[#0A0A0A] border-2 border-[#00FF88]/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-glow">Scan a Link</h2>
              <form onSubmit={handleScan} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Enter URL or Message</label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FF88]" size={20} />
                    <input
                      type="text"
                      required
                      value={scanUrl}
                      onChange={(e) => setScanUrl(e.target.value)}
                      placeholder="https://example.com or paste WhatsApp message"
                      className="w-full bg-black border border-[#00FF88]/30 rounded-lg pl-12 pr-4 py-4 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={scanning}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    scanning
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-[#00FF88] text-black hover:bg-[#39FF14] neon-glow'
                  }`}
                >
                  {scanning ? (
                    <span className="flex items-center justify-center">
                      <Activity className="animate-spin mr-2" size={20} />
                      Analyzing...
                    </span>
                  ) : (
                    'Scan Now'
                  )}
                </motion.button>
              </form>

              {scanResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mt-8 p-6 rounded-lg border-2 ${
                    scanResult.safe
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-red-500/10 border-red-500'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {scanResult.safe ? (
                      <CheckCircle2 className="text-green-500 shrink-0" size={48} />
                    ) : (
                      <AlertTriangle className="text-red-500 shrink-0" size={48} />
                    )}
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${scanResult.safe ? 'text-green-500' : 'text-red-500'}`}>
                        {scanResult.safe ? '✅ Safe Link' : '⚠️ Potential Threat Detected'}
                      </h3>
                      <p className="text-gray-300 mb-4 break-all">{scanResult.url}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-400">Threat Level:</span>
                          <div className={`font-bold ${scanResult.safe ? 'text-green-500' : 'text-red-500'}`}>
                            {scanResult.threatLevel}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Security Score:</span>
                          <div className="font-bold text-[#00FF88]">{scanResult.details.score}/100</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">HTTPS:</span>
                          <div className="font-bold">{scanResult.details.https ? '✅ Yes' : '❌ No'}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Suspicious Content:</span>
                          <div className="font-bold">{scanResult.details.suspicious ? '⚠️ Yes' : '✅ No'}</div>
                        </div>
                      </div>
                      {!scanResult.safe && (
                        <div className="bg-black/50 rounded p-4">
                          <h4 className="font-bold text-[#00FF88] mb-2">⚡ Recommendations:</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>• Do not click on this link</li>
                            <li>• Do not enter any personal information</li>
                            <li>• Report this link if received via message</li>
                            <li>• Verify the sender's identity through official channels</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* User Tips */}
            <div className="bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#00FF88]">🛡️ Security Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Always verify URLs before clicking</li>
                <li>• Look for HTTPS in the address bar</li>
                <li>• Be cautious of urgent messages asking for personal info</li>
                <li>• Don't trust shortened URLs without verification</li>
                <li>• Enable two-factor authentication on important accounts</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-[#0A0A0A] border-2 border-[#00FF88]/30 rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-glow">Scan History</h2>
                {scanHistory.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={20} />
                    <span>Clear History</span>
                  </button>
                )}
              </div>

              {scanHistory.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <History size={64} className="mx-auto mb-4 opacity-30" />
                  <p>No scans yet. Start scanning links to see your history.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {scanHistory.map((scan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-black border border-[#00FF88]/20 rounded-lg p-4 hover:border-[#00FF88] transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        {scan.safe ? (
                          <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        ) : (
                          <AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-400 mb-1">
                            {new Date(scan.timestamp).toLocaleString()}
                          </p>
                          <p className="text-white break-all mb-2">{scan.url}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              scan.safe ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                              {scan.safe ? 'SAFE' : 'THREAT'}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-[#00FF88]/20 text-[#00FF88]">
                              Score: {scan.details.score}/100
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-[#0A0A0A] border-2 border-[#00FF88]/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-glow">Security Alerts</h2>
              <div className="space-y-4">
                {[
                  { 
                    title: 'New WhatsApp phishing campaign detected',
                    desc: 'Fake delivery notifications targeting India. Be cautious of SMS with tracking links.',
                    time: '2 hours ago',
                    type: 'critical'
                  },
                  { 
                    title: 'Banking fraud alert',
                    desc: 'Fake banking websites mimicking major Indian banks detected. Always verify URLs.',
                    time: '5 hours ago',
                    type: 'warning'
                  },
                  { 
                    title: 'Security update available',
                    desc: 'New phishing signatures added to our database. Your protection is up to date.',
                    time: '1 day ago',
                    type: 'info'
                  },
                  { 
                    title: 'E-commerce scam warning',
                    desc: 'Fake shopping websites offering unrealistic discounts. Verify before purchase.',
                    time: '2 days ago',
                    type: 'warning'
                  }
                ].map((alert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-black border border-[#00FF88]/20 rounded-lg p-6 hover:border-[#00FF88] transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <Bell className="text-[#00FF88] shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{alert.title}</h3>
                        <p className="text-gray-400 mb-2">{alert.desc}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-500">{alert.time}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            alert.type === 'critical' ? 'bg-red-500/20 text-red-500' :
                            alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-500' :
                            'bg-blue-500/20 text-blue-500'
                          }`}>
                            {alert.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
