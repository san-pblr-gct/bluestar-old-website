import React from 'react';

const Amenity = (props) => (
    <div className="col s12 m3">
        <div className="card-panel">
            <i className="material-icons medium blue-text">{props.Icon}</i>
            <h5>{props.Name}</h5>
        </div>
    </div>
)
export default Amenity;