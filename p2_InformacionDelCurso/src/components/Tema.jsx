import Parte from './Parte'

//Una ventaja de las funciones es q las podes usar  antes de declararlas
/*
function sumArray(array) {
  return array.reduce((sum, { exercises }) => sum + exercises, 0);
}
*/
///Son EQUIVALENTES
const Total = (parts) => parts.reduce((sum, part) => sum + part.exercises, 0);

const Tema = ({ temas }) => {

    const total = Total(temas.parts);
    return (
        <div>
            <h1>{temas.name}</h1>
            {temas.parts.map(partes =>
                <Parte key={partes.id} modulos={partes}></Parte>
            )}
            <strong>Total exercises: {total}</strong>

        </div>
    )
}

export default Tema