import PropTypes from 'prop-types';
import { Button } from 'components/Form/ContactForm.styled';
import { Contact } from './ContactItem.styled';

export const ContactItem = ({ name, id, number, onClickDelete }) => {
  return (
    <Contact key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};