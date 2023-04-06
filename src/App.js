import './App.scss';
import "./assets/styles/styles.scss"
import React, { Component } from 'react';
import TopNavbar from './components/TopNavbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import SocialSection from './components/SocialSection';
import ProductsSection from './components/ProductsSection';
import PartnerSection from './components/PartnerSection';
import ContactUsSection from './components/ContactUsSection';
import ThanksModal from './components/ThanksModal';
import ConnectingWithTeam from './components/ConnectingWithTeam';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showThanksModal: false,
    }
  }

  handleThanksModal = () => {
    this.setState({ showThanksModal: !this.state.showThanksModal });
  }

  render() {
    return (
      <div className='App'>
        <HeroSection />
        <SocialSection />
        <TeamSection />
        <ProductsSection />
        <ConnectingWithTeam />
        <PartnerSection />
        <ContactUsSection handleThanksModal={this.handleThanksModal} />
        <ThanksModal show={this.state.showThanksModal} onHide={this.handleThanksModal} />
      </div>
    )
  }
}

