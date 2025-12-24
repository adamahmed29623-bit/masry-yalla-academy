import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  // تعديل المسارات لتشمل المجلد الرئيسي ومجلد المكونات لضمان عمل الألوان في كل مكان
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // الحفاظ على الخطوط الملكية التي تعبر عن هوية الأكاديمية
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        messiri: ['var(--font-el-messiri)', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // إضافة الألوان الملكية الخاصة بـ Yalla Masry ليتعرف عليها Tailwind
        nile: {
          blue: '#0b4e8d',
          dark: '#0d284e',
        },
        gold: {
          royal: '#FFD700',
          accent: '#ffdf33',
        },
        granite: '#2a2a2a',
        
        // الحفاظ على نظام Shadcn UI الذي يستخدمه مشروعك
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: '#0b4e8d', // جعل الأزرق النيلي هو اللون الأساسي للنظام
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#FFD700', // جعل الذهبي هو اللون الثانوي للنظام
          foreground: '#2a2a2a',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
