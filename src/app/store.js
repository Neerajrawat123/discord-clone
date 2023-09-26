import {configureStore} from '@reduxjs/toolkit'
import appReducer from '../features/appslice'
import userReducer from '../features/userSlice'


const store=  configureStore({
    reducer:{
        app: appReducer,
        user: userReducer

    }
})
console.log(store)

export default store