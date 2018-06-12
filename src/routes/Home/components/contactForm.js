import React from 'react'
import { Field, Label, Control, Input } from 'bloomer'
import { TextArea } from 'bloomer/lib/elements/Form/TextArea'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactName: '',
      contactEmail: '',
      contactNumber: '',
      contactComments: '',
    }
  }
  handleInputChange = ({target}) => {
    this.props.onInputChange(target)
  }
  handleSubmit = () => {
    this.props.onSubmit({

    })
  }
  render() {
    return (
      <React.Fragment>
        <Field>
          <Label>Your Name</Label>
          <Control>
            <Input
              name="contactName"
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input
              name="contactEmail"
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Phone Number</Label>
          <Control>
            <Input
              name="contactNumber"
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Comments</Label>
          <Control>
            <TextArea
              name="contactComments"
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>
      </React.Fragment>
    )
  }
}

export default ContactForm
