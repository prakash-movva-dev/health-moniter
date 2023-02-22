import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../styles/sidebar.scss";
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
export default function Sidebar() {

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="app-component-header">
        <div className="app-component-header-logo">
            <h4 className="dummy-logo-text">Medical Analytics</h4>
        </div>
        <div className="app-component-header-content">
        <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{color:'#ffffff', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleDrawerClose}  sx={{ color:'#ffffff', display: 'none', ...(open && { display: 'flex' }) }}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <div className="app-page-wrapper">
        <div className="app-component-sidebar">
          <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className="app-sidebar-menu">
            <ul className="app-sidebar-menu-list">
              <li className="app-sidebar-menu-list-item">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 <span>FCV-103A</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="sidebar-inner-link">
                    <li className="sidebar-inner-link-item">Option 1</li>
                    <li className="sidebar-inner-link-item">Option 2</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              </li>
              <li className="app-sidebar-menu-list-item">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 <span>FCV-103A</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="sidebar-inner-link">
                    <li className="sidebar-inner-link-item">Option 1</li>
                    <li className="sidebar-inner-link-item">Option 2</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              </li>
            </ul>
          </div>
        </Drawer>
        </div>
        <Main open={open}>
          <div className="app-page-content">
            <h1 className="app-page-content-heading">Dashboard</h1>

          </div>
        </Main>
      </div>
    </>
  );
}