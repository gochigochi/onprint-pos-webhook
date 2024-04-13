import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const statusSlice = createSlice({
    name: "status",
    initialState: { status: false },
    reducers: {
        setStatus: (state, action: PayloadAction<{ status: boolean }>) => {
            state.status = action.payload.status
        }
    }
})

export const { setStatus } = statusSlice.actions