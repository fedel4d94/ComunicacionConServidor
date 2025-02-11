import { useState } from 'react'
import Nota from './components/Nota'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes) // notes es un array de objetos de notas
  const [newNote, setNewNote] = useState('a new note...') // hook para nuevas notas
  const [showAll, setShowAll] = useState(true) // hook para filtrar y mostrar todas las notas


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    console.log('button clicked', event.target)
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  /**
   * Para habilitar la edición del input, tenemos que registrar un controlador de eventos que sincronice
   *  los cambios realizados en la entrada con el estado del componente:
   */
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
        <p>showAll: {showAll.toString()}</p>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Nota key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 