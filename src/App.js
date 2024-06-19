import React from 'react';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import MuestraProducto from './components/MuestraProducto';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <HeroComponent />
            <MuestraProducto />
        </div>
    );
};

export default App;
