# Rasel Power Gym 2 - Complete SvelteKit Setup

## ✅ Conversion Complete!

Your project has been successfully converted from React to **SvelteKit 5**

## 📦 Installation & Running

### 1. Install Dependencies
```bash
npm install
```
or with pnpm:
```bash
pnpm install
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

Then add your Gemini API key to `.env.local`:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

### 3. Start Development Server
```bash
npm run dev
```

**Visit:** http://localhost:5173

## 📁 Complete Project Structure

```
rasel-power-gym-2/
│
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          [ROOT LAYOUT - Header + Footer]
│   │   └── +page.svelte            [HOME PAGE - All sections]
│   │
│   ├── components/
│   │   ├── Header.svelte           [Navigation with mobile menu]
│   │   ├── Hero.svelte             [Hero section with CTA]
│   │   ├── Features.svelte         [Facilities showcase]
│   │   ├── AiMotivation.svelte    [AI quote generator]
│   │   ├── Trainers.svelte         [Trainer profiles]
│   │   ├── Pricing.svelte          [Membership plans]
│   │   └── Footer.svelte           [Footer with links]
│   │
│   └── lib/
│       ├── constants.ts            [App data: trainers, plans, facilities]
│       ├── types.ts               [TypeScript interfaces]
│       └── geminiService.ts       [Google Generative AI integration]
│
├── index.html                      [HTML template with styles]
├── vite.config.ts                 [Vite configuration]
├── svelte.config.js               [SvelteKit adapter config]
├── tsconfig.json                  [TypeScript configuration]
├── package.json                   [Dependencies & scripts]
├── .env.example                   [Environment template]
├── .env.local                     [Local env variables - add API key here]
├── README.md                      [Full documentation]
└── QUICKSTART.md                  [Quick start guide]
```

## 🎯 Key Files Explained

### src/routes/+layout.svelte
**Purpose:** Root layout wrapper  
**Contains:** Header and Footer components  
**Usage:** Applied to ALL pages automatically

```svelte
<Header />
<main>
  <slot />  <!-- Page content goes here -->
</main>
<Footer />
```

### src/routes/+page.svelte
**Purpose:** Home page  
**URL:** `/`  
**Contains:** Hero, Features, AiMotivation, Trainers, Pricing sections

### src/lib/constants.ts
**Purpose:** Centralized data  
**Exports:**
- `PRICING_PLANS` - 3 membership tiers
- `TRAINERS` - 2 trainer profiles
- `FACILITIES` - 4 facility items
- `APP_NAME`, `LOCATION`, `CONTACT_PHONE`, `MAP_LINK`

### src/lib/geminiService.ts
**Purpose:** AI integration  
**Functions:**
- `getMotivationalQuote(goal)` - Generate personalized quotes
- `getFitnessAdvice(userStats)` - Get fitness tips

## 🌐 Environment Variables

Create `.env.local` (don't commit this file):

```env
VITE_GEMINI_API_KEY=your_actual_key_here
```

The `VITE_` prefix makes it accessible to browser code via `import.meta.env`

## 🚀 Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Build optimized production version |
| `npm run preview` | Preview production build locally |
| `npm run check` | Type check TypeScript (find errors) |

## 📱 Responsive Design

Uses Tailwind CSS breakpoints:
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)

Mobile-first approach - starts with mobile styles, then uses `md:` for larger screens.

## 🎨 Styling Stack

1. **Tailwind CSS** - Utility classes (already loaded via CDN)
2. **Custom CSS** - Global styles in `index.html`
3. **Component scoping** - CSS in individual components is scoped

## 🔄 Adding New Pages

To create a new page (e.g., `/about`):

1. Create directory: `src/routes/about/`
2. Create file: `src/routes/about/+page.svelte`
3. Add your content

```svelte
<!-- src/routes/about/+page.svelte -->
<h1>About Us</h1>
<p>Our gym story...</p>
```

Visit http://localhost:5173/about ✓

## 🤖 Using Gemini API

The AI feature in `AiMotivation.svelte` uses:
```typescript
const quote = await getMotivationalQuote("Heavy Deadlifts")
```

This calls the Google Generative AI to generate motivational quotes based on the user's fitness goal.

## 📚 Svelte 5 Basics

### Reactive Variables
```svelte
<script>
  let count = 0;
</script>
<button on:click={() => count++}>Count: {count}</button>
```

### Event Handling
```svelte
<input on:keypress={(e) => e.key === 'Enter' && handleSubmit()} />
<button on:click={handleClick}>Click me</button>
```

### Two-Way Binding
```svelte
<input bind:value={name} />
<p>Hello {name}!</p>
```

### Conditional Rendering
```svelte
{#if loading}
  <p>Loading...</p>
{:else}
  <p>Loaded!</p>
{/if}
```

### Loops
```svelte
{#each items as item (item.id)}
  <div>{item.name}</div>
{/each}
```

## 🔒 Security Notes

- ✅ API keys stored in `.env.local` (not committed)
- ✅ Variables prefixed with `VITE_` are client-visible
- ⚠️ Never hardcode secrets in code
- ✅ `.env.local` in `.gitignore` by default

## 🐛 Troubleshooting

### Dependencies not installing
```bash
npm install
# or for pnpm
pnpm install
```

### "Cannot find module" errors
Make sure all imports use `src/lib/` paths:
```typescript
import { FACILITIES } from '../lib/constants'
```

### AI feature not working
1. Check `.env.local` has `VITE_GEMINI_API_KEY`
2. Restart dev server
3. Verify API key is valid

### Styles not loading
- Tailwind classes require proper HTML structure
- Custom styles in `index.html` are global
- Component styles are scoped

## 📖 Documentation Files

- **README.md** - Full project documentation
- **QUICKSTART.md** - Step-by-step getting started guide
- **MIGRATION_NOTES.txt** - What changed from React

## 🎓 Learning Resources

- [SvelteKit Official Docs](https://kit.svelte.dev/)
- [Svelte 5 Interactive Tutorial](https://svelte.dev/tutorial/svelte/5)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google AI Studio](https://ai.google.dev/)

## 💡 Next Steps

1. ✅ Run `npm install`
2. ✅ Set up `.env.local` with your Gemini API key
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:5173
5. 🎨 Customize styling and content
6. 🚀 Deploy to production when ready

## 🎉 You're All Set!

Your SvelteKit project is ready to go. Start the development server and see your gym website in action!

```bash
npm run dev
```

Happy coding! 💪
