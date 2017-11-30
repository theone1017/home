import React from 'react'
import Header from './component/Header.js'
import Main from './component/Main.js'

class App extends React.Component{
    render(){
      return <div className = 'wrap'>
        <Header />
        <Main />
      </div>
    }
}

export default App
