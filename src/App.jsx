import React, { useState } from 'react';
import { Announcement } from './Components/announcementBar/announcement';
import { Footer } from './Components/Footer/theFooter';
import { Container, Box, CssBaseline, useTheme, Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import { LandingPage } from './Components/Navbar/ComboComponent';
import { MyFeed } from './Components/FeedbackBlog/Feedback';
import { CustomThemeSwitchButton } from './Components/CustomeThemeSwitchButton/CustomThemeSwichButton';
import CloseIcon from '@mui/icons-material/Close';
import { AdBannerCarousel } from './Components/AdsCarousel/Carousel';
import { AdBannerCarousel2 } from './Components/AdsCarousel/Carousel2';
function App() {
  const headerHeight = '64px'; // Example fixed header height
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleFormModalOpen = () => {
    setIsFormModalOpen(true);
  };

  const handleFormModalClose = () => {
    setIsFormModalOpen(false);
  };

  const FormModal = ({ open, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          Form
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyrW9aZ8Ln5oeTGKXrdU0KyOWMhePnc-Kyw-2wxLPPw412Zw/viewform?embedded=true"
            width="100%"
            height="800"
          >
            Loading...
          </iframe>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
    <CssBaseline /> {/* Ensures consistent styling across browsers */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header remains fixed at the top */}
      <Box component="header" sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 'tooltip' }}>
        <Announcement />
      </Box>
      {/* Main content with sufficient padding to avoid overlap with the header */}
      <Container component="main" sx={{
          paddingTop: '64px', // Adjust this value based on your header's height
          display: 'flex', // Enable flexbox
          flexDirection: 'column', // Stack children vertically
          alignItems: 'center', // Center children horizontally
          flex: 1, // Take available space
        }}>
        <LandingPage />
        <Box>
          <CustomThemeSwitchButton />
        </Box>
        {/* Wrap the button in a Box and apply centering */}
        <Box mt={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={handleFormModalOpen}>
            Feedback
          </Button>
          
        </Box>
        
        
      </Container>
      <Box mb={'5rem'}>
        <Box mb={4}> {/* Add bottom margin */}
          <AdBannerCarousel />
        </Box>

        <Box mt={4}> {/* Alternatively, add top margin to the second component */}
          <AdBannerCarousel2 />
        </Box>
      </Box>
      {/* Modal and footer */}
      <FormModal open={isFormModalOpen} onClose={handleFormModalClose} />
      <Footer />
    </Box>
  </>
  );
}

export default App;