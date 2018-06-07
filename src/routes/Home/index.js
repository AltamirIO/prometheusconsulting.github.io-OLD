import React from "react"
import { DefaultLayout } from "../../layouts"
import {
  Hero,
  Section,
  Modal
} from 'prometheusui'
import CMS from "../../assets/cms/home.json"
import LogoGallery from '../../assets/images/logos.png'
import "./Home.css"

class HomePage extends React.Component {
  state = {
    isModalOpen: false
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  getComponent = (type) => {
    switch(type) {
      case 'IMAGE':
        return Hero.Image
      case 'DEFAULT':
      default:
        return Hero
    }
  }

  renderSection = (section, index) => {
    const bulma = section.bulma.reduce((obj, tag) => ({...obj, [tag]: true}), {})
    let cover = null
    if (section.type === 'IMAGE') {
      bulma.image = require(`../../${section.image}`)
      cover = <Hero.Cover />
    }
    const Comp = this.getComponent(section.type)
    return (
      <Comp
        key={index}
        {...bulma}
      >
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
    return (
      <DefaultLayout location={this.props.location}>
        <div className="Home">
          {CMS.sections.map(this.renderSection)}
          <Section isLarge>
            <Section.Title>Where our partners have worked</Section.Title>
            <img src={LogoGallery} alt="logo-banner" />
          </Section>
          <Modal onClose={this.closeModal} isActive={this.state.isModalOpen}>
            <div style={{backgroundColor: 'white', height: '500px', width: '500px' }}>Hello!</div>
          </Modal>
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
