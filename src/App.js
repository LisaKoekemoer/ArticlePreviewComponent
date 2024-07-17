import './App.css';
import { useState } from 'react';
import drawers from './images/drawers.jpg';
import Michelle from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';


function App() {
  const [isShared, setIsShared] = useState(false)

  return (
    <>
        <div className='article-component'>
          <div className='articleImg'>
            <img src={drawers} alt="" />
          </div>
          <div className='article-info'>
            <h2>Shift the overall look and feel by adding these wonderful 
              touches to furniture in your home</h2>
            <p>Ever been in a room and felt like something was missing? 
              Perhaps it felt slightly bare and uninviting. 
              I’ve got some simple tips to help you make any room 
              feel complete.</p>
          
          <div className='author-details'>
            <img className='michelle' src={Michelle} alt="" />
            <div className='author'>
              <h4>Michelle Appleton</h4>
              <p>28 Jun 2020</p>
            </div>
            <button onClick={() => setIsShared(true)} type='submit'>
              <img className='share' src={share} alt="" />
            </button>
          </div>
          </div>
        </div>

      { isShared && <ShareComponent setIsShared={setIsShared} /> }

    </>
  );
}

const ShareComponent = (setIsShared) => {
  return (
    <div className='share-component'>
      <h2>SHARE</h2>
      <div className='share-btn'>
        <img className='facebook' src={facebook} alt="" />
        <img className='twitter' src={twitter} alt="" />
        <img className='pinterest' src={pinterest} alt="" />
      </div>
      
    </div>
  )
}

export default App;
