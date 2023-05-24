import React, { useRef, useEffect, useState } from 'react';import { HiMenuAlt3 } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import Map from './MyMap';
import MapWithUserLocation from './MapWithUserLocation';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { toUserResolution } from "ol/proj";
import IconButton from '@mui/material/IconButton';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InfoIcon from '@mui/icons-material/Info';
import "../Features/Style.css";

const SimpleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='forma'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField className="field"
        label="Name"
        {...register('name', { required: true })}
      />
       <br></br>
       <br></br>
      <TextField className="field"
        label="Last Name"
        {...register('lastname', { required: true })}
      />
       <br></br>
       <br></br>
      <TextField className="field"
        label="place"
        {...register('place', { required: true })}
      />
      <br></br>
      <br></br>
      <TextField className="field"
        label="random"
        {...register('random', { required: true })}
      />
      <br></br>
      <br></br>
      <Button type="submit" className="submitbttn">Submit</Button>
    </form>
    </div>

  );
}


const Home = () => {

  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [addpin, setAddpin] = useState(true);

  // Assuming you have a state to track the width of the parent div
  const [parentDivWidth, setParentDivWidth] = React.useState(0);

  // Function to update the parent div width
  const handleResize = () => {
    const width = document.getElementById('sidebar').clientWidth;
    setParentDivWidth(width);
  };
  React.useEffect(() => {
    handleResize(); // Initial width update
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
  }, []);


  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#59a200',
    gradientMid:  '#438e00',
    gradientEnd:  '#0c6c00',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '45f45b327810774eeb82e452d6995911',
    lat: '54.896870',
    lon: '23.892429',
    lang: 'lt',
    unit: 'metric', // values are (metric, standard, imperial)
  });
    return (
      <div>
<section className="flex gap-0 main z-99">
      
      <div
      id="sidebar"
        className={`bg-[hsl(83,35%,52%)] min-h-screen sidebar ${
          open && open1 && open2? "closed" : "open"
        } duration-500 text-gray-100 px-4`}
      > {open && open1 && (
          <div>
           <div className="pavadinimas" style={{ left: !open2 ? "45px" : "80px", color: !open2 ? "white" : "rgb(50 50 60)" }}><h1 className="pavadinimas" >TVARKIS</h1></div>
<div  className="animated-div duration-500" style={{ width: open ? "95%" : "0%" }}>
{!open2 && (
        <div>
          {<div className="sdbr">
            <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="lt"
        locationLabel="Kaunas"
        unitsLabels={{ temperature: 'C', windSpeed: 'm/s' }}
        showForecast={false}
      />

      <div className="daugiau">
      <img className= "placeholder" src={"https://picsum.photos/"+parentDivWidth + "/400"}></img>
          <img className= "placeholder" src={"https://picsum.photos/"+parentDivWidth + "/400"}></img>

      </div>
            
            
            </div>}
        </div>
      )}

      </div>
          </div>
        )}

      {!open &&(
        <div>
      <div className="pavadinimas"><h1 className="pavadinimas">Pridėti vietovę</h1></div>
        <div className="Form">
          <SimpleForm></SimpleForm>
          </div>
          
        </div>


      )}
     
      
     {!open1 &&(
           <><div className="pavadinimas"><h1 className="pavadinimas">Dovanos</h1></div>
           <><div className="points-balance">
                <p>Jūsų balansas: <span id="current-points">100</span> taškų</p>
              </div><div className="gift-section">
              <div class="row">
  
                <div class="column">
                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Gertuvė</h3>
                    <p>Kaina: 150 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Puodelis</h3>
                    <p>Kaina: 100 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>
                  
                </div>
                  
                <div class="column">
                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Kepurėlė</h3>
                    <p>Kaina: 200 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Pakabukas</h3>
                    <p>Kaina: 180 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>
                  
                </div>
                  

                <div class="column">
                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Maišelis</h3>
                    <p>Kaina: 75 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Marškinėliai</h3>
                    <p>Kaina: 450 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                </div>
                  

                </div>
                </div></></>
      )}

<div className='buttons'>


<div className="py-3 flex justify-end addbutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => {setOpen(!open); setOpen1(true); setOpen2(true)}}>
      <AddLocationAltIcon />
      </Fab>
    </Box>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">

        </div>

        <div className="py-3 flex justify-end giftbutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => {setOpen1(!open1); setOpen(true); setOpen2(true)}}>
      <CardGiftcardIcon />
      </Fab>
    </Box>
        </div>
        <div className="py-3 flex justify-end infobutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => {setOpen2(!open2); setOpen1(true); setOpen(true)}}>
      <InfoIcon />
      </Fab>
    </Box>
        </div>

</div>
        
      </div>

    

    
    </section>
    <div id="map" className="map">
      <div id="popup" className="ol-popup location">
      <a href="#" id="popup-closer" className="ol-popup-closer"></a>
      <div className="py-3 flex justify-end addbutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }} id="popup-adder">
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => setOpen(!open)}>
      <AddLocationAltIcon />
      </Fab>
    </Box>
        </div>
      <div id="popup-content">
        
      </div>
      </div>
      <Map />
        </div>
      </div>
    
  );
};

export default Home;