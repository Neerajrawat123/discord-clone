import {configureStore} from '@reduxjs/toolkit'
import appReducer from '../features/appslice'
import userReducer from '../features/userSlice'


const store=  configureStore({
    reducer:{
        app: appReducer,
        user: userReducer

    }
})

export default store