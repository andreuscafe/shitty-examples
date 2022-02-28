import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      colorPreference: 'light',

      toggleColorPreference: () =>
        set((state) => {
          const newColor = state.colorPreference == 'light' ? 'dark' : 'light'

          return { colorPreference: newColor }
        }),
    }),
    {
      name: 'state-storage', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
