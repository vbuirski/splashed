import React, {useState} from 'react';
import './Search.css';

const Search = ({onSearchImages}) => {
    const [enteredSearchText, setEnteredSearchText] = useState('');
    
    const submitHandler = event => {
        event.preventDefault();
        onSearchImages(enteredSearchText);
    };

    return (
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    className="searchInput" 
                    id="searchText" 
                    value={enteredSearchText} 
                    onChange={event => {
                        setEnteredSearchText(event.target.value);
                    }} 
                    placeholder="search your splash" />
            </form>
        </div>
    );
}
export default Search;