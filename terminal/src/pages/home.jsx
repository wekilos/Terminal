import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../pages/home.css";


const Home = () => {
   const navigate = useNavigate()
  return (
    <div className="esasyDiv">
       <div className="childDiv">
          <h2 className='text'>
            Türkmenistanyň taryhy-medeni  <br />
             ýadygärliklerine edýän <br /> haýyr-sahawatyňyz <br />
            üçin sag boluň!
          </h2>
          <div>
          <button onClick={()=>navigate("/money")} className='button'>Töleg</button>
          </div>
       </div>
    </div>
  );
};
export default Home;

