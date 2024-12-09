import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "ui-sans-serif", "system-ui"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      container: {
        center: true, // Center the container
        padding: {
          DEFAULT: "1rem", // 16px for all screen sizes
          sm: "1rem", // 16px for small screens (mobile)
          md: "1.5rem", // 24px for medium screens (tablet)
          lg: "2rem", // 32px for large screens (desktop)
          xl: "3rem", // 48px for extra-large screens (wider desktop)
          "2xl": "4rem", // 64px for 2xl screens (ultra-wide displays)
        },
      },
      screens: {
        sm: "640px", // Add custom width for small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1200px", // Extra-large screens
        "2xl": "1320px", // Custom
      },
    },
  },
  plugins: [],
} satisfies Config;
