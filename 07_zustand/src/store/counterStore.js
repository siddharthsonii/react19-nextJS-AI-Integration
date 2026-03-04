import {create} from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
    reset: () => set({ count: 0}),
}));

// Zustand mai bas 2 chezein hai. Create Store and Use Store
// Yeh jaise count define kiya hai isko ham agle variable mai use kar paa rhe hai. Aise hi ham increase ya decrease ko bhi next variable ke andar use kar sakte hai.

// Simply create kiya hai and components mai use kar liya hai