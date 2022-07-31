import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      colorPreference: 'dark',
      sound: true,

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

      toggleSound: () =>
        set((state) => {
          return { sound: !state.sound }
        }),
    }),
    {
      name: 'state-storage', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
