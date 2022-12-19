import PropTypes from 'prop-types';
import { Label, LabelName, Input } from './Filter.styled';
import { GoSearch } from 'react-icons/go';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <LabelName>
        <GoSearch style={{ verticalAlign: 'middle', marginRight: '5px' }} />
        Find contacts by name
      </LabelName>
      <Input
        type="text"
        name="name"
        value={value}
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      ></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
