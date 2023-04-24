import React from "react";
import './Card.css'

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className='pa3 ba b--green bg-lightest-blue br3'
                   type="search"
                   placeholder="search robots"
                   onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;
