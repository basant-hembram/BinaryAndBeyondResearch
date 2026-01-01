# Finyzer Assets

A modern, responsive mutual fund distributor website built with React, TypeScript, Tailwind CSS, and Shadcn/ui components.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Vite for fast development
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🧩 Shadcn/ui components
- 📊 Interactive SIP Calculator with Recharts
- 📱 Mobile-friendly responsive layout
- 🎭 Smooth animations and transitions

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
finyzer/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── WhyInvestors.tsx
│   │   ├── MeetYourPartner.tsx
│   │   ├── FinancialProducts.tsx
│   │   ├── SIPCalculator.tsx
│   │   ├── MutualFundResources.tsx
│   │   ├── Founders.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Recharts** - Charts library
- **Lucide React** - Icons

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


