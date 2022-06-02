import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginSlice'
import errorReducer from './features/errorSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    error: errorReducer
  },
})