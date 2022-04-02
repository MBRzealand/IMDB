import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const confirmSlice = createSlice({
    name: "confirm",
    initialState: {
        value: {
            selected: "",
            apiResponse: [],
            genres:[]
        }
    },
    reducers: {
        setSelected: (state, action) => {
            state.value = action.payload
        },
        fetchMovie: (state, action) =>{
            state.value.apiResponse = action.payload.map(movie => {return movie})
        },
        fetchGenres: (state, action) =>{
            state.value.genres = action.payload
        }
    },
})

export const {setSelected, fetchMovie, fetchGenres} = confirmSlice.actions

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

export const getGenresThunk = () => async (dispatch) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            console.log('success')
            console.log(response.data)
            dispatch(fetchGenres(response.data))

        } catch (err) {
            console.log(err)
        }
}

export default confirmSlice.reducer