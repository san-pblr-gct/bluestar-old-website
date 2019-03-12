import React from 'react';
import Amenity from './Amenity';

const Amenities = (props) => (
    <section className="section section-icons grey lighten-4 center">
    <div className="container">
        <div className="row">
            <Amenity Icon="room" Name="GPS"/>
            <Amenity Icon="ac_unit" Name="A/C"/>
            <Amenity Icon="schedule" Name="Punctuality"/>
            <Amenity Icon="local_shipping" Name="Parcel"/>
        </div>
    </div>
</section>
)
export default Amenities;