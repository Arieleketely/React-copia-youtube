import React from 'react';
import './App.css';
import {makeStyles,AppBar} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import Logo from './imagens/preto.png';

import { NoEncryption } from '@material-ui/icons';







const useStyles=makeStyles((theme) => ({
  root:{
  

    height:'80px',
    
},
appBar:{
boxShadow:'none',
},
menuLetra:{
  
  height:'10px',
},
 grow:{
 position:'absolute',
 right:'10px',
 color:'blue',
 },
button:{
  color:'blue',
  borderColor:'blue',
},
icons:{
paddingRight:theme.spacing(5),
},
logo:{
height:25,
},

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
          <div>
          <img src={Logo} alt='logo' className={classes.logo}/>
           
          </div>
<div className={classes.grow}>
<Button  startIcon={<VideoCallIcon/>}></Button>
<Button  startIcon={<AppsIcon/>}></Button>
<Button  startIcon={<MoreVertIcon/>}></Button>
<Button  startIcon={<AccountCircleIcon/>}variant="outlined" color="primary" className={classes.button}>

Fazer Login
</Button>
  </div>     
      
        </Toolbar>
      </AppBar>
    </div>

  );
}

 
export default Home;
 
