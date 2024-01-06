import * as React from 'react';
import protectiondata from './protectiondata'
import Nuidata from './nuisanceWilddata';
import Abusdata from './animal abuse';
import Breeddata from './BreedData';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './protection.css'
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';


  function Pets(props){
    return(
        <div className="fast">
          <h1>{props.name}</h1>
          <p>{props.matter}</p>
          <p>{props.matter1}</p>
        </div>
       
    )
  }
  
  const a=protectiondata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })
   
  const b=Nuidata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

  const c=Abusdata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

  const d=Breeddata.map(b=>{
    return(
      <Pets
      {...b}
      />
    )
  })

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
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Protecting wild animals" {...a11yProps(0)} />
            <Tab label="Managing wildlife" {...a11yProps(1)} />
            <Tab label="Avoid Animal abuse" {...a11yProps(2)} />
            <Tab label="Breeding,Harvesting" {...a11yProps(3)} />

          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {a}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {b}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {c}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          {d}
        </CustomTabPanel>
      </Box>
    );
  }