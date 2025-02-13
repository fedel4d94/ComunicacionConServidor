const Nota = ({ content, important, toggleImportance }) => {

    const label = important
        ? 'make not important' : 'make important'
    return (
        <li>
            <h4>{content}</h4>
            <p>{important ? "true" : "false"}</p>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}
/**
 * El punto - . - al principio se refiere al directorio actual, 
 * por lo que la ubicación del módulo es un archivo llamado Note.jsx en el subdirectorio 
 * components del directorio actual. La extensión del nombre de archivo .jsx se puede omitir.
 */
export default Nota