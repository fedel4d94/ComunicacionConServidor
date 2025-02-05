import Nota from './components/Nota'

const App = ({ notes }) => {
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Nota key={note.id} note={note} />
                )}
            </ul>
        </div>
    )
}

export default App