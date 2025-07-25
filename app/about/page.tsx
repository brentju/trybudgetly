import Link from 'next/link'
import { Target, Users, Shield, Lightbulb } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your financial privacy and security are our top priorities. We use bank-level encryption and never store your credentials.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge AI technology to provide personalized insights that actually help you improve your financial life.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Financial wellness is a journey best shared. We build tools that bring people together around shared financial goals.'
    },
    {
      icon: Target,
      title: 'Simplicity',
      description: 'Complex financial concepts made simple. We believe everyone deserves access to powerful financial tools, regardless of expertise.'
    }
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former fintech executive with 10+ years building consumer financial products.',
      initials: 'AC'
    },
    {
      name: 'Sarah Williams',
      role: 'Co-Founder & CTO',
      bio: 'AI researcher and full-stack engineer passionate about democratizing financial technology.',
      initials: 'SW'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      bio: 'Product leader focused on creating intuitive experiences for complex financial workflows.',
      initials: 'MJ'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Personal Finance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We believe everyone deserves access to intelligent financial tools that help them 
              make better decisions, build wealth, and achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Financial stress affects millions of people worldwide. Traditional budgeting tools 
                  are complex, time-consuming, and often fail to provide actionable insights.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We founded Budgetly to change that. By combining the power of artificial intelligence 
                  with bank-level security, we've created a platform that makes personal finance 
                  simple, secure, and actually helpful.
                </p>
                <p className="text-lg text-gray-600">
                  Our goal is to empower everyone to take control of their financial future, 
                  regardless of their background or experience level.
                </p>
              </div>
              <div className="relative">
                <div className="card p-8 bg-gradient-soft">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Target className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-600">
                      A world where everyone has the tools and knowledge to make 
                      confident financial decisions and build lasting wealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development 
              to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a diverse group of engineers, designers, and financial experts 
              united by a passion for making finance accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-padding">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to helping people achieve financial wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-lg opacity-90">Money Managed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're looking to improve your financial health or want to help us 
              build the future of personal finance, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://budgetly.up.railway.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Your Journey
              </a>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 