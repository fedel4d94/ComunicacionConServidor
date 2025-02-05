import Content from "./Content"

//Esta seria la forma larga. pero vamos a intentar separarla en componentes
/*const Content = ({ cursos }) => {
    return (
        cursos.map(temas =>
            <div key={temas.id}>
                <h1>{temas.name}</h1>
                {temas.parts.map(partes =>
                    <div key={partes.id}>
                        <p>{partes.name} {partes.exercises}</p>
                    </div>
                )}
                <CalcularTotal parts={temas.parts}></CalcularTotal>
            </div>
        )
    )
}*/


const Curso = ({ curso }) => {
    return (
        <div>
            <Content cursos={curso}></Content>
        </div>
    )
}

export default Curso