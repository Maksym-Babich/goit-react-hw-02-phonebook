import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/Contact/Contact';

export class Contacts extends Component {
  render() {
    return (
      <ContactsList>
        {this.props.contacts.map((contact) => {
          const { name, number, id } = contact;
          return <Contact key={id} content={` ${name}: ${number}`}></Contact>;
        })}
      </ContactsList>
    );
  }
}
