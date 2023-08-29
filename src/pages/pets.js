import * as React from 'react';
import dogdata from './Dogdata';
import catdata from './Catdata';
import fishdata from './fishData';
import parrotdata from './parrotData';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function Pets(props){
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="pet Img"
          height="140"
          image={props.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.matter}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lifetime :- {props.lifetime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Cost :-{props.cost}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  }
  
    
  
  
  const a=dogdata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })
   
  const b=catdata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

  const c=fishdata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

  const d=parrotdata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dogs" {...a11yProps(0)} />
          <Tab label="Cats" {...a11yProps(1)} />
          <Tab label="Fishes" {...a11yProps(2)} />
          <Tab label="Parrots" {...a11yProps(3)} />
        </Tabs>
      </Box>


      <CustomTabPanel value={value} index={0}>
    <div>
    <Box sx={{ flexGrow: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          {a}
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
      <div>
    <Box sx={{ flexGrow: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          {b}
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <div>
    <Box sx={{ flexGrow: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          {c}
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
      <div>
    <Box sx={{ flexGrow: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          {d}
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
      </CustomTabPanel>

    </Box>
    
  );
}