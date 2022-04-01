import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: {
            searchInput: "",
        }
    },
    reducers: {
        searchMovie: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {searchMovie} = searchSlice.actions

export default searchSlice.reducer