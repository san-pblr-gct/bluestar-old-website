import React from 'react';
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

const Slider = (props) => (
    <div className="col s12 m8">
        <section className="slider ">
            <ul className="slides">
                <li>
                    <img src={img3}></img>

                </li>
                <li>
                    <img src={img4}></img>
                </li>
            </ul>
        </section>
    </div>
)
export default Slider;