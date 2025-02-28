import { create } from 'zustand'
import { useEffect } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

// Define the Zustand store
type ThemeStore = {
  theme: Theme
  setTheme: (theme: Theme) => void
  storageKey: string
  defaultTheme: Theme
  initialized: boolean
}

// Create the store with initial values
export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "system",
  setTheme: (theme: Theme) => {
    localStorage.setItem(get().storageKey, theme)
    set({ theme })
  },
  storageKey: "vite-ui-theme",
  defaultTheme: "system",
  initialized: false,
}))

// ThemeProvider component
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  // Update store with provided props
  useEffect(() => {
    useThemeStore.setState({ 
      defaultTheme, 
      storageKey,
    })
  }, [defaultTheme, storageKey])

  // Initialize theme from localStorage or default (only once)
  useEffect(() => {
    const state = useThemeStore.getState()
    
    if (!state.initialized) {
      const savedTheme = localStorage.getItem(storageKey) as Theme | null
      useThemeStore.setState({ 
        theme: savedTheme || defaultTheme,
        initialized: true,
      })
    }
  }, [defaultTheme, storageKey])

  // Get theme from store for DOM updates
  const theme = useThemeStore(state => state.theme)

  // Update root class based on theme
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return <>{children}</>
}

// Hook for components to access theme
export const useTheme = () => {
  const theme = useThemeStore(state => state.theme)
  const setTheme = useThemeStore(state => state.setTheme)

  return { theme, setTheme }
}