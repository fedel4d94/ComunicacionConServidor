import Persona from "./Persona"

const Filter = ({ persons, newFilter, buttonDelete }) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).
            map((person, index) => (
                <Persona key={index} {...person} buttonDelete={() => buttonDelete(person.id)}></Persona>
            ))
    )

}

export default Filter;