import React from 'react'
<<<<<<< HEAD
import Body from './components/Body'
const App = () => {
  return (
    <div>
     
     <Body/>
=======
import {Provider} from "react-redux";
import Body from './components/Body'
import appStore from './utils/appStore';

const App = () => {
  return (
    <div>
     <Provider store={appStore}>
     <Body/>
     </Provider>
>>>>>>> 5781ccb (validation && redux && auth)

    </div>
  )
}

export default App
