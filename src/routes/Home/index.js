import AppWireframe from '../../assets/images/appwireframe.jpg'
import CodeHero from '../../assets/images/code-hero.png'
import ContactForm from './components/contactForm'
import LogoGallery from '../../assets/images/logos.png'
import React from 'react'
import { Button } from 'bloomer/lib/elements/Button'
import { DefaultLayout } from '../../layouts'
import { Delete } from 'bloomer/lib/elements/Delete'
import { Hero, Section } from 'prometheusui'
import { Modal } from 'bloomer'
import { ModalBackground } from 'bloomer/lib/components/Modal/ModalBackground'
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard'
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody'
import { ModalCardFooter } from 'bloomer/lib/components/Modal/Card/ModalCardFooter'
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader'
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle'
import { Notification } from 'bloomer/lib/elements/Notification'
import './Home.css'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactComments: '',
      contactEmail: '',
      contactName: '',
      contactNumber: '',
      isModalOpen: false,
      notificationMessage: '',
    }
    this.notificationTimeout = null
  }
  openModal = () => {
    this.setState({ isModalOpen: true })
  }
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }
  setNotification = message => {
    this.setState({ notificationMessage: message }, () => {
      clearTimeout(this.notificationTimeout)
      this.notificationTimeout = setTimeout(() => {
        this.setState({
          notificationMessage: null,
        })
      }, 3000)
    })
  }
  handleModalSubmit = () => {
    fetch('https://prometheus-software-backend.herokuapp.com/leadtracker', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.contactEmail,
        phone: this.state.contactNumber,
        subject: this.state.contactName,
        text: this.state.contactNumber,
      }),
    })
    this.closeModal()
    this.setNotification(
      'Thank you for reaching out! We will get in touch with you shortly.',
    )
  }
  handleInput = ({ name, value }) => {
    this.setState({ [name]: value })
  }
  render() {
    const qualityCodeHero = (
      <Hero.Image image={CodeHero} isSuccess isBold isLarge isFullheight>
        <Hero.Cover />
        <Hero.Body>
          <Hero.Title>Quality Code. On Time, Every Time.</Hero.Title>
          <Hero.Subtitle>
            <p>
              Prometheus Software Consulting can take care the hassle out of
              large tech projects,<br />so your business can get back to doing
              what it does best.
            </p>
          </Hero.Subtitle>
          <Hero.CallToAction isRounded onClick={this.openModal}>
            Ask us how
          </Hero.CallToAction>
        </Hero.Body>
      </Hero.Image>
    )
    const callToActionHero = (
      <Hero.Image image={AppWireframe} isBold isDark isFullheight>
        <Hero.Cover />
        <Hero.Body>
          <Hero.Title>We can make your idea come to life.</Hero.Title>
          <Hero.Subtitle>Let's talk about your project</Hero.Subtitle>
          <Hero.CallToAction isRounded onClick={this.openModal}>
            Contact Us
          </Hero.CallToAction>
        </Hero.Body>
      </Hero.Image>
    )
    const whoWeWorkedForSection = (
      <Section isLarge>
        <Section.Title>Where our partners have worked</Section.Title>
        <img src={LogoGallery} alt="logo-banner" />
      </Section>
    )
    const contactModal = (
      <Modal onClose={this.closeModal} isActive={this.state.isModalOpen}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Contact Us</ModalCardTitle>
            <Delete onClick={this.closeModal} />
          </ModalCardHeader>
          <ModalCardBody>
            <ContactForm onInputChange={this.handleInput} />
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="primary" onClick={this.handleModalSubmit}>
              Send
            </Button>
            <Button isColor="outline" onClick={this.closeModal}>
              Cancel
            </Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    )
    const notificationPopup = (
      <div className="notification-popup">
        <Notification isColor="primary">
          <Delete />
          {this.state.notificationMessage}
        </Notification>
      </div>
    )
    return (
      <DefaultLayout location={this.props.location}>
        <div className="Home">
          {callToActionHero}
          {qualityCodeHero}
          {whoWeWorkedForSection}
          {contactModal}
          {this.state.notificationMessage ? notificationPopup : false}
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
