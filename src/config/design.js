// Design System Configuration
export const typography = {
  fonts: {
    primary: 'Amiri, serif',
    secondary: 'Montserrat, sans-serif',
    body: 'Poppins, sans-serif'
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};

export const colors = {
  primary: {
    green: '#1B4332',
    darkGreen: '#2D6A4F',
    lightGreen: '#40916C',
    accent: '#95D5B2'
  },
  background: {
    light: '#F8FAF9',
    white: '#FFFFFF'
  },
  text: {
    primary: '#1F2937',
    secondary: '#4B5563',
    light: '#6B7280'
  }
};

// Placeholder icons - to be replaced with designer's assets
export const icons = {
  prayer: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/></svg>',
  quran: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>',
  conference: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>',
  youth: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M13 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V9H9a1 1 0 110-2h3V6a1 1 0 011-1z"/></svg>'
};

// Text styles configuration
export const textStyles = {
  h1: {
    fontSize: 'text-4xl md:text-5xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-amiri'
  },
  h2: {
    fontSize: 'text-3xl md:text-4xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-amiri'
  },
  h3: {
    fontSize: 'text-2xl md:text-3xl',
    fontWeight: 'font-semibold',
    fontFamily: 'font-amiri'
  },
  body: {
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fontFamily: 'font-montserrat'
  },
  arabic: {
    fontFamily: 'font-amiri',
    fontSize: 'text-xl',
    fontWeight: 'font-normal'
  }
};