import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budgetly - AI-Powered Personal Finance Made Simple',
  description: 'Build and stick to your budget with AI-powered insights. Budgetly connects to your bank accounts, categorizes transactions, and provides personalized financial guidance.',
  keywords: 'budgeting, personal finance, AI, money management, financial planning, expense tracking',
  authors: [{ name: 'Budgetly Team' }],
  openGraph: {
    title: 'Budgetly - AI-Powered Personal Finance Made Simple',
    description: 'Build and stick to your budget with AI-powered insights. Budgetly connects to your bank accounts, categorizes transactions, and provides personalized financial guidance.',
    url: 'https://budgetly.com',
    siteName: 'Budgetly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budgetly - AI-Powered Personal Finance Made Simple',
    description: 'Build and stick to your budget with AI-powered insights.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 