import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/Contact/Contact.styled';

export class Contact extends Component {
  render() {
    return <ContactItem>{this.props.content}</ContactItem>;
  }
}
