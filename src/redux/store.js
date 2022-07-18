import { configureStore } from '@reduxjs/toolkit'

//reducers
import loginReducer from './features/loginSlice'
import errorReducer from './features/errorSlice'
import storyReducer from './features/storySlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    error: errorReducer,
    story: storyReducer
  },
})