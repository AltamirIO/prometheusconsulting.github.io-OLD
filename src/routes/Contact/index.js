import React from 'react'
import { DefaultLayout } from '../../layouts'
import Phonebooth from '../../assets/images/phonebooth.jpg'
import { Hero } from 'prometheusui';

export default class Contact extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Hero.Image
          image={Phonebooth}
          isLarge
          isDark
        >
          <Hero.Cover />
          <Hero.Body>
            <Hero.Title>Let's Talk</Hero.Title>
          </Hero.Body>
        </Hero.Image>
      </DefaultLayout>
    )
  }
}