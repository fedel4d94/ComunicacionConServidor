import { useEffect, useState } from 'react'
import Persona from './components/Persona'
import axios from 'axios'


const App = () => {
  const [persons, setPersona] = useState([]) // notes es un array de objetos de notas
  const [newNote, setNewNote] = useState('a new note...') // hook para nuevas notas

  useEffect(() => {
    console.log('effect')
    axios
      .get("http://localhost:3002/persons")
      .then(response => {
        console.log('promise fulfilled')
        setPersona(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const addPersons = (event) => {
    event.preventDefault()
    const noteObject = {
      number: newNote,
      name: newNote,
    }
    axios
      .post("http://localhost:3002/persons", noteObject)
      .then(response => {
        console.log('promise fulfilled')
        setPersona(persons.concat(response.data))
        setNewNote('')
      })
  }
  /**
   * Para habilitar la edición del input, tenemos que registrar un controlador de eventos que sincronice
   *  los cambios realizados en la entrada con el estado del componente:
   */
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }



  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {persons.map(persona =>
          <Persona key={persona.id} {...persona} />
        )}
      </ol>

      <form onSubmit={addPersons}>
        <input
          value={newNote}
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 