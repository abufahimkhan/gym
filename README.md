# Rasel Power Gym 2

A modern fitness gym website built with **SvelteKit 5** and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework**: SvelteKit 5 (Svelte's full-stack framework)
- **Styling**: Tailwind CSS
- **AI Integration**: Google Generative AI (Gemini)
- **Build Tool**: Vite
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte      # Root layout with Header & Footer
│   └── +page.svelte        # Home page with all sections
├── components/
│   ├── Header.svelte       # Navigation header
│   ├── Hero.svelte         # Hero section
│   ├── Features.svelte      # Facilities section
│   ├── AiMotivation.svelte # AI quote generator
│   ├── Trainers.svelte     # Trainer profiles
│   ├── Pricing.svelte      # Membership plans
│   └── Footer.svelte       # Footer
└── lib/
    ├── constants.ts        # App constants & data
    ├── types.ts           # TypeScript interfaces
    └── geminiService.ts   # AI service integration
```

## 🎯 Key Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **AI Integration** - Generate personalized motivational quotes using Gemini API
- ✅ **Intersection Observer** - Smooth scroll animations
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Pricing Section** - Membership plan cards
- ✅ **Trainer Profiles** - Showcase team members
- ✅ **Facilities Display** - Modern gym equipment showcase

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rasel-power-gym-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then add your Gemini API key to `.env.local`:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
The app will start at `http://localhost:5173` (default SvelteKit port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check

## 🌐 Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
```

**Note**: The `VITE_` prefix is required for Vite to expose env variables to the client.

## 📚 SvelteKit Routing

This project uses SvelteKit's file-based routing:

- `src/routes/+page.svelte` - Home page (/)
- `src/routes/+layout.svelte` - Root layout (applied to all routes)

To add new routes, create files in `src/routes/`:
- `src/routes/about/+page.svelte` → `/about`
- `src/routes/contact/+page.svelte` → `/contact`

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- Custom scrollbar styling in `index.html`
- Hero gradient background
- Responsive grid layouts

## 🤖 AI Features

The app includes Google Generative AI integration:

```typescript
// Generate motivational quotes based on user goals
const quote = await getMotivationalQuote("Heavy Deadlifts")
```

API calls are handled in `src/lib/geminiService.ts`

## 📱 Responsive Breakpoints

Uses Tailwind's standard breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔐 Security

- Environment variables are properly scoped
- API keys should never be committed to version control
- Always use `.env.local` for local development

## 📖 Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Svelte 5 Guide](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Generative AI](https://ai.google.dev/)

## 📝 License

This project is part of Rasel Power Gym 2 branding.

---

Happy coding! 💪

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# rasel-power-gym
