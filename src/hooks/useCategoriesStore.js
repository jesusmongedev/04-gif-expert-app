import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCategoriesStore = create(
  persist(
    (set) => ({
      categories: [],
      setCategories: (categories) => set({ categories })
    }),
    {
      name: 'categories-storage'
    }
  )
)
