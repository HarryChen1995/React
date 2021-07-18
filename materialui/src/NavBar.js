import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ListItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import { useState } from 'react';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme)=>({
  root: { flexGrow:1},
  menuButton: {
    marginRight: theme.spacing(2),
    title: {
      flexGrow:1,
    },  
  },
  list: {
    width: 250,
  },
  appbar: {
  }
}));


function NavBar() {
  const classes = useStyles();
  const iconMap = {
    "Home": <HomeIcon />,
    "Profile": <AccountCircleIcon />,
    "Blogs": <BookIcon />
  }
  const list = () => (
    <div className = {classes.list}>
      <List>
        {['Home', 'Profile', 'Blogs'].map((text, index) => (
          <ListItem button  onClick = {()=> toggleDrawer(false)} key={text} component = {Link} to = { index === 0 ? "/": "/" + text}>
            <ListItemIcon>{iconMap[text]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const [showDrawer, toggleDrawer] = useState(false)
  return (
    <AppBar className = {classes.appbar} position="static" color = "primary">
    <Toolbar variant = "dense">
      <IconButton onClick = {()=> toggleDrawer(true)} edge="start" className = {classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6"  className = {classes.title}>
        AppBar
      </Typography>
    </Toolbar>
    <Drawer open={showDrawer} onClose={()=>toggleDrawer(false)}>
            {list()}
          </Drawer>
  </AppBar>
  );
}

export {NavBar}