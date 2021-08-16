import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 mb2'> 
            <input
              onChange={searchChange}
              className='pa3 ba b--gold bg-washed-yellow' 
              type='search' 
              placeholder='Search robots...' />
        </div>
    )
}

export default SearchBox;