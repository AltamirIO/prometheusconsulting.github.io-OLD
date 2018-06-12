import React from 'react'
import { Field, Label, Control, Input } from 'bloomer'
import { TextArea } from 'bloomer/lib/elements/Form/TextArea';

class ContactForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Field>
          <Label>Your Name</Label>
          <Control>
            <Input />
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input />
          </Control>
        </Field>
        <Field>
          <Label>Phone Number</Label>
          <Control>
            <Input />
          </Control>
        </Field>
        <Field>
          <Label>Comments</Label>
          <Control>
            <TextArea />
          </Control>
        </Field>
      </React.Fragment>
    )
  }
}

export default ContactForm
