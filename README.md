# Budgetly Marketing Website

A modern, mobile-responsive marketing website for Budgetly - an AI-powered personal finance application that helps users build and stick to budgets with intelligent insights and secure bank account connections.

![Budgetly Logo](https://via.placeholder.com/400x200/0ea5e9/ffffff?text=Budgetly)

## 🌟 Features

- **Modern Design**: Clean, minimal, yet playful design aesthetic with blue-to-green gradient theme
- **Mobile Responsive**: Fully optimized for all device sizes
- **AI-Focused**: Highlights AI-powered insights and OpenAI integration
- **Security Emphasis**: Showcases bank-level security and Plaid integration
- **SEO Optimized**: Built with Next.js App Router and proper meta tags
- **Performance**: Optimized for fast loading and Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Typography**: Inter font family
- **Deployment**: Vercel-ready
- **Language**: TypeScript

## 📄 Pages

- **Home** (`/`) - Hero section, key features, social proof, testimonials
- **Features** (`/features`) - Detailed feature breakdown with security focus
- **About** (`/about`) - Company mission, team, and values
- **Blog** (`/blog`) - Educational finance content and articles
- **Contact** (`/contact`) - Contact form and company information
- **Sign Up** (`/signup`) - User registration with social auth options
- **Log In** (`/login`) - User authentication with password reset

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Green gradient (#22c55e to #16a34a)
- **Gradients**: Custom blue-to-green gradient matching brand
- **Grays**: Comprehensive gray scale for text and backgrounds

### Components
- **Navigation**: Sticky header with mobile menu
- **Cards**: Rounded corners with soft shadows
- **Buttons**: Primary and secondary styles with hover effects
- **Forms**: Clean input fields with focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd budgetly-platform-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
budgetly-platform-website/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── blog/                # Blog listing page
│   ├── contact/             # Contact page
│   ├── features/            # Features page
│   ├── login/               # Login page
│   ├── signup/              # Sign up page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── Navigation.tsx       # Header navigation
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎯 Key Features Highlighted

### AI-Powered Insights
- OpenAI integration for personalized financial advice
- Intelligent transaction categorization
- Smart budget recommendations
- Spending pattern analysis

### Security & Trust
- Plaid integration for secure bank connections
- Bank-level encryption (256-bit)
- SOC 2 Type II compliance
- Zero credential storage policy

### User Experience
- Automatic transaction categorization
- Real-time financial insights
- Mobile-first responsive design
- Intuitive navigation and interactions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
```bash
npm install -g vercel
vercel
```

2. **Configure Environment**
- No environment variables needed for static marketing site
- All external links (like `/app`) are configured in `next.config.js`

3. **Deploy**
```bash
vercel --prod
```

### Alternative Deployments

**Netlify**
```bash
npm run build
# Upload dist folder to Netlify
```

**Manual Build**
```bash
npm run build
npm run start
```

## 🔗 Integration Points

- **Main App**: Links to production app at `https://budgetly.up.railway.app`
- **Demo Access**: `/app` route redirects to live application
- **Auth Flow**: Sign up/login pages can be integrated with actual auth system

## 📱 Responsive Design

- **Mobile First**: Designed primarily for mobile experience
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Optimized**: All interactive elements are touch-friendly

## 🎨 Customization

### Adding New Content

**Blog Posts**: Add new blog post data to the `posts` array in `/app/blog/page.tsx`

**Team Members**: Update the `team` array in `/app/about/page.tsx`

**Features**: Modify the `features` array in `/app/features/page.tsx`

### Updating Brand Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    // Update blue shades
  },
  secondary: {
    // Update green shades
  }
}
```

### Adding Real Images

Replace placeholder images in the following locations:
- Hero section product mockup
- Blog post images
- Team member photos
- Feature illustrations

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Inter font loading
- **Bundle Size**: Minimal JavaScript for fast loading

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create new directory in `/app`
2. Add `page.tsx` file
3. Include Navigation and Footer components
4. Update navigation links in `components/Navigation.tsx`

## 📞 Support

For questions or issues:
- **Email**: support@budgetly.com
- **Demo**: [https://budgetly.up.railway.app](https://budgetly.up.railway.app)

## 📄 License

This project is private and proprietary to Budgetly.

---

Built with ❤️ for better financial wellness 