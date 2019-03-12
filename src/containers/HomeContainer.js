import React from 'react';
import Amenities from '../components/Amenities'
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import '../main.css';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            loading: false,
            sources: [],
            destination: [],
            search: {}
        }
    }

    componentDidMount() {
        const slider = document.querySelector('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 350,
            transition: 350,
            interval: 6000
        });
    }
    render() {
        return (<div>
            <Header />
            <div className="container">
                <div className="row">
                    <Search />
                    <Slider />
                </div>
            </div>
            <Amenities />
            <Footer />

        </div>);
    }
}

export default HomeContainer;