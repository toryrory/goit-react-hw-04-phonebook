import {useState} from "react";
import { Label, Input, Button, Form } from './ContactForm.styled';

export function ContactForm({onFormSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
    
      default:
        break;
    }
  };
  const handleSubmit = e => {
  
    e.preventDefault();
    onFormSubmit(name, number);
    reset();
  };
    const reset = () => {
      setName('');
      setNumber('');
  }
  return (
    <>
      <Form onSubmit={handleSubmit}> 
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </>
  );
}
  
  
  
  
//   class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
      
//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state);
//         this.reset();
//   }
//     reset = () => {
//     this.setState({name: '', number: ''})
// }
//   render() {
//       const { name, number } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleInputChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             Phone number
//             <Input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.handleInputChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit" disabled={!name || !number}>Add contact</Button>
//         </Form>
//       </>
//     );
//   }
// }
