import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import rutasImg from '../config/rutasImg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const handleNavClick = (section) => {
        setActiveLink(section);
    };

    const navLinkStyles = (section) => ({
        fontFamily: "'Open Sans', sans-serif",
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-4px',
            left: 0,
            width: activeLink === section ? '100%' : 0,
            height: '2px',
            backgroundColor: '#fff',
            transition: 'width 0.3s',
        },
    });

    const buttonStyles = {
        borderRadius: '20px',
        padding: '8px 24px',
        background: 'white',
        color: 'black',
        fontFamily: "'Open Sans', sans-serif",
        '&:hover': {
            background: '#e0e0e0',
        },
        fontWeight: "bold",
    };

    const appBarStyles = {
        background: 'transparent',
        boxShadow: 'none',
        top: 0,
        left: 0,
        right: 0,
    };

    const toolbarStyles = {
        maxWidth: '72%',
        width: '100%',
        margin: '2rem auto',
        fontFamily: "'Open Sans', sans-serif",
    };

    const logoStyles = {
        width: '250px',
    };

    const navLinks = ['Home', 'Lorem ipsum', 'Lorem'];

    return (
        <AppBar position="absolute" sx={appBarStyles}>
            <Toolbar sx={toolbarStyles}>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <img src={rutasImg.logo} alt="Logo" style={logoStyles} />
                </Box>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    {navLinks.map((section) => (
                        <Typography
                            key={section}
                            variant="body1"
                            component="div"
                            onClick={() => handleNavClick(section)}
                            sx={navLinkStyles(section)}
                        >
                            {section}
                        </Typography>
                    ))}
                    <Button variant="contained" sx={buttonStyles}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
