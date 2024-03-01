import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './DashBoard.css'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

function DashBoard() {
  const navigate = useNavigate()
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dashboardname, setDashboardName] = useState('Dashboard')

  const sideBarName = [{ name: 'Dashboard', logo: <SpeedOutlinedIcon /> , navigate:'dashboard'}, { name: 'Categories', logo: <CategoryIcon />, navigate: 'categories' }, { name: 'Product', logo: <Inventory2RoundedIcon />, navigate: 'products' }, { name: 'Orders', logo: <ShoppingCartRoundedIcon />, navigate: 'orders' }, { name: 'Users', logo: <PersonRoundedIcon />, navigate: 'users' }, { name: 'Newsletter', logo: <NewspaperRoundedIcon />, navigate: 'newsletter' }, { name: 'Setting', logo: <SettingsRoundedIcon />, navigate: 'setting' },]

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  }

  const dashboardnameFunctionality = (value) => { 
    setDashboardName(value.name) 
    navigate(value.navigate)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sideBarName.map((text, index) => (
          <ListItem key={text.name} disablePadding onClick={() => dashboardnameFunctionality(text)}>
            <ListItemButton>
              <ListItemIcon>
                {text.logo}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: "gainsboro", color: 'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {dashboardname}
          </Typography>
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path='dashboard' element={<h1>dashboard</h1>}></Route>
          <Route path='categories' element={<h1>categories</h1>}></Route>
          <Route path='products' element={<h1>products</h1>}></Route>
          <Route path='orders' element={<h1>orders</h1>}></Route>
          <Route path='users' element={<h1>users</h1>}></Route>
          <Route path='newsletter' element={<h1>newsletter</h1>}></Route>
          <Route path='setting' element={<h1>setting</h1>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default DashBoard;