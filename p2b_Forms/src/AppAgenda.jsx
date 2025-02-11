import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = (props) => {

    const initialState = { name: '', number: '' }
    const [persons, setPersons] = useState(props.Personas)
    const [newPerson, setNewPerson] = useState(initialState)
    const [newFilter, setNewFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault();
        if (persons.find(person => person.name === newPerson.name)) {
            console.log(newPerson.name + ' already exists');
            alert(newPerson.name + ' already exists');
        } else {
            console.log("Estamos OK");
            const personObject = {
                name: newPerson.name,
                number: newPerson.number
            };
            setPersons(persons.concat(personObject));
            setNewPerson({ name: '', number: '' });
        }
    };

    ///control de eventos
    const handlePersonChange = (event) => {
        console.log("entre a handlePersonChange");
        const { name, value } = event.target;
        console.log("name: ", name);
        console.log("value: ", value);
        setNewPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFilterChange = (event) => {
        console.log("entre a handleFilterChange");
        const { value } = event.target;
        console.log("value: ", value);
        setNewFilter(value);
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <p>filter shown with <input type="text" name='filter' onChange={handleFilterChange} /></p>
            <h2>Add new Persons</h2>
            <PersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} />
            <h2>Numbers</h2>
            <Filter persons={persons} newFilter={newFilter} />
        </div>
    );
};

export default App;