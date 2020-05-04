import React from 'react';
import MetaTags from 'react-meta-tags';
import AppContainer from './containers/AppContainer/AppContainer';
import './App.css';

const App = () => {
  return (
      <div className="wrapper">
          <MetaTags>
              <title>splashed!</title>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta id="meta-description" name="splashed" content="splashed by vbuirski"/>
              <meta id="og-title" property="og:title" content="splashed"/>
              <script src="https://kit.fontawesome.com/77b735345e.js" crossOrigin="anonymous"></script>
          </MetaTags>
          <div className="App">
              <AppContainer />
          </div>
      </div>
  );
}

export default App;
