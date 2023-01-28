import PropTypes from 'prop-types';
import { Label } from './ContactFilter.styled';
import { Input } from 'components/Form/ContactForm.styled';

export const ContactFilter = ({ value, onFilterChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </Label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};