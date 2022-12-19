import { ContactItem, Name, Btn } from './Contact.styled';
import PropTypes from 'prop-types';
import { RiDeleteBin6Fill } from 'react-icons/ri';

export const Contact = ({ name, phone, id, onDelete }) => {
  return (
    <ContactItem>
      <Name>
        {name}: {phone}
      </Name>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
        <RiDeleteBin6Fill style={{ marginLeft: '5px' }} />
      </Btn>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
