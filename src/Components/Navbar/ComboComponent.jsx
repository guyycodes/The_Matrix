import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GuyMorganB from '../../../public/GuyMorganB.svg';
import { Flex, Link, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
export const LandingPage = () => {
  const [DeBounce, setDeBounce] = useState()
  const iframeRef = useRef(null);

  let navGold = '#ffeaa7';
  let navDark = '#2d3436';



  useEffect(() => {
    
    setDeBounce(true);
    const debounceTimer = setTimeout(() => {

      setDeBounce(false);
    }, 2750); // Adjust the debounce delay as needed (in milliseconds)
  
    // Clean up the debounce timer on component unmount or dependency change
    return () => {
      clearTimeout(debounceTimer);
    };
  }, []);


  return (
    <Box>
     
      {/* Navbar */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        background: `linear-gradient(to right, ${navGold} 60%, ${navDark} 140%)`,
        borderRadius: "10px"
      }}>
        {/* Logo */}
        <Box sx={{ height: 120, width: 120, position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
            <img src={GuyMorganB} alt="Logo" style={{ transform: 'rotate(-10deg)', height: '100%', position: 'absolute', bottom: 0 }} />
        </Box>
        <Box p={4}>
        <Flex justify="center">
          <Link href="https://www.linkedin.com/in/guymorganb" isExternal mr={4}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com/guyycodes" isExternal mr={4}>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://www.threads.net/@guyycodes" isExternal mr={4}>
            <Icon as={SiThreads} boxSize={6} />
          </Link>
          <Link href="https://www.guymorganb.com" isExternal mr={4}>
            guymorganb.com
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61558757112366" isExternal mr={4}>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://t.me/guyycodes" isExternal>
            <Icon as={FaTelegram} boxSize={6} />
          </Link>
        </Flex>
      </Box>
      </Box>
      {/* Main Content */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Downloadable Matrix Progressive Web App 'Code Rain' Visualizer 
        </Typography>
        <Typography>
        </Typography> 
         <Box
            display="flex" // Use flexbox to center the iframe
            justifyContent="center" // Center horizontally in the flex container
            alignItems="center" // Center vertically in the flex container
        >
            <iframe
                ref={iframeRef}
                width="560" // Set the width of the iframe
                height="315" // Set the height of the iframe
                src="https://www.youtube.com/embed/eH7qfq_KkVM?autoplay=1&controls=1&loop=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                    borderRadius: "10px"
                }}
            ></iframe>
        </Box>

      </Box>
    </Box>
  );
};

