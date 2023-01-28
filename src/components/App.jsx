import { useState, useEffect } from 'react';
import nextId from 'react-id-generator';
import { Container, Section1, Section2 } from './App.styled';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const getFormSubmitData = (newName, number) => {
    const searchedName = contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
    if (searchedName) {
      alert(`${newName} is already in contact`);
    } else {
      setContacts(prevState => [
        ...prevState,
        { id: nextId(), name: newName, number: number },
      ]);
    }
  };

  const deleteContactItem = itemId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== itemId));
  };

  const handleFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };
   const getFilteredContact = () => {
      return contacts.filter(({name}) => (name.toLowerCase().includes(filter.toLowerCase())))
    }

  return (
    <Container>
      <Section1>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={getFormSubmitData} />
      </Section1>
      <Section2>
        <h2>Contacts</h2>
        <ContactFilter value={filter} onFilterChange={handleFilter} />
        <ContactList
          contacts={getFilteredContact()}
          onChangedList={deleteContactItem}
        />
      </Section2>
    </Container>
  );
}

//   class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const localStorageData = JSON.parse(localStorage.getItem('contacts'));
//     if (localStorageData) {
//       this.setState({ contacts: localStorageData });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   getFormSubmitData = userData => {
//     console.log(userData)
//     const searchedName = this.state.contacts.find(({ name }) => name.toLowerCase() === userData.name.toLowerCase())
//     if (searchedName) {
//       alert(`${userData.name} is already in contact`)
//     } else{
//       const userDataWithId = {
//       id: nextId(),
//       ...userData,
//     };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, userDataWithId],
//     }));
//     }
//   };

//   handleFilter = e => {
//     this.setState({ filter: e.currentTarget.value})
//   }
//   getFilteredContact = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(({name}) => (name.toLowerCase().includes(filter.toLowerCase())))
//   }

//   deleteContactItem = (itemId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== itemId)
//     }))
//   }

//   render() {
//     return (
//       <Container>
//         <Section1>
//           <h1>Phonebook</h1>
//           <ContactForm onFormSubmit={this.getFormSubmitData} />
//         </Section1>
//         <Section2>
//           <h2>Contacts</h2>
//           <ContactFilter value={this.state.filter} onFilterChange={this.handleFilter} />
//           <ContactList contacts={this.getFilteredContact()} onChangedList={this.deleteContactItem} />
//         </Section2>
//       </Container>
//     );
//   }
// }
