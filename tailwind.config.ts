import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Retro Gaming Colors
				'neon-green': 'hsl(var(--neon-green))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'retro-orange': 'hsl(var(--retro-orange))',
				'retro-purple': 'hsl(var(--retro-purple))',
				'scan-line': 'hsl(var(--scan-line))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'retro': ['Orbitron', 'monospace'],
				'mono': ['Share Tech Mono', 'monospace']
			},
			boxShadow: {
				'glow-sm': 'var(--glow-sm)',
				'glow-md': 'var(--glow-md)',
				'glow-lg': 'var(--glow-lg)',
				'glow-xl': 'var(--glow-xl)',
				'neon': '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 40px hsl(var(--neon-green))',
				'neon-strong': '0 0 15px hsl(var(--neon-green)), 0 0 30px hsl(var(--neon-green)), 0 0 60px hsl(var(--neon-green))'
			},
			textShadow: {
				'neon': '0 0 5px hsl(var(--neon-green))',
				'neon-md': '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green))',
				'neon-lg': '0 0 15px hsl(var(--neon-green)), 0 0 30px hsl(var(--neon-green)), 0 0 45px hsl(var(--neon-green))'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.94' }
				},
				'flicker-slow': {
					'0%, 100%': { opacity: '1' },
					'25%': { opacity: '0.97' },
					'50%': { opacity: '0.985' },
					'75%': { opacity: '0.955' }
				},
				'neon-pulse': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.02)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--neon-green)), 0 0 10px hsl(var(--neon-green)), 0 0 15px hsl(var(--neon-green))'
					},
					'50%': { 
						boxShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 30px hsl(var(--neon-green))'
					}
				},
				'border-scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'scan-move': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flicker': 'flicker 6s infinite alternate',
				'flicker-slow': 'flicker-slow 9s infinite alternate',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'border-scan': 'border-scan 3s linear infinite',
				'scan-move': 'scan-move 0.1s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
