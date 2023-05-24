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
      <div className="daugiau" style={{ overflow: 'auto', maxHeight: '600px' }}>
  <img className="placeholder" src={"https://i.ibb.co/Fgx3gpK/reklama.png"+parentDivWidth } />
  <img className="placeholder" src={"https://i.ibb.co/Fgx3gpK/reklama.png"+parentDivWidth } />
  <h3 class="bold-heading">What will happen to the Earth in 100 years if humans continue to pollute nature?</h3>
  <h3>
  <h3 class="bold-text">25 years from now (2048):</h3> If people continue to pollute at the current rate, we can expect to see more extreme weather patterns, rising sea levels, and a decrease in biodiversity. Climate change will continue to have devastating effects on ecosystems and species, leading to potential mass extinctions.
  <h3 class="bold-text">50 years from now (2073):</h3> The effects of climate change will become more severe, with rising temperatures causing widespread droughts, wildfires, and crop failures. The world's oceans will continue to warm, leading to further coral bleaching and the collapse of fisheries. Human populations will increasingly face water and food shortages, displacement, and health risks due to air pollution and disease.
  <h3 class="bold-text">75 years from now (2098):</h3> If the current rate of pollution continues, many low-lying areas of the world will become uninhabitable due to rising sea levels, displacing millions of people. Food and water shortages will become widespread, leading to conflicts over resources. The world's oceans will be more acidic, causing significant damage to marine ecosystems, and increasing numbers of species will become extinct.
  <h3 class="bold-text">100 years from now (2123):</h3> The effects of pollution will be catastrophic if we continue at the current rate. The world's oceans will be largely devoid of life, and many species on land will have become extinct. Large areas of the planet will be uninhabitable due to extreme weather, food and water shortages, and disease. The human population will likely have declined significantly, and global society will have changed dramatically in order to adapt to the new reality.

<h3 class="bold-heading">Some additional details on what could happen if we don't take action to reduce pollution:</h3>
•	Increased frequency and severity of natural disasters such as hurricanes, tornadoes, and floods due to the warming of the planet and changes in precipitation patterns.
•	The loss of many key ecosystem services such as pollination, soil fertility, and water filtration, leading to further declines in agricultural productivity and food security.
•	The spread of infectious diseases due to warmer temperatures, increased air pollution, and changes in the distribution of disease-carrying organisms such as mosquitoes and ticks.
•	The displacement of millions of people due to the loss of habitable land, leading to mass migration and potential conflict over resources.
•	The increased risk of geopolitical instability due to competition over dwindling resources such as water, arable land, and energy.
•	The potential collapse of key economic sectors such as agriculture, fishing, and tourism, leading to widespread unemployment and economic instability.
Overall, the consequences of continued pollution are dire and will require significant action on a global scale to address. It is crucial that we take steps to reduce our emissions and transition to more sustainable and environmentally friendly practices to avoid the worst outcomes.

<h3 class="bold-heading">How can people contribute to earth conservation in practice?</h3>
There are many ways that individuals can contribute to conserving the Earth's natural resources and reducing pollution. Here are some practical tips that you can implement in your daily life:
1.	Reduce your energy consumption: Turn off lights and appliances when not in use, use energy-efficient light bulbs, and lower your thermostat a few degrees in the winter and raise it in the summer.
2.	Reduce your water usage: Fix any leaks in your home, take shorter showers, turn off the faucet while brushing your teeth, and water your lawn only when necessary.
3.	Reduce your waste: Recycle as much as possible, compost food scraps, and avoid buying single-use plastic products.
4.	Use eco-friendly transportation: Walk, bike, or take public transportation when possible, and carpool with others to reduce emissions.
5.	Use environmentally friendly products: Choose products that are made from sustainable materials, use natural ingredients, and have minimal packaging.
6.	Eat a plant-based diet: Reduce your consumption of meat and dairy, which are resource-intensive and contribute to greenhouse gas emissions.
7.	Support renewable energy: Install solar panels on your home or purchase renewable energy from your utility company.
8.	Support conservation efforts: Donate to organizations that protect the environment, participate in community cleanup events, and support policies that promote conservation.
9.	Reduce your carbon footprint: Offset your carbon emissions by supporting projects that reduce greenhouse gas emissions, such as reforestation and clean energy projects.
10.	Spread awareness: Educate others about the importance of conservation and encourage them to take action to protect the environment.
11.	Support local businesses: Choose to buy products from local businesses that prioritize sustainability and environmental responsibility.
12.	Plant trees: Trees absorb carbon dioxide and provide essential habitat for wildlife. Consider planting trees in your yard, neighbourhood, or local park.
13.	Use reusable products: Choose reusable products over disposable ones. This includes things like reusable water bottles, coffee cups, and shopping bags.
14.	Conserve resources: Turn off the faucet while washing dishes, fix any leaks in your home, and use a rain barrel to collect water for your garden.
15.	Support green initiatives: Support political leaders and organizations that prioritize environmental protection and sustainability. Vote for policies that promote conservation and sustainable development.
16.	Use natural cleaning products: Avoid using harsh chemicals in your home by using natural cleaning products made from ingredients like vinegar, baking soda, and lemon.
17.	Choose sustainable clothing: Look for clothing made from sustainable and organic materials or choose to shop second-hand.
18.	Reduce your paper usage: Opt for electronic bills, use digital documents instead of printing, and choose recycled paper products when necessary.
19.	Volunteer: Volunteer for local conservation organizations or participate in community events that promote sustainability and environmental responsibility.
20.	Practice sustainable tourism: When traveling, choose eco-friendly accommodations, support local businesses, and respect the local environment and culture.
By implementing these practical tips, individuals can play an important role in conserving the Earth's natural resources and reducing pollution. Every small action can make a difference in the effort to create a more sustainable future for us and future generations.

</h3></div>
            
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
                  <img src="https://i.ibb.co/hWcWkr4/gertuve.png" />
                    <h3>Gertuvė</h3>
                    <p>Kaina: 150 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div className="gift-item">
                    <img src="https://i.ibb.co/v1jPrDn/puodelis.png" />
                    <h3>Puodelis</h3>
                    <p>Kaina: 100 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>
                  
                </div>
                  
                <div class="column">
                  <div className="gift-item">
                    <img src="https://i.ibb.co/jTNBW5x/kepure.png" />
                    <h3>Kepurėlė</h3>
                    <p>Kaina: 200 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div class="column">
                  <div className="gift-item">
                    <img src="https://i.ibb.co/n7ZpSBK/maisas.png" />
                    <h3>Maišelis</h3>
                    <p>Kaina: 75 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>

                  <div className="gift-item">
                    <img src="https://picsum.photos/200" />
                    <h3>Pakabukas</h3>
                    <p>Kaina: 180 taškų</p>
                    <button className="redeem-button">Atsiimti</button>
                  </div>
                  
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
        <div className="py-3 flex justify-end infobutton">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ color: green[500] }} aria-label="add" onClick={() => setOpen2(!open2)}>
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