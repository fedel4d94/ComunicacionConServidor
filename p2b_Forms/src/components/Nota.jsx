const Nota = ({ note }) => <li key={note.id}>{note.content}</li>

/**
 * El punto - . - al principio se refiere al directorio actual, 
 * por lo que la ubicación del módulo es un archivo llamado Note.jsx en el subdirectorio 
 * components del directorio actual. La extensión del nombre de archivo .jsx se puede omitir.
 */
export default Nota