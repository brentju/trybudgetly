import Link from 'next/link'
import { ArrowRight, Shield, Brain, PiggyBank, TrendingUp, Zap, Lock, BarChart3, Bell, Smartphone, CreditCard } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with 256-bit encryption and never stored on our servers.',
      details: [
        'Plaid integration for secure account connections',
        'Zero credential storage policy',
        'Real-time fraud monitoring'
      ]
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get personalized financial advice and spending recommendations powered by OpenAI.',
      details: [
        'Personalized budget recommendations',
        'Spending pattern analysis',
        'Financial goal tracking',
        'Emergency fund suggestions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Smart Categorization',
      description: 'Automatically categorize transactions into intuitive buckets with high accuracy.',
      details: [
        'Machine learning transaction categorization',
        'Custom category creation',
        'Merchant recognition',
        'Historical data analysis'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Visualize your spending patterns with beautiful charts and detailed reports.',
      details: [
        'Monthly spending breakdowns',
        'Trend analysis and forecasting',
        'Budget vs. actual comparisons',
        'Custom date range reports'
      ]
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay informed with intelligent alerts about your spending and budget goals.',
      details: [
        'Budget threshold alerts',
        'Unusual spending notifications',
        'Bill payment reminders',
        'Goal achievement celebrations'
      ]
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in minutes with automatic account syncing and intelligent budget creation.',
      details: [
        'One-click account connection via Plaid',
        'AI-generated budget suggestions',
        'Automatic transaction categorization',
        'Instant financial health insights'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Personal Finance
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Build and stick to your budget with personalized AI insights. Connect your accounts, 
              categorize transactions automatically, and get intelligent financial guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://budgetly.up.railway.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="https://budgetly.up.railway.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Try Live Demo
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Bank-level security
            </p>
          </div>
          
          {/* Product mockup placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="card p-8 bg-white/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <PiggyBank size={32} />
                  </div>
                  <p className="text-lg font-medium">Product Demo Video</p>
                  <p className="text-sm opacity-80">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to master your money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Budgetly combines the power of AI with bank-level security to give you 
              complete control over your financial future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with the tools and banks you already use for a unified financial experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <CreditCard className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bank Connections</h3>
                  <p className="text-gray-600">Powered by Plaid</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with thousands of financial institutions across the US and Canada. 
                From major banks to credit unions, we support them all.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                <div>Chase</div>
                <div>Bank of America</div>
                <div>Wells Fargo</div>
                <div>Citi</div>
                <div>Capital One</div>
                <div>And thousands more</div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI Technology</h3>
                  <p className="text-gray-600">Powered by OpenAI</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our intelligent financial assistant uses advanced machine learning to provide 
                personalized insights and recommendations tailored to your unique situation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>GPT-4 Analysis</div>
                <div>Natural Language Processing</div>
                <div>Predictive Modeling</div>
                <div>Personalized Recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security You Can Trust
              </h2>
              <p className="text-xl text-gray-600">
                Your financial security is our top priority. We use industry-leading security 
                measures to protect your data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-600 font-semibold text-sm">256</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Bit Encryption</h3>
                <p className="text-sm text-gray-600">Bank-level encryption for all data transmission</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-600 font-semibold text-sm">0</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Credential Storage</h3>
                <p className="text-sm text-gray-600">We never store your banking credentials</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-600 font-semibold text-sm">24/7</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-sm text-gray-600">Continuous security monitoring and alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to take control of your finances?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey to better financial health with Budgetly's AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://budgetly.up.railway.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl hover:shadow-medium transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a 
                href="https://budgetly.up.railway.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 