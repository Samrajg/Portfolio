# Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- ⚡ Fast and optimized performance
- 📱 Mobile-friendly
- 🎯 SEO optimized
- 🚀 Built with Next.js 14

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── about/          # About page
├── achievements/   # Achievements page
├── components/     # Reusable components
├── contact/        # Contact page
├── hobbies/        # Hobbies page
├── projects/       # Projects page
├── globals.css     # Global styles
├── layout.tsx      # Root layout
└── page.tsx        # Home page
```

## Customization

1. Update your personal information in the respective page files
2. Add your projects in `app/projects/page.tsx`
3. Update social media links in `app/components/Footer.tsx` and `app/contact/page.tsx`
4. Customize colors and styles in `tailwind.config.ts` and `app/globals.css`
5. Replace the favicon in the `app` directory

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## License

MIT
