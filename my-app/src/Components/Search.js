import React from 'react';

const Search = props => {
    return (
        <form onSubmit={props.searchCharacter}>
            <input style={{ margin: '20px auto', display: 'block' }} type="text" name="name" />
            <button>Submit</button>
        </form>
    );
};

export default Search;
