import Persona from "./Persona"

const Filter = ({ persons, newFilter }) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).
            map((person, index) => (
                <Persona key={index} persons={person}></Persona>
            ))
    )

}

export default Filter;