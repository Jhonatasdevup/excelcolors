'use client';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dataMenu = [
    {
      url: '/',
      name: 'Início',
      text: 'Bem-vindo à Excel Colors'
    },
    {
      url: '/#sobre',
      name: 'Sobre',
      text: 'Conheça a Excel Colors'
    },
    {
      url: '/servicos',
      name: 'Serviços',
      text: 'Conheça todos os nossos serviços'
    },
    {
      url: '/cores',
      name: 'Cores',
      text: 'Tabela de cores RAL'
    },
    {
      url: '/contato',
      name: 'Contato',
      text: 'Entre em contato agora mesmo!'
    }
  ];

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderDesktopMenu = () => (
    <motion.ul 
      className={`${styles.menu} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {dataMenu.map((item, index) => (
        <motion.li 
          key={index} 
          className={pathname === item.url ? styles.linkOn : ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={item.url} className={styles.link}>{item.name}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );

  const renderMobileMenu = () => (
    <>
      <motion.div 
        className={`${styles.mobileHeader} ${scrolled ? styles.scrolled : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <IconButton 
          onClick={toggleMenu} 
          className={styles.menuButton}
          aria-label="menu"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </motion.div>

      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={closeMenu}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#F26C28',
            width: '75%',
            maxWidth: '300px',
            height: '100%',
            boxSizing: 'border-box'
          }
        }}
        transitionDuration={300}
      >
        <Box className={styles.drawerContent}>
          <IconButton 
            onClick={closeMenu} 
            className={styles.closeButton}
            aria-label="fechar menu"
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <ul className={styles.mobileMenu}>
            {dataMenu.map((item, index) => (
              <motion.li 
                key={index} 
                className={pathname === item.url ? styles.mobileLinkOn : ''}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.url} 
                  className={styles.mobileLink}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
      </nav>

      {/* Espaçador para a navbar fixa */}
      <div style={{ height: '60px' }}></div>

      <div className={styles.backgroundImage} style={{
        backgroundImage: `url(/banners${pathname === '/' ? '/home.png' : pathname + '.png'})`,
        marginTop: '-60px' // Compensa o espaçador para o background image
      }}>
        {dataMenu.map((item, index) => (
          <div key={index}>
            <motion.h1 
              className={styles.h1Background}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {pathname === item.url && item.text}
            </motion.h1>
          </div>
        ))}
      </div>
    </>
  );
}