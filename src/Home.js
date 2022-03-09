import React from 'react';
import './App.css';
import {makeStyles,AppBar} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NoEncryption } from '@material-ui/icons';







const useStyles=makeStyles((theme) => ({
  root:{
  

    height:'50px',
    
},
appBar:{
boxShadow:'none',
},








 
}));

function Home() {
    const classes=useStyles();
 return (
    <div className={classes.root}>







      <AppBar color='inherit' class={classes.appBar}>
   
        <Toolbar color='inherit'>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
      
        
       
   
          <Toolbar>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
       
       
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
