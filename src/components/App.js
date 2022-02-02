import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection/MainSection'
import BusinessSection from './BusinessSection'
import SafetySection from './SafetySection/SafetySection'
import AppsDisplaySection from './AppsDisplaySection'
import SignUpSection from './SignUpSection'
import Footer from './Footer/Footer'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
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

export default App
