# Quick Start Guide - Rasel Power Gym 2

## What's New? ✨

Your project has been **fully converted to SvelteKit 5** with proper routing and project structure!

### What is SvelteKit?
SvelteKit is a full-stack framework built on top of Svelte 5. It provides:
- **File-based routing** - Routes are defined by the file structure in `src/routes/`
- **Built-in development server** - No need for separate tools
- **Automatic code splitting** - Optimized production builds
- **API routes** - Built-in backend capabilities

## 🚀 Getting Started

### Step 1: Install Dependencies
```bash
npm install
# or if you use pnpm:
pnpm install
# or if you use yarn:
yarn install
```

### Step 2: Create Environment File
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### Step 3: Run Development Server
```bash
npm run dev
```

The app will be running at: **http://localhost:5173**

## 📁 Project Structure Explained

```
rasel-power-gym-2/
├── src/
│   ├── routes/                 ← SvelteKit routing
│   │   ├── +layout.svelte      ← Root layout (Header + Footer)
│   │   ├── +page.svelte        ← Home page (/)
│   │   └── [others].svelte     ← Add more pages here
│   ├── components/              ← Reusable components
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── Features.svelte
│   │   ├── AiMotivation.svelte
│   │   ├── Trainers.svelte
│   │   ├── Pricing.svelte
│   │   └── Footer.svelte
│   └── lib/                    ← Utilities & services
│       ├── constants.ts         ← App data
│       ├── types.ts            ← TypeScript types
│       └── geminiService.ts    ← AI service
├── index.html                  ← HTML template
├── vite.config.ts             ← Vite config
├── svelte.config.js           ← SvelteKit config
├── tsconfig.json              ← TypeScript config
├── package.json               ← Dependencies
└── .env.example               ← Environment template
```

## 🔄 How Routing Works

SvelteKit uses **file-based routing**. The file structure in `src/routes/` determines the URLs:

| File Path | URL |
|-----------|-----|
| `src/routes/+page.svelte` | `/` (home) |
| `src/routes/about/+page.svelte` | `/about` |
| `src/routes/contact/+page.svelte` | `/contact` |

**Layout files** (`+layout.svelte`) wrap all pages in their directory:
- `src/routes/+layout.svelte` - Wraps ALL pages with Header + Footer

## 📝 Adding New Routes

To create an "About" page:

1. Create folder: `src/routes/about/`
2. Create file: `src/routes/about/+page.svelte`
3. Add your content

That's it! Visit `/about` and it's automatically available.

## 🎯 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # Type check (find TypeScript errors)
```

## 🌐 Environment Variables

The `.env.local` file (not committed to git) holds your secrets:

```env
VITE_GEMINI_API_KEY=your_key_here
```

**Important**: The `VITE_` prefix makes it accessible in browser code. Variables without this prefix are server-only.

## 🤖 Using the AI Feature

The AI motivational quote feature is in `src/components/AiMotivation.svelte`:

```typescript
// In src/lib/geminiService.ts
export const getMotivationalQuote = async (goal: string) => {
  // Calls Gemini API to generate quotes
}
```

Users enter their fitness goal and get a personalized quote!

## 🎨 Styling

- **Tailwind CSS** - Utility classes for styling
- **Custom CSS** - Global styles in `index.html`
- Dark theme optimized for gym vibes 💪

## 📱 Features Overview

✅ **Hero Section** - Eye-catching intro with image  
✅ **Facilities** - 4-column facility showcase  
✅ **AI Motivator** - Get personalized quotes  
✅ **Trainer Profiles** - Team member cards  
✅ **Pricing Plans** - 3-tier membership options  
✅ **Mobile Menu** - Responsive navigation  
✅ **Scroll Animations** - Smooth fade-in effects  

## 🐛 Troubleshooting

### "vite is not recognized"
Make sure you ran `npm install` or `pnpm install`

### Port 5173 already in use?
The dev server will use the next available port automatically, or you can specify:
```bash
npm run dev -- --port 3000
```

### Environment variable not loading?
Make sure:
1. File is named `.env.local` (not `.env`)
2. Variable starts with `VITE_`
3. Restart dev server after changing `.env.local`

### AI feature not working?
Check:
1. API key is correctly set in `.env.local`
2. Key has Generative AI access
3. Network connection is working

## 📚 Learning Resources

- [SvelteKit Docs](https://kit.svelte.dev/)
- [Svelte 5 Tutorial](https://svelte.dev/tutorial/svelte/5)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Generative AI](https://ai.google.dev/)

## 🎓 Key Svelte Concepts

### Reactive Variables
```svelte
<script>
  let count = 0;
  // Automatically reactive!
</script>

<button on:click={() => count++}>
  Clicked {count} times
</button>
```

### Event Handling
```svelte
<button on:click={handleClick}>Click me</button>
<input on:keypress={handleKeyPress} />
```

### Conditional Rendering
```svelte
{#if user}
  <p>Welcome, {user.name}!</p>
{:else}
  <p>Please log in</p>
{/if}
```

### Loops
```svelte
<ul>
  {#each items as item}
    <li>{item.name}</li>
  {/each}
</ul>
```

## 💡 Tips & Best Practices

1. **Keep components small** - Break UI into reusable pieces
2. **Use TypeScript** - Catch errors early with types
3. **Leverage Tailwind** - Don't write custom CSS unless needed
4. **Organize imports** - Put constants/types in `src/lib/`
5. **Test environment vars** - Always check `.env.local` first

## 🚀 Next Steps

1. ✅ Install dependencies
2. ✅ Set up `.env.local` with Gemini API key
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:5173
5. ✅ Start customizing!

## 🤝 Need Help?

- Check the README.md for full documentation
- Review component code for examples
- Consult SvelteKit docs for advanced features

Happy coding! 🎉
