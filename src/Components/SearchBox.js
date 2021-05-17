import React from 'react';

const SearchBox = (props) =>{
    return(
        <div>
            <input placeholder='search robot' onChange={props.onSearch} className='br3 pa3 ma2'></input>
        </div>
    );
};

export default SearchBox;