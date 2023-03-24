import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
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
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import "../Features/Style.css";
const SimpleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
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
      <Button type="submit">Submit</Button>
    </form>
    </div>

  );
}


const Home = () => {

  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);

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
        className={`bg-[#8faf5a] min-h-screen sidebar ${
          open && open1 ? "closed" : "open"
        } duration-500 text-gray-100 px-4`}
      >
       
        {open && open1 &&(
          <div>
           <div className="pavadinimas"><h1 className="pavadinimas">TvarkIS</h1></div>
<div className="animated-div duration-500" style={{ width: open ? "95%" : "0px" }}>
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
      <Typography paragraph>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur. Urna condimentum mattis pellentesque id nibh tortor id. Id venenatis a condimentum vitae sapien pellentesque habitant. Non arcu risus quis varius quam. Risus pretium quam vulputate dignissim suspendisse in. Eget aliquet nibh praesent tristique magna. Egestas purus viverra accumsan in nisl. Egestas congue quisque egestas diam in arcu cursus euismod. Cras adipiscing enim eu turpis egestas pretium.

Nisi quis eleifend quam adipiscing. Porta lorem mollis aliquam ut porttitor leo a diam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nisi vitae suscipit tellus mauris a. Ornare quam viverra orci sagittis eu. Dictumst quisque sagittis purus sit amet volutpat consequat. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Hendrerit dolor magna eget est lorem ipsum dolor. Platea dictumst quisque sagittis purus. Cursus risus at ultrices mi tempus imperdiet. Aliquet eget sit amet tellus cras. Amet purus gravida quis blandit turpis cursus in hac habitasse. Viverra accumsan in nisl nisi scelerisque eu. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Gravida quis blandit turpis cursus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed blandit libero volutpat sed. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.

Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Pellentesque elit eget gravida cum sociis natoque penatibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eget mi proin sed libero enim sed. Pharetra convallis posuere morbi leo urna molestie at. Sed augue lacus viverra vitae. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Suspendisse ultrices gravida dictum fusce ut. Suspendisse in est ante in nibh mauris cursus. Morbi tempus iaculis urna id volutpat lacus. Turpis egestas sed tempus urna et pharetra pharetra. Lectus sit amet est placerat in. At in tellus integer feugiat scelerisque varius morbi enim nunc. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Amet consectetur adipiscing elit duis tristique. Orci porta non pulvinar neque laoreet. Tincidunt eget nullam non nisi est sit. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Et ligula ullamcorper malesuada proin libero. Non enim praesent elementum facilisis.

Nunc vel risus commodo viverra. Vitae aliquet nec ullamcorper sit amet. Et malesuada fames ac turpis. Leo urna molestie at elementum. Interdum velit euismod in pellentesque. Egestas congue quisque egestas diam. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Sed sed risus pretium quam. Molestie at elementum eu facilisis sed odio morbi quis. A lacus vestibulum sed arcu non odio euismod.

Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Odio facilisis mauris sit amet massa vitae tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Sociis natoque penatibus et magnis. Imperdiet dui accumsan sit amet nulla. Lobortis feugiat vivamus at augue eget. Arcu cursus euismod quis viverra nibh cras pulvinar. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Etiam non quam lacus suspendisse faucibus. Egestas pretium aenean pharetra magna ac. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
          </Typography>
      </div>

      </div>
          </div>
        )}
      {!open &&(
        <div>
      <div className="pavadinimas"><h1 className="pavadinimas">Pridėti vietovę</h1></div>
        <div className="Form">
          {/* <SimpleForm></SimpleForm> */}
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

        <div className="py-3 flex justify-end addbutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => setOpen(!open)}>
      <AddLocationAltIcon />
      </Fab>
    </Box>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">

        </div>

        <div className="py-3 flex justify-end giftbutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => setOpen1(!open1)}>
      <CardGiftcardIcon />
      </Fab>
    </Box>
        </div>
      </div>

      
      <div className="tabbed">
      </div>

      
      


    

    </section>
    <div id="map" className="map">
      <div id="popup" className="ol-popup">
      <a href="#" id="popup-closer" className="ol-popup-closer"></a>
      <div id="popup-content"></div>
      </div>
      <Map />
        </div>
      </div>
    
  );
};

export default Home;