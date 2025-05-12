// components/WhatsAppButton.tsx

'use client';
import React from 'react';
import { Fab, useTheme, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '5512982510000'; 
  const message = 'Olá! Gostaria de mais informações.';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Fab
        
        aria-label="whatsapp"
        sx={{
          backgroundColor:' #66BB6A',
          position: 'fixed',
          bottom: isMobile ? 16 : 24,
          right: isMobile ? 16 : 24,
          zIndex: 9999,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <WhatsAppIcon sx={{color:'white'}}/>
      </Fab>
    </a>
  );
};

export default WhatsAppButton;
