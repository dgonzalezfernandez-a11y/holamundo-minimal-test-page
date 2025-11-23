# Holamundo — Minimal Test Page

[![Deploy to Cloudflare Workers][![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dgonzalezfernandez-a11y/holamundo-minimal-test-page)]

A simple, extremely polished, and visually refined web page that displays exactly the text "holamundo" for testing purposes. Built on the Cloudflare Workers template with shadcn/ui, Tailwind CSS, and React for a production-ready, minimal single-page application (SPA). This project demonstrates rapid development of a stunning frontend foundation with modern UI components and seamless deployment.

## Features

- **Minimalist Design**: Clean, centered hero layout showcasing "holamundo" with subtle gradients, impactful typography, and micro-interactions.
- **Visual Excellence**: Modern UI with responsive design, smooth animations, and theme toggle (light/dark mode).
- **Interactive Elements**: Optional CTA button triggers a toast notification for demo purposes; hover states and focus rings for accessibility.
- **Single-Page Structure**: No complex routing or backend; static SPA served via Cloudflare Workers.
- **Production-Ready**: Error handling, responsive across devices, and optimized for performance.

## Technology Stack

- **Frontend**: React 18, React Router 6, TypeScript
- **UI Library**: shadcn/ui (with Radix UI primitives)
- **Styling**: Tailwind CSS (v3), Tailwind Animate, clsx, tailwind-merge
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: Zustand (for demo interactions)
- **Toasts**: Sonner
- **Build Tool**: Vite
- **Backend/Deployment**: Cloudflare Workers, Hono (for API routes if extended)
- **Utilities**: Zod (validation), Immer, Date-fns, React Hook Form
- **Linting**: ESLint with TypeScript plugins
- **Other**: React Query (for data fetching if extended), Recharts (for charts if needed)

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (v1.0+)
- [Node.js](https://nodejs.org/) (for optional tools)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) for Cloudflare deployment

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd holamundo-test
   ```

2. Install dependencies using Bun:
   ```
   bun install
   ```

3. (Optional) Generate TypeScript types for Cloudflare Workers:
   ```
   bun run cf-typegen
   ```

## Development

1. Start the development server:
   ```
   bun run dev
   ```
   The app will be available at `http://localhost:3000` (or the port specified in your environment).

2. Open `src/pages/HomePage.tsx` to customize the main content. The page features a centered hero with "holamundo", theme toggle, and a demo button that shows a toast notification.

3. For linting:
   ```
   bun run lint
   ```

4. Build for production:
   ```
   bun run build
   ```
   Outputs static assets to `dist/`.

### Usage Example

The homepage (`/`) renders a minimalist interface:
- Displays "holamundo" with a text gradient.
- Includes a theme toggle in the top-right corner.
- Optional button triggers a Sonner toast: "Prueba completada".
- Footer credits Cloudflare.

To extend:
- Add API routes in `worker/userRoutes.ts` (e.g., `app.get('/api/test', ...)`).
- Modify `src/pages/HomePage.tsx` for additional components (import from `@/components/ui/*`).
- Use existing hooks like `useTheme` for dark mode integration.

Ensure all changes adhere to the UI non-negotiables: root wrappers with gutters (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`), shadcn/ui components, and Tailwind v3-safe utilities.

## Deployment

Deploy to Cloudflare Workers for global edge delivery:

1. Install Wrangler if not already:
   ```
   bun add -g wrangler
   wrangler login
   ```

2. Configure your Cloudflare account in `wrangler.jsonc` (name, compatibility date already set).

3. Build and deploy:
   ```
   bun run deploy
   ```
   This builds the frontend and deploys the Worker.

4. Access your deployed app at `<your-worker>.<your-subdomain>.workers.dev`.

For one-click deployment:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dgonzalezfernandez-a11y/holamundo-minimal-test-page)

### Post-Deployment

- Assets are served as a static SPA with API routes handled by the Worker.
- Monitor logs via `wrangler tail`.
- For custom domains, update via the Cloudflare dashboard.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details (if included; otherwise, contact the maintainer).