import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../navbar/Navbar';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fivedayForecast, hourlyForecast, onedayWeatherForecast, onehourForecast } from '../../services/allApi';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3b82f6',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
        <Box sx={{ p: 3 }}>
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

function Forecasting() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [oneHour,setOnehour]=useState([])
  const [hourly,setHourly]=useState([])
  const [onday,setOnday]=useState([])
  const [fiveday,setFiveday]=useState([])
 

  //Api call to get 1 hour forecast
  const fetchOnehour=async()=>{
    try {
      const response=await onehourForecast()
      console.log(response.data);
      setOnehour(response.data)
    } catch (error) {
      alert('faild to fetch 1 hour weather forecast')
    }
  }
  console.log(oneHour);

  //Api call to get hourly forecast
  const fetchHourlyforecast=async()=>{
   try {
    const result=await hourlyForecast()
    console.log(result.data);
    setHourly(result.data)
   } catch (error) {
    alert('faild to fetch  hourly weather forecast')
   }
  } 
  console.log(hourly);

  //Api call to fetch oneday weather forecast
  const fetchOnedayforecast=async()=>{
    try {
      const data=await onedayWeatherForecast()
      console.log(data.data);
      setOnday(data.data)
    } catch (error) {
      alert('faild to fetch one day weather forecast')
    }
  }
  console.log(onday);

  //Api call to fetch five day weather forecast
  const fetchFivedayforecast=async()=>{
  try {
    const weatherData=await fivedayForecast()
    console.log(weatherData.data);
    setFiveday(weatherData.data)
  
  } catch (error) {
    alert('faild to fetch five day weather forecast')
  }

  }
  console.log(fiveday);

  useEffect(()=>{
    fetchOnehour()
    
  },[])

  return (
    <div className='mainbody'>
       <Navbar />
       <Box className='mainbody' sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="One Hour Forecast" {...a11yProps(0)} />
          <Tab onClick={fetchHourlyforecast}  label="Hourly Forecast" {...a11yProps(1)} />
          <Tab onClick={fetchOnedayforecast} label="One Day Forecast" {...a11yProps(2)} />
          <Tab onClick={fetchFivedayforecast} label="Five Day Forecast" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h4>One Hour Forecast</h4>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date & Time</StyledTableCell>
            <StyledTableCell align="right">Tempature</StyledTableCell>
            <StyledTableCell align="right">Weather</StyledTableCell>
            <StyledTableCell align="right">IsDaylight</StyledTableCell>
            <StyledTableCell align="right">HasPrecipitation</StyledTableCell>
            <StyledTableCell align="right">Precipitation-Probability</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
           oneHour?oneHour.map((onehourWeather) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {onehourWeather.DateTime}
              </StyledTableCell>
              <StyledTableCell align="right">{onehourWeather.Temperature.Value} {onehourWeather.Temperature.Unit }</StyledTableCell>
              <StyledTableCell align="right"> {onehourWeather.IconPhrase}</StyledTableCell>
              <StyledTableCell align="right">{onehourWeather.IsDaylight.toString()}</StyledTableCell>
              <StyledTableCell align="right">{onehourWeather.HasPrecipitation.toString()}</StyledTableCell>
              <StyledTableCell align="right">{onehourWeather. PrecipitationProbability}</StyledTableCell>
            </StyledTableRow>
          )): <div >
            <h5 className='my-2'>Api Key expired</h5>
          </div>
          }
        </TableBody>
      </Table>
    </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <h4> Hourly Forecast</h4>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date & Time</StyledTableCell>
            <StyledTableCell align="right">Tempature</StyledTableCell>
            <StyledTableCell align="right">IsDaylight</StyledTableCell>
            <StyledTableCell align="right">HasPrecipitation</StyledTableCell>
            <StyledTableCell align="right">Precipitation-Probability</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          hourly?hourly.map((hourlyData) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {hourlyData.DateTime}
              </StyledTableCell>
              <StyledTableCell align="right">{hourlyData.Temperature.Value} {hourlyData.Temperature.Unit }</StyledTableCell>
              <StyledTableCell align="right">{hourlyData.IconPhrase}</StyledTableCell>
              <StyledTableCell align="right">{hourlyData.HasPrecipitation.toString()}</StyledTableCell>
              <StyledTableCell align="right">{hourlyData.PrecipitationProbability}</StyledTableCell>
            </StyledTableRow>
          )):<div>
            <h5 className='my-2'>Api key expired</h5>
          </div>
        }
        </TableBody>
      </Table>
    </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
    <h4>One Day Forecast</h4>   
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date & Time</StyledTableCell>
            <StyledTableCell align="right">Tempature</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          onday?onday.map((onedayWeather) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {onedayWeather.Date}
              </StyledTableCell>
              <StyledTableCell align="right">{onedayWeather}</StyledTableCell>
              <StyledTableCell align="right">{onedayWeather}</StyledTableCell>
              <StyledTableCell align="right">{onedayWeather}</StyledTableCell>
              <StyledTableCell align="right">{onedayWeather}</StyledTableCell>
            </StyledTableRow>
          )):<div>
          <h5 className='my-2'>Api key expired</h5>
        </div>
          }
        </TableBody>
      </Table>
    </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
     <h4>Five Day Forecast</h4>  
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date & Time</StyledTableCell>
            <StyledTableCell align="right">Tempature</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          fiveday?fiveday.map((fivedayWeather) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {fivedayWeather.date}
              </StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
            </StyledTableRow>
          )):<div>
          <h5 className='my-2'>Api key expired</h5>
        </div>
          }
        </TableBody>
      </Table>
    </TableContainer>
      </CustomTabPanel>
    </Box>
  
    </div>
    

  )
}

export default Forecasting