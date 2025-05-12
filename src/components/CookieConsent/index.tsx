'use client';

import React, { useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Paper,
  Fade
} from '@mui/material';

declare global {
  interface Window {
    dataLayer: { event: string }[];
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setMounted(true);
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_accepted' });
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_rejected' });
  };

  return (
    <Fade in={showConsent && mounted}>
      <Paper
        elevation={6}
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: {
            xs: '90%',
            sm: '80%',
            md: '600px',
          },
          p: 2,
          backgroundColor: '#fff',
          zIndex: 9999,
        }}
      >
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
          <a href="/politicadeprivacidade" target="_blank" style={{ color: '#0070f3' }}>
            Política de Privacidade
          </a>.
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1}>
          <Button variant="contained" color="primary" onClick={handleAccept}>
            Aceitar
          </Button>
          <Button variant="outlined" color="error" onClick={handleReject}>
            Rejeitar
          </Button>
        </Box>
      </Paper>
    </Fade>
  );
}
