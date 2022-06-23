import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      colorPreference: 'light',

      toggleColorPreference: () =>
        set((state) => {
          return {
            colorPreference:
              state.colorPreference == 'light' ? 'dark' : 'light',
          }
        }),

      setColorPreference: (colorPreference) =>
        set((state) => {
          return { colorPreference }
        }),
    }),
    {
      name: 'state-storage', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
