

import {ThemeProvider,createMuiTheme,makeStyles} from '@material-ui/core/';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';

const useStyles=makeStyles({
  root:{
    background:'white',

    height:'80px',
},
 
});

function App() {
  const theme = createMuiTheme({

    palette: {
      primary: {
        main:'#f44336',
      },
      secondary:{
main:'#3f51b5',
      },
      },
    });
   const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
 <div  className={classes.root}>
  
<Home/>
 </div>
 
  </ThemeProvider>
  
  );
}

export default App;
