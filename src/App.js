    import React from 'react';
    import HeroComponent from './components/HeroComponent';
    import Navbar from './components/Navbar';

    const App = () => {
        return (
            <div className="App">
                <Navbar />
                <HeroComponent />
            </div>
        );
    };

    export default App;
