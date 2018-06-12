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
import CMS from '../../assets/cms/home.json'
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

  getComponent = type => {
    switch (type) {
      case 'IMAGE':
        return Hero.Image
      case 'DEFAULT':
      default:
        return Hero
    }
  }

  renderSection = (section, index) => {
    const bulma = section.bulma.reduce(
      (obj, tag) => ({ ...obj, [tag]: true }),
      {},
    )
    let cover = null
    if (section.type === 'IMAGE') {
      const parts = section.image.split('/')
      bulma.image = require(`../../assets/images/${parts[parts.length - 1]}`)
      cover = <Hero.Cover />
    }
    const Comp = this.getComponent(section.type)
    return (
      <Comp key={index} {...bulma}>
        {cover}
        <Hero.Body>
          <Hero.Title>{section.title}</Hero.Title>
          <Hero.Subtitle>{section.subtitle}</Hero.Subtitle>
          <Hero.CallToAction isRounded onClick={this.openModal}>
            {section.cta}
          </Hero.CallToAction>
        </Hero.Body>
      </Comp>
    )
  }

  render() {
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
          {CMS.sections.map(this.renderSection)}
          {whoWeWorkedForSection}
          {contactModal}
          {this.state.notificationMessage ? notificationPopup : false}
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
