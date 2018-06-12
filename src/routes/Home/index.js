import React from 'react'
import { DefaultLayout } from '../../layouts'
import { Hero, Section } from 'prometheusui'
import { Modal } from 'bloomer'
import CodeHero from '../../assets/images/code-hero.png'
import LogoGallery from '../../assets/images/logos.png'
import AppWireframe from '../../assets/images/appwireframe.jpg'
import ContactForm from './components/contactForm'
import './Home.css'
import { ModalBackground } from 'bloomer/lib/components/Modal/ModalBackground'
import { ModalContent } from 'bloomer/lib/components/Modal/ModalContent'
import { ModalClose } from 'bloomer/lib/components/Modal/ModalClose'
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard';
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader';
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle';
import { Delete } from 'bloomer/lib/elements/Delete';
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody';
import { ModalCardFooter } from 'bloomer/lib/components/Modal/Card/ModalCardFooter';
import { Button } from 'bloomer/lib/elements/Button';
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Label } from 'bloomer/lib/elements/Form/Label';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  openModal = () => {
    this.setState({ isModalOpen: true })
  }
  closeModal = () => {
    this.setState({ isModalOpen: false })
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
            <ContactForm />
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="primary">Send</Button>
            <Button isColor="outline">Cancel</Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    )
    return (
      <DefaultLayout location={this.props.location}>
        <div className="Home">
          {callToActionHero}
          {qualityCodeHero}
          {whoWeWorkedForSection}
          {contactModal}
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
