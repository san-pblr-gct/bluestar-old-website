import React from 'react';

const Search = (props) => (
    <div className="col s12 m4">
        <section id="search" className="section section-search white-text center scrollspy">
            <input type="text" className="white grey-text autocomplete" id="autocomplete-input" placeholder="From" />
            <input type="text" className="white grey-text autocomplete" id="autocomplete-input" placeholder="To" />
            <input type="text" className="datepicker" />
            <a className="waves-effect waves-blue btn">Search</a>
        </section>
    </div>

)
export default Search;