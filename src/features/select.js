import {createSlice} from "@reduxjs/toolkit"

const selectSlice = createSlice({
    name: "select",
    initialState: {
        value: {
            original_title: "",
            release_date: "",
            vote_average: "",
            overview: "",
            poster_path: "",
            backdrop_path: "",
            genre_ids: [],
            id: "",
            runtime: "",
        },
    },
    reducers:{
        selectMovie: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {selectMovie} = selectSlice.actions

export default selectSlice.reducer