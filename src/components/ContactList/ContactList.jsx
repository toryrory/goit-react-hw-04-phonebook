import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onChangedList }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClickDelete={onChangedList}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onChangedList: PropTypes.func.isRequired,
};