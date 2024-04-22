
import './App.css'
import MyFirstComponent from './components/MyFirstComponent'
import people from './data/people'

function App() {
  const peopleList = people.map(person =>{
  return <MyFirstComponent nombre={person.nombre} apellido={person.apellido} />
  })
  
  return (
    <>
     <h1> Hello World React </h1>
    {peopleList}
    </>
  )
}

export default App
