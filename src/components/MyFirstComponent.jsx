
import people from "../data/people"

function MyFirstComponent({nombre, apellido, people}) {
  return (
    <>
    <h1>
        El Nombre es {nombre} {apellido} {people}
    </h1>
    </>
  )
}

export default MyFirstComponent
