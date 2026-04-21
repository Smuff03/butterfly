/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These are the "brand" colors used in your JSX files
        brand: {
          primary: "#2e7d32",      // Green
          primaryDark: "#1b5e20",  // Darker Green
          secondary: "#81c784",    // Light Green
          ink: "#1a1a1a",         // Dark Text/Background
          ink2: "#4a4a4a",        // Lighter Text
          whatsapp: "#25D366",  // WhatsApp Green
          surface: "#F9F8F6",    // Section Background
          surfaceAlt: "#EFEDE7", // Card Background   
        },
        // Mapping the shadcn/emergent variables
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}