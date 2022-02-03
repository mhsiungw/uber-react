import React from 'react'
import Navbar from './Navbar/Navbar'
import ToggleNavbar from './Navbar/ToggleNavbar'
import MainSection from './MainSection/MainSection'
import BusinessSection from './BusinessSection'
import SafetySection from './SafetySection/SafetySection'
import AppsDisplaySection from './AppsDisplaySection'
import SignUpSection from './SignUpSection'
import Footer from './Footer/Footer'

class App extends React.Component {
    state = { isToggleNavbarShow: false }

    handleToggleNavbar = (value) => {
        this.setState({ isToggleNavbarShow: value })
    }

    renderContent = () => {
        if (!this.state.isToggleNavbarShow) {
            return (
                <React.Fragment>
                    <MainSection />
                    <BusinessSection />
                    <SafetySection />
                    <AppsDisplaySection />
                    <SignUpSection />
                    <Footer />
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    handleToggleNavbar={this.handleToggleNavbar}
                    isToggleNavbarShow={this.state.isToggleNavbarShow}
                />
                <ToggleNavbar
                    isToggleNavbarShow={this.state.isToggleNavbarShow}
                    handleToggleNavbar={this.handleToggleNavbar}
                />
                {this.renderContent()}
            </React.Fragment>
        )
    }
}

export default App
