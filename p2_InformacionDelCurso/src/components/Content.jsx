import Tema from './Tema'

const Content = ({ cursos }) => {
    console.log("CONTENT")
    return (
        cursos.map(temas =>
            < Tema key={temas.id} temas={temas} ></Tema >
        )
    )
}

export default Content