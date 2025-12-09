import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Shield, Link2, Mail, Bell, Chrome, History, 
  CheckCircle2, AlertTriangle, Lock, Zap, Eye,
  Sparkles, ChevronDown, X
} from 'lucide-react'
import MatrixBackground from '../components/MatrixBackground'

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="bg-black text-[#E8FFE8] min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <Shield className="w-20 h-20 text-[#00FF88] mx-auto" style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))' 
              }} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow-strong">
              PISH
            </h1>
            <p className="text-3xl md:text-4xl mb-4 text-[#00FF88]">
              Phishing Intelligence & Security Hub
            </p>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Your Personal Phishing Detection & Awareness System
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Detect malicious links, WhatsApp messages, and emails with AI-powered real-time threat analysis. 
              Stay protected with instant alerts and cybersecurity awareness updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/dashboard')}
                className="bg-[#00FF88] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#39FF14] transition-all neon-glow"
              >
                <Link2 className="inline mr-2" size={20} />
                Scan a Link
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/signup')}
                className="border-2 border-[#00FF88] text-[#00FF88] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00FF88] hover:text-black transition-all"
              >
                Get Started
              </motion.button>
            </div>

            {/* Floating Icons */}
            <div className="mt-16 flex justify-center gap-8 flex-wrap">
              {[Shield, Lock, Eye].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="text-[#00FF88]/30"
                >
                  <Icon size={48} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-[#00FF88]" size={32} />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to stay protected</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: 1, 
                icon: Link2, 
                title: 'Upload or Paste a Link',
                desc: 'Simply paste any suspicious link, email, or WhatsApp message into PISH'
              },
              { 
                step: 2, 
                icon: Zap, 
                title: 'PISH Analyzes Threats',
                desc: 'Our AI-powered engine analyzes threats in real-time using advanced detection algorithms'
              },
              { 
                step: 3, 
                icon: CheckCircle2, 
                title: 'Get Instant Results',
                desc: 'Receive immediate safe/danger results with actionable awareness tips'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-black border border-[#00FF88]/30 rounded-lg p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-9xl font-bold text-[#00FF88]/5">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#00FF88]/10 rounded-full flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
                    <item.icon className="text-[#00FF88]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Step {item.step}</h3>
                  <h4 className="text-xl text-[#00FF88] mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00FF88 1px, transparent 1px), linear-gradient(90deg, #00FF88 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Core Features</h2>
            <p className="text-xl text-gray-400">Everything you need to stay secure online</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Link2, title: 'Link Scanning', desc: 'Instant URL threat detection and analysis' },
              { icon: Mail, title: 'WhatsApp Message Scanning', desc: 'Detect phishing in WhatsApp messages (Pro+)' },
              { icon: Mail, title: 'Email Phishing Detection', desc: 'Protect your inbox from malicious emails' },
              { icon: Bell, title: 'Real-time Cyber Alerts', desc: 'Stay updated with latest threat intelligence' },
              { icon: Sparkles, title: 'User Awareness Updates', desc: 'Learn about new phishing tactics daily' },
              { icon: Chrome, title: 'Browser Extension', desc: 'One-click protection while browsing' },
              { icon: History, title: 'Dashboard & History', desc: 'Track all scans and threats (Pro users)' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0A0A0A] border border-[#00FF88]/20 rounded-lg p-6 hover:border-[#00FF88] transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-[#00FF88] shrink-0 group-hover:text-[#39FF14]" size={24} />
                  <div>
                    <feature.icon className="text-[#00FF88] mb-3" size={32} />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Subscription Plans</h2>
            <p className="text-xl text-gray-400">Choose the perfect plan for your security needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black border border-[#00FF88]/30 rounded-lg p-8 hover:border-[#00FF88] transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold text-[#00FF88] mb-6">₹0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>5 link scans per day</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>No login required</span></li>
                <li className="flex items-start text-gray-500"><X className="text-gray-500 mr-2 shrink-0" size={20} /><span>No alerts</span></li>
              </ul>
              <button onClick={() => navigate('/signup')} className="w-full border border-[#00FF88] text-[#00FF88] py-3 rounded-lg hover:bg-[#00FF88] hover:text-black transition-all">
                Get Started
              </button>
            </motion.div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black border border-[#00FF88]/30 rounded-lg p-8 hover:border-[#00FF88] transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="text-4xl font-bold text-[#00FF88] mb-2">₹999</div>
              <div className="text-sm text-gray-400 mb-6">per year</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Browser extension</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>15 scans per day</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Day-to-day alerts</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>User awareness tips</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Limited history</span></li>
              </ul>
              <button onClick={() => navigate('/signup')} className="w-full bg-[#00FF88] text-black py-3 rounded-lg hover:bg-[#39FF14] transition-all font-bold">
                Choose Basic
              </button>
            </motion.div>

            {/* Pro Plan - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-b from-[#00FF88]/10 to-black border-2 border-[#00FF88] rounded-lg p-8 relative neon-glow transform lg:scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00FF88] text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold text-[#00FF88] mb-2">₹3,599</div>
              <div className="text-sm text-gray-400 mb-6">per year</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>WhatsApp scanning</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Unlimited link scans</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Priority detection</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Prior alerts</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Dashboard access</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Full history logs</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Login required</span></li>
              </ul>
              <button onClick={() => navigate('/signup')} className="w-full bg-[#00FF88] text-black py-3 rounded-lg hover:bg-[#39FF14] transition-all font-bold neon-glow">
                Choose Pro
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black border border-[#00FF88]/30 rounded-lg p-8 hover:border-[#00FF88] transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-[#00FF88] mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Team accounts</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>API access</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Threat reports</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Full all-over scanning</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Custom security integration</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-[#00FF88] mr-2 shrink-0" size={20} /><span>Dedicated support</span></li>
              </ul>
              <button className="w-full border border-[#00FF88] text-[#00FF88] py-3 rounded-lg hover:bg-[#00FF88] hover:text-black transition-all">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-time Alerts Section */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Real-time Security Alerts</h2>
            <p className="text-xl text-gray-400">Stay ahead of the latest threats</p>
          </motion.div>

          <div className="relative">
            <div className="flex animate-[slide_20s_linear_infinite] space-x-6">
              {[
                { icon: AlertTriangle, text: '⚠️ New WhatsApp phishing scam targeting India', type: 'critical' },
                { icon: AlertTriangle, text: '⚠️ Fake bank URLs circulating today', type: 'warning' },
                { icon: AlertTriangle, text: '⚠️ Malware-spread links detected across e-commerce', type: 'critical' },
                { icon: Bell, text: '🔔 New security update available', type: 'info' },
                { icon: Shield, text: '✅ 50,000+ threats blocked this week', type: 'success' },
                { icon: AlertTriangle, text: '⚠️ Fake government portal detected', type: 'critical' },
              ].concat([
                { icon: AlertTriangle, text: '⚠️ New WhatsApp phishing scam targeting India', type: 'critical' },
                { icon: AlertTriangle, text: '⚠️ Fake bank URLs circulating today', type: 'warning' },
                { icon: AlertTriangle, text: '⚠️ Malware-spread links detected across e-commerce', type: 'critical' },
              ]).map((alert, i) => (
                <div
                  key={i}
                  className="shrink-0 bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg p-6 min-w-[400px] hover:border-[#00FF88] transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <alert.icon className="text-[#00FF88]" size={24} />
                    <p className="text-lg">{alert.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Pro Dashboard Preview</h2>
            <p className="text-xl text-gray-400">Complete visibility of your security status</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Recent Scans', value: '127', icon: Link2, color: '#00FF88' },
              { title: 'Threats Blocked', value: '43', icon: Shield, color: '#FF0000' },
              { title: 'Security Score', value: '98%', icon: CheckCircle2, color: '#00FF88' },
              { title: 'WhatsApp Messages', value: '35', icon: Mail, color: '#00FF88' },
              { title: 'Active Alerts', value: '5', icon: Bell, color: '#FFD700' },
              { title: 'History Logs', value: '500+', icon: History, color: '#00FF88' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black border-2 border-[#00FF88]/30 rounded-lg p-6 hover:neon-glow transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 opacity-5">
                  <stat.icon size={120} className="text-[#00FF88]" />
                </div>
                <div className="relative z-10">
                  <stat.icon className="text-[#00FF88] mb-4" size={32} />
                  <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-gray-400">{stat.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="bg-[#00FF88] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#39FF14] transition-all neon-glow"
            >
              Upgrade to Pro
            </motion.button>
          </div>
        </div>
      </section>

      {/* Browser Extension Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Browser Extension</h2>
              <p className="text-xl text-gray-400 mb-8">
                One-click protection while you browse. Available for Chrome, Edge, and Brave.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#00FF88] mr-3 shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">One-Click Scanning</h3>
                    <p className="text-gray-400">Scan any link instantly from your browser</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#00FF88] mr-3 shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Real-Time Blocking</h3>
                    <p className="text-gray-400">Automatic protection before you click</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#00FF88] mr-3 shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Privacy First</h3>
                    <p className="text-gray-400">Your data never leaves your device</p>
                  </div>
                </li>
              </ul>
              <div className="flex space-x-4">
                <button className="bg-[#00FF88] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#39FF14] transition-all flex items-center">
                  <Chrome className="mr-2" size={20} />
                  Add to Chrome
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#0A0A0A] border-2 border-[#00FF88] rounded-lg p-8 neon-glow">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-black rounded px-4 py-1 text-sm text-gray-400">
                    suspicious-link.com
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 text-center">
                  <AlertTriangle className="text-red-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-red-500 mb-2">⚠️ PHISHING DETECTED</h3>
                  <p className="text-gray-400 mb-4">This website has been flagged as malicious</p>
                  <button className="bg-[#00FF88] text-black px-6 py-2 rounded font-bold">
                    Block & Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">What Users Say</h2>
            <p className="text-xl text-gray-400">Trusted by thousands of security-conscious users</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'IT Manager',
                text: 'PISH saved me from a fake banking link. The real-time detection is incredibly fast and accurate!',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                role: 'Small Business Owner',
                text: 'The WhatsApp scanning feature is a game-changer. I feel so much safer now when receiving messages.',
                rating: 5
              },
              {
                name: 'Amit Patel',
                role: 'Software Developer',
                text: 'The browser extension is seamless. It works quietly in the background and alerts me instantly.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black border border-[#00FF88]/30 rounded-lg p-6 hover:border-[#00FF88] transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="text-[#00FF88]" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-[#00FF88]">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about PISH</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How does PISH detect phishing?',
                a: 'PISH uses advanced AI algorithms and real-time threat intelligence databases to analyze URLs, content patterns, and behavioral indicators to detect phishing attempts with high accuracy.'
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We use end-to-end encryption and never store your personal messages or browsing data. All analysis happens securely, and we only keep anonymous threat statistics.'
              },
              {
                q: 'How many scans do I get?',
                a: 'Free users get 5 scans per day, Basic users get 15 per day, and Pro users get unlimited scans. Enterprise plans are customized to your needs.'
              },
              {
                q: 'What does Pro include?',
                a: 'Pro includes WhatsApp message scanning, unlimited link scans, priority detection, prior alerts, full dashboard access, complete history logs, and requires login for personalized protection.'
              },
              {
                q: 'Is WhatsApp scanning safe?',
                a: 'Yes! We never access your WhatsApp account directly. You manually paste suspicious messages into PISH, and we analyze the content without storing it. Your privacy is our priority.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg overflow-hidden hover:border-[#00FF88] transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`text-[#00FF88] transition-transform ${faqOpen === i ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Get In Touch</h2>
            <p className="text-xl text-gray-400">Have questions? We're here to help</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="bg-black border border-[#00FF88]/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#00FF88]">Send us a Message</h3>
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-[#0A0A0A] border border-[#00FF88]/30 rounded-lg px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-all resize-none text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00FF88] text-black py-3 rounded-lg font-bold hover:bg-[#39FF14] transition-all"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400">For Enterprise inquiries, <a href="mailto:info@pish.com?subject=Enterprise%20Inquiry" className="text-[#00FF88] hover:underline">click here</a></p>
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-black border border-[#00FF88]/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#00FF88]">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+917208151678"
                    className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-lg hover:border hover:border-[#00FF88] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#00FF88]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#00FF88]/20 transition-all">
                      <svg className="w-6 h-6 text-[#00FF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Contact Number</div>
                      <div className="font-bold text-lg group-hover:text-[#00FF88] transition-colors">+91 72081 51678</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@pish.com"
                    className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-lg hover:border hover:border-[#00FF88] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#00FF88]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#00FF88]/20 transition-all">
                      <Mail className="text-[#00FF88]" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email Address</div>
                      <div className="font-bold text-lg group-hover:text-[#00FF88] transition-colors">info@pish.com</div>
                    </div>
                  </a>

                  {/* Address */}
                  <a 
                    href="https://www.google.com/maps/place/Somaiya+Vidyavihar+University/@19.0727,72.8991,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-lg hover:border hover:border-[#00FF88] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#00FF88]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#00FF88]/20 transition-all">
                      <svg className="w-6 h-6 text-[#00FF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Our Address</div>
                      <div className="font-bold text-lg group-hover:text-[#00FF88] transition-colors">
                        Somaiya Vidyavihar University<br />
                        <span className="text-sm text-gray-400">Mumbai, India</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black border-2 border-[#00FF88]/30 rounded-lg overflow-hidden hover:border-[#00FF88] transition-all"
              >
                <a 
                  href="https://www.google.com/maps/place/Somaiya+Vidyavihar+University/@19.0727,72.8991,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267662805546!2d72.89685931490088!3d19.072737087093595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62574d6e48d%3A0x5e5a1b8f3e3e6b39!2sSomaiya%20Vidyavihar%20University!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                  <div className="absolute inset-0 bg-[#00FF88]/0 group-hover:bg-[#00FF88]/10 transition-all flex items-center justify-center">
                    <span className="bg-[#00FF88] text-black px-6 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Open in Google Maps
                    </span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
