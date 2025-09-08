'use client'

 import { configureStore } from "@reduxjs/toolkit"
import refReducer from './Refs/refSlice'

export const store = configureStore({
    reducer: {
        ref: refReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
