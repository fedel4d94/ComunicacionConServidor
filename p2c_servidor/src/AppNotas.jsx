import { useEffect, useState } from 'react'
import Nota from './components/Nota'
import noteService from './services/note'


const AppNotas
  = () => {
    const [notes, setNotes] = useState([]) // notes es un array de objetos de notas
    const [newNote, setNewNote] = useState('a new note...') // hook para nuevas notas

    const toggleImportanceOf = id => {

      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }

      noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
    }

    //"Cuando pase algo en mi componente, quiero hacer algo extra."
    /**
     * Explicación:
        Primer argumento (callback): Es una función que ejecutará el código que necesitas.
        Segundo argumento (array de dependencias):
        Si está vacío [], el código del useEffect solo se ejecutará una vez, cuando el componente se monta.
        Si incluyes variables en el array [algo], el código se ejecutará cada vez que esas variables cambien.
        Si omites el array, el useEffect se ejecutará en cada renderizado (generalmente no recomendado).
     */

    //puedes usar fetch o axios para hacer peticiones a un servidor
    /*useEffect(() => {
      console.log('useEffect');
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          console.log('json', json)
        })
    }, [])*/
    useEffect(() => {
      console.log('useEffect');
      noteService.getAll()
        .then(initialNotes => { setNotes(initialNotes) })
    }, [])

    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5
      }

      noteService
        .create(noteObject)
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
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
          {notes.map(note =>
            <Nota key={note.id} {...note}
              toggleImportance={() => toggleImportanceOf(note.id)} />
          )}
        </ol>

        <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }

export default AppNotas
