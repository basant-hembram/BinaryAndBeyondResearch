# Finyzer Assets

A modern, responsive mutual fund distributor website built with React, TypeScript, Tailwind CSS, and Shadcn/ui components.

## Features

- 🎨 Modern and responsive design with Tailwind CSS
- ⚡ Built with Vite for fast development and optimized builds
- 🎯 TypeScript for type safety and better developer experience
- 💅 Shadcn/ui component library for consistent UI
- 📊 Interactive Financial Calculators (SIP, Lumpsum, SWP, etc.)
- 📱 Fully responsive mobile-friendly layout
- 🎭 Smooth animations and transitions
- 📝 JSON-based content management system
- 📰 Blog system with detailed article pages
- 🔍 Mutual Fund research and trailing returns data
- 👥 Team and testimonials showcase
- 📧 Contact forms and inquiry management
- 🖼️ Optimized AVIF image format for better performance
- 🔐 Privacy Policy, Terms of Use, and Disclaimer pages
- 🎓 Comprehensive "Become a Distributor" career section
- 📋 Important links and resources section
- 🔄 Backend server for form handling and API endpoints

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
FinyzerAssets/
├── src/
│   ├── components/
│   │   ├── ui/                          # Shadcn/ui components
│   │   ├── common/                      # Common/shared components
│   │   ├── home/                        # Home page components
│   │   ├── about/                       # About page components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── OurFounders.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   └── WhyTrustUs.tsx
│   │   ├── become-distributor/          # Become Distributor page components
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── CareerSection.tsx
│   │   │   ├── ComplianceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IndustryGrowthSection.tsx
│   │   │   ├── OfferingsSection.tsx
│   │   │   ├── StepsSection.tsx
│   │   │   └── SupportDistributorsSection.tsx
│   │   ├── blog/                        # Blog components
│   │   ├── calculator/                  # Calculator components
│   │   ├── contact-us/                  # Contact page components
│   │   ├── services/                    # Services page components
│   │   ├── mfresearch/                  # MF Research page components
│   │   ├── important-links/             # Important Links page components
│   │   └── SuccessStories.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Services.tsx
│   │   ├── BecomeDistributor.tsx
│   │   ├── MFResearch.tsx
│   │   ├── Calculator.tsx
│   │   ├── BlogDetailPage.tsx
│   │   ├── LatestBlogs.tsx
│   │   ├── ContactUs.tsx
│   │   ├── ImportantLinks.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfUse.tsx
│   │   └── Disclaimer.tsx
│   ├── data/
│   │   ├── about.json
│   │   ├── becomeDistributor.json
│   │   ├── blog.json
│   │   ├── calculator.json
│   │   ├── contact.json
│   │   ├── disclaimer.json
│   │   ├── faq.json
│   │   ├── footer.json
│   │   ├── header.json
│   │   ├── hero.json
│   │   ├── home.json
│   │   ├── importantLinks.json
│   │   ├── mfresearch.json
│   │   ├── privacyPolicy.json
│   │   ├── services.json
│   │   ├── team.json
│   │   ├── termsOfUse.json
│   │   ├── testimonials.json
│   │   ├── trailingReturns.json
│   │   └── index.ts
│   ├── assets/
│   │   ├── images/
│   │   └── logo/
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       ├── about-finyzer.avif
│       ├── blog-banner.avif
│       ├── career-mutual-fund-distribution.avif
│       ├── contact.avif
│       ├── finyser-calculator.avif
│       └── ... (various image assets)
├── server/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vite-env.d.ts
├── tailwind.config.js
├── postcss.config.js
├── CONTENT_MANAGEMENT_GUIDE.md
└── README.md
```

## Technologies Used

### Frontend
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type safety and enhanced IDE support
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Customizable component library
- **Recharts** - Charts library for financial visualizations
- **Lucide React** - Modern icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - Server runtime
- **Express** - Web framework (likely based on server directory)

### Build & Config
- **PostCSS** - CSS processing
- **ESBuild** - Fast JavaScript bundler (via Vite)

### Content Management
- **JSON-based data files** - Easy content updates without code changes
- **AVIF image format** - Modern, highly compressed images

## Customization

### Colors

The main brand colors are defined in the Tailwind config and can be customized:
- Primary: `#0A1A3A` (Navy Blue)
- Accent: `#E6AF1C` (Teal)
- Secondary: `#E6AF1C` (Orange)

### Content

Update the content in each component file to match your business needs.

## License

MIT

## Contact

For any queries, reach out to info@finyzerassets.com
