import './App.css'
import { useState } from 'react'

const App = () => {
  
  const [mode, setMode] = useState('light')

  const [cats, setCats] = useState([
    {name: 'Myshka'},
    {name: 'Malta'}
  ])

  const handleMode = (modeValue) => {
    setMode(modeValue)
  }

  const handleAddCat = (newCat) => {
    setCats([...cats, newCat])
  }

  const handleRemoveCat = (deletedCat) => {
    console.log('deletedCat: ', deletedCat)
    const filteredCatsArr = cats.filter((cat) => {
      return cat.name !== deletedCat
    })
    setCats(filteredCatsArr)
  }

  return (
    <div className={mode}>
      <h1>Hello World!</h1>
      <button onClick={() => handleMode('dark')}>Dark Mode</button>
      <button onClick={() => handleMode('light')}>Light Mode</button>
      <button onClick={() => handleMode('neon')}>Neon Mode</button>
      <button onClick={() => handleMode('night')}>Night Mode</button>
      <hr />
      <button onClick={() => handleAddCat({name: 'Kira'})}>Add Kira</button>
      <button onClick={() => handleAddCat({name: 'Lion'})}>Add Lion</button>
      <hr />
      <button onClick={() => handleRemoveCat('Kira')}>Delete Kira</button>
    </div>
  )
}

export default App


  // const [isDarkMode, setIsDarkMode] = useState(false)

  // const handleDarkMode = () => {
  //   setIsDarkMode(true)
  // }

  // const handleLightMode = () => {
  //   setIsDarkMode(false)
  // }