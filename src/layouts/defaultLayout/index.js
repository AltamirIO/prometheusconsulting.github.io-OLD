import React from "react"
import propTypes from 'prop-types'
import "./defaultLayout.css"
import { Navbar, Footer, Button, Level } from "prometheusui"
import PrometheusLogo from "../../prometheus-white.png"
import { PhoneIcon } from "../../assets/icons";

export default function DefaultLayout({ children, location }) {
  return (
    <div style={{
      display:'flex',
      flexDirection: 'column',
      minHeight: '97vh',
    }}  
    >
      <Navbar logo={PrometheusLogo} isFixedTop isTransparent isBlack>
        <Navbar.Link to="/">Home</Navbar.Link>
        <Navbar.Link to="/Services" isActive={location.pathname.includes('Services')}>Our Services</Navbar.Link>
        <Navbar.Link to="/Contact">Get In Touch</Navbar.Link>
        <Navbar.Item>
          <Button.ExternalLink href="tel:+18019970739" isRounded isInverted isOutlined isBlack>
            <PhoneIcon size={"1.3rem"} />&nbsp;&nbsp;(801) 997-0739
          </Button.ExternalLink>
        </Navbar.Item>
      </Navbar>
      <div style={{flex:1}}>
        {children}
      </div>
      <Footer style={{ backgroundColor: '#363636', color: 'white', justifySelf: 'flex-end' }}>
        <Level>
          <Level.Left style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div><a style={{ color: 'white' }} href="mailto:info@prometheusconsulting.io">info@prometheusconsulting.io</a></div>
            <div><a style={{ color: 'white' }} href="tel:+18019970739">(801) 997-0739</a></div>
            <div>A Proud Utah Business</div>
          </Level.Left>
          <Level.Right>
            &copy; {new Date().getFullYear()} Prometheus Software Consulting, LLC
          </Level.Right>
        </Level>
      </Footer>
    </div>
  )
}

DefaultLayout.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
  })
}

DefaultLayout.defaultProps = {
  location: { pathname: '' }
}