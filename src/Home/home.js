import React, { useState } from "react";
import "./style.css";
import dinning from './images/dinning.jpeg';
import swimmingpool from './images/swimmingpool.jpeg'
import sleepingroom from './images/sleepingroom.jpg'
import confrenceroom from './images/confrenceroom.jpeg'
import aboffers from './images/aboffers.png'
import aboffer2 from './images/aboffer2.png'
import video from './images/video.mp4'

const Homepage = ()=>{
    const [isVisible] = useState(false);
    return(
        <div > 
        <img src="https://res.cloudinary.com/dgthad4h3/image/upload/v1688058644/cld-sample-4.jpg" className="img"></img>
      <div className="ababuro">
        <h1 className="abhotel">GD HOTEL</h1>
        <p id="beyond">Beyond the bustle of Kenya’s most cosmopolitan metropolis, experience a haven of elegance and calm nestled among lush gardens along Nairobi Myale highway.  merges business and leisure, art and gastronomy and best style and service.</p>
        <img src="https://res.cloudinary.com/dgthad4h3/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1688058618/samples/food/fish-vegetables.jpg" className="circle"></img>

      </div>

      <div>
        <div className="dinning">
        <img src={dinning} alt="dinning.jpeg" className="fre"/>
        <div>
        <h1>DINNING</h1>
        <h3>CAFE' MAGHREB RESTAURANT</h3>
        <p> The all-day dining restaurant that offers an internationally-themed buffet breakfast & lunch menu, a table d’hote dinner menu and 24-hour brasserie service. The rich, tempting aromas of the Patisserie will entice you to relish an exquisite selection of traditional French pastries and gateaux, American…</p>
        </div>
        </div>

        <div className="swimming">
        
        <div>
        <h1>SWIMMING POOL</h1>
        <h3>CAFE' MAGHREB RESTAURANT</h3>
        <p> The all-day dining restaurant that offers an internationally-themed buffet breakfast & lunch menu, a table d’hote dinner menu and 24-hour brasserie service. The rich, tempting aromas of the Patisserie will entice you to relish an exquisite selection of traditional French pastries and gateaux, American…</p>
        </div>
        <img src={swimmingpool} alt="swimmingpool.jpeg" className="fre"/>
        </div>

        <div className="sleeping">
        <img src={sleepingroom} alt="sleepingroom.jpg" className="free"/>
        <div>
        <h1>SLEEPING ROOM</h1>
        <h3>CAFE' MAGHREB RESTAURANT</h3>
        <p> The all-day dining restaurant that offers an internationally-themed buffet breakfast & lunch menu, a table d’hote dinner menu and 24-hour brasserie service. The rich, tempting aromas of the Patisserie will entice you to relish an exquisite selection of traditional French pastries and gateaux, American…</p>
        </div>
        </div>

        <div className="conf">
          <div>
        <h1>CONFRENCE ROOM</h1>
        <h3>CAFE' MAGHREB RESTAURANT</h3>
        <p> The all-day dining restaurant that offers an internationally-themed buffet breakfast & lunch menu, a table d’hote dinner menu and 24-hour brasserie service. The rich, tempting aromas of the Patisserie will entice you to relish an exquisite selection of traditional French pastries and gateaux, American…</p>
        </div>
        <img src={confrenceroom} alt="confrenceroom.jpeg" className="fre"/>

        </div>

        
      </div>

      <div className="vid">
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      </div>


       

        <h1> GD FEATURED OFFERS</h1>
        <h3>Our Best Ababuro Packages</h3>
       <div className="offers">
        <div>
          <img src={aboffers} alt="aboffers.png"></img>
        </div>

        <div>
          <img src={aboffer2} alt="aboffer2.png"></img>
        </div>
        
       </div>

        </div>


        
   
   
        
        );
    };
    export default Homepage