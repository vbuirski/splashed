import React, {useState, useEffect} from 'react';

import './AppContainer.css';
import Search from '../../components/Search/Search';
import Image from '../../components/Image/Image';
import Error from '../../components/Error/Error';
import axios from "axios";

function AppContainer(props) {

    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('https://api.unsplash.com/photos/random?orientation=landscape&count=30&client_id=' + atob('dUdaVk9lS2FaNEhOaC1yYkdjLUpaVVNFNFBZMktGaUc3Wl9UeGJQVnYwQQ=='))
            .then(response => {
                setImages(response.data);
                setError(false);
                setErrorMessage('');
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.message);
            })
    }, []);

    function onSearchImages(enteredSearchText) {
        console.log('searching for: ' + enteredSearchText);
        axios.get('https://api.unsplash.com/search/photos?query=' + enteredSearchText + '&orientation=landscape&per_page=30&client_id=' + atob('dUdaVk9lS2FaNEhOaC1yYkdjLUpaVVNFNFBZMktGaUc3Wl9UeGJQVnYwQQ=='))
        .then(response => {
            setImages(response.data.results);
            setError(false);
            setErrorMessage('');
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message);
        })
    };

    let listOfImages = images.map(image => {
        return <Image url={image.urls.regular} name={image.user.name} link={image.links.html} description={image.description}/>;
    });


    return (
        <section className="AppContainer">
            <div className="main">
                <header className={`AppContainer__header`}>
                    <h1>splashed!</h1>
                </header>
                <Search onSearchImages={onSearchImages}/>
                {error ? <Error errorMessage={errorMessage}/> : null}
                <section className="Images">
                    <div className="image-gallery"> 
                        {listOfImages}
                    </div>
                </section>
                <footer>
                    @vbuirski
                </footer>
            </div>
        </section>
    );
}

export default AppContainer;
