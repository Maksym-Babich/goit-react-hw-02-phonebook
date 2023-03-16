import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { SectionMain } from 'components/SectionMain/SectionMain';
import { Contacts } from 'components/Contacts/Contacts';
import { Search } from 'components/Search/Search';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (event) => {
    event.preventDefault();
    const contact = {
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
      id: nanoid(),
    };
    this.setState((state) => {
      return {
        ...state,
        contacts: [contact, ...state.contacts],
      };
    });
    event.currentTarget.reset();
  };

  onFielterChange = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <SectionMain title="Phonebook">
          <Form onAddContact={this.addContact} />
          <Section title="Contacts">
            <Search search={this.state.filter} onSearchInput={this.onFielterChange} />
            <Contacts contacts={this.state.contacts}></Contacts>
          </Section>
        </SectionMain>
      </>
    );
  }
}
