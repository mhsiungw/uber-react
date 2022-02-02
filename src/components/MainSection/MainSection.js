import React from 'react'
import Radium from 'radium'
import MainTabs from './MainTabs'
import MainInfo from './MainInfo'
import MainBackground from './MainBackground'
import '../../stylesheets/MainSection.scss'

class Main extends React.Component {
    state = {
        clickedItem: 'drive',
        info: {
            drive: {
                title: `Get in the driver's seat and get paid`,
                content: 'Drive on the platform with the largest network of active riders.',
                button: 'Sign up to drive',
                link: 'Learn more about driving and delivering',
                img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1558,h_876/v1613521458/assets/50/5688e1-c494-47b9-9e9a-e13d45de5eb8/original/Earner_Home_bg_tablet.png',
            },
            eat: {
                title: 'Discover delicious eats',
                content: 'Order delivery from restaurants you love.',
                button: 'Order now',
                link: 'Own a restaurant? Partner with Uber Eats',
                img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1037,h_583/v1613521596/assets/5a/a8230b-b6ec-4123-a042-6adc0a31a788/original/Eats_Home_bg_tabletpng.png',
            },
            ride: {
                title: 'Request a ride now',
                content: 'input',
                button: 'Request now',
                link: 'Schedule for later',
                img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_865,h_487/v1613521717/assets/7a/fd8982-6884-49b9-bb5f-28e6ff2cc0e8/original/Rider_Home_bg_tablet.png',
            },
        },
    }

    onShow = (clickedItem) => {
        let arr = []
        if (clickedItem.target.matches('.tab')) {
            arr = clickedItem.target.className.split(' ')
        } else if (clickedItem.target.parentElement.matches('.tab')) {
            arr = clickedItem.target.parentElement.className.split(' ')
        } else if (clickedItem.target.parentElement.parentElement.matches('.tab')) {
            arr = clickedItem.target.parentElement.parentElement.className.split(' ')
        } else {
            return
        }
        this.setState({ clickedItem: arr[1] })
    }

    render() {
        return (
            <div className="main">
                <div className="tabs-info-container">
                    <MainTabs clickedItem={this.state.clickedItem} onShow={this.onShow} />
                    <MainInfo clickedItem={this.state.clickedItem} info={this.state.info} />
                </div>
                <MainBackground clickedItem={this.state.clickedItem} info={this.state.info} />
            </div>
        )
    }
}

export default Radium(Main)
