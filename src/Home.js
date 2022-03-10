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
menuLetra:{
  color:'red',
  height:'10px',
}
 
}));

function Home() {
    const classes=useStyles();
 return (


 
<div className={classes.root}>
   
<AppBar color='inherit' class={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography class={classes.menuLetra} variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}

 
export default Home;
 
