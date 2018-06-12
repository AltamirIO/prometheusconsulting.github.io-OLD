import PrometheusLogo from '../../prometheus-white.png'
import propTypes from 'prop-types'
import React from 'react'
import { PhoneIcon } from '../../assets/icons'
import './defaultLayout.css'
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar';
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand';
import { NavbarLink } from 'bloomer/lib/components/Navbar/NavbarLink';
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu';
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';
import { Button } from 'bloomer/lib/elements/Button';
import { Footer } from 'bloomer/lib/layout/Footer';
import { Level } from 'bloomer/lib/components/Level/Level';
import { LevelLeft } from 'bloomer/lib/components/Level/LevelLeft';
import { LevelRight } from 'bloomer/lib/components/Level/LevelRight';
import { NavbarBurger } from 'bloomer/lib/components/Navbar/NavbarBurger';

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuExpanded: false
    }
  }
  handleToggleMenu = () => {
    this.setState(prevState => {
      prevState.isMenuExpanded = !prevState.isMenuExpanded
      return prevState
    })
  }
  render() {
    const { location, children } = this.props
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "97vh"
        }}
      >
        <Navbar className="is-black is-fixed-top is-transparent">
          <NavbarBrand>
            <NavbarLink to="/">
              <img width="200px" src={PrometheusLogo} alt="Prometheus Software Consulting" />
            </NavbarLink>
            <NavbarBurger isActive={this.state.isMenuExpanded} onClick={this.handleToggleMenu}/>
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isMenuExpanded}>
            <NavbarEnd>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink
                to="/Services"
                isActive={location.pathname.includes("Services")}
              >
                Our Services
              </NavbarLink>
              <NavbarItem>
                <Button
                  href="tel:18019970739"
                  className={`is-rounded is-inverted is-outlined ${this.state.isMenuExpanded ? '' : 'is-black'}`}
                >
                  <PhoneIcon size={"1.3rem"} />&nbsp;&nbsp;(801) 997-0739
                </Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
        <div style={{ flex: 1 }}>{children}</div>
        <Footer
          style={{
            backgroundColor: "#363636",
            color: "white",
            justifySelf: "flex-end"
          }}
        >
          <Level>
            <LevelLeft
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <div>
                <a
                  style={{ color: "white" }}
                  href="mailto:info@prometheusconsulting.io"
                >
                  info@prometheusconsulting.io
                </a>
              </div>
              <div>
                <a style={{ color: "white" }} href="tel:18019970739">
                  (801) 997-0739
                </a>
              </div>
              <div>A Proud Utah Business</div>
            </LevelLeft>
            <LevelRight>
              &copy; {new Date().getFullYear()} Prometheus Software Consulting,
              LLC
            </LevelRight>
          </Level>
        </Footer>
      </div>
    );

  }
}

DefaultLayout.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string
  })
};

DefaultLayout.defaultProps = {
  location: { pathname: "" }
};
