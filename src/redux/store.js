import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import loginReducer from '../features/loginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer
  },
})