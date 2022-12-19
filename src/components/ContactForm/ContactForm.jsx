import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Btn } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  phone: '',
};
export class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onCheckContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const { onCheckContact } = this.props;
    if (onCheckContact(name)) return;
    onAdd({ id: nanoid(), name, phone });

    this.resetForm();
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render = () => {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChangeForm}
        ></Input>
        <Input
          type="text"
          name="phone"
          value={phone}
          placeholder="Enter Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChangeForm}
        ></Input>
        <Btn type="submit">Add Contact</Btn>
      </form>
    );
  };
}
