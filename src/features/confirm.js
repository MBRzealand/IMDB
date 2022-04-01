import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const confirmSlice = createSlice({
    name: "confirm",
    initialState: {
        value: {
            selected: "",
            apiResponse: []
        }
    },
    reducers: {
        setSelected: (state, action) => {
            state.value = action.payload
        },
        fetchMovie: (state, action) =>{
            state.value.apiResponse = action.payload.map(movie => {return movie})
        },
    },
})

export const {setSelected, fetchMovie} = confirmSlice.actions

export const getMovieThunk = (selected) => async (dispatch) => {
    if(selected !== "") {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=true&query=${selected}`)
            console.log('success')
            console.log(response.data.results)
            dispatch(fetchMovie(response.data.results))

        } catch (err) {
            console.log(err)
        }
    }
}

export default confirmSlice.reducer