import React from 'react';

import logo from './assets/logo.svg';

import divider from './assets/divider.svg';

import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg';
import pinterest from './assets/pinterest.svg';



import anniversary from './assets/anniversary.png';
import birthday from './assets/birthday.png';
import christmas from './assets/christmas.png';
import valentine from './assets/valentine.png';

import principalCard from './assets/principal-card.png';

import './app.css';

function App() {
  return (
    <div className="app">
      <header>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>

        <div className="button">
          <button>
              GIFT FINDER
          </button>
        </div>
      </header>

      <main className="main">
        <section className="first">
          <div className="first-left">
            <div className="content-first-left">
            <h1>
              Find a gift for your wife or girlfriend
            </h1>

            <p>
              Struggling to find a gift for your wife or girlfriend?
              No problem!
            </p>
              
              <button>
                FIND GIFT NOW
              </button>
            </div>
          </div>


          <div className="first-right"></div>
        </section>

        <section className="second">
          <div className="second-left"></div>


          <div className="second-right">
            <div className="content-second-right">
              <h3>
                How we work
              </h3>

              <p>
                We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.
              </p>

              <button>
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        <section className="third">
          <h3>Gifts for all Occasions</h3>
          <p>"Try our web app to find the best gifts for all occasions"</p>

          <ul>
            <li>
              <a href="#">
                <img src={birthday} alt="" />
                <h4>Birthday</h4>
                <span>See More {">"} </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={anniversary} alt="" />
                <h4>Anniversary</h4>
                <span>See More {">"} </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={valentine} alt="" />
                <h4>Valentine's Day</h4>
                <span>See More {">"} </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={christmas} alt="" />
                <h4>Christmas</h4>
                <span>See More {">"} </span>
              </a>
            </li>
          </ul>
        </section>

        <div className="fourth">
          <div className="fourth-left">
            <strong>Ready to get started?</strong>
            <p>Sign up or contact us</p>
          </div>

          <div className="fourth-right">
            <button className='btnn btn-left'>FIND GIFT NOW</button>
            <button className='btnn btn-right'>HOW IT WORKS</button>
          </div>
        </div>

        <div className="fifth">
          <div className="texts">
            <h3>Our Best Blogs Ever</h3>
            <p>"Try our blog to find the best tips and tricks to select yout gift"</p>
          </div>
          <div className="principal-card">
            <img src={principalCard} alt="" />
            <div className="pc-content">
              <span>Mr.John Doe</span>
              <h2>The best way to wish <br></br> your wife</h2>
              <p>Read More</p>
            </div>
          </div>

          <div className="subcards">
            <div className="card">
              <strong>Database to find the gifts for your girlfriend</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindunt ut labore et dolore...</p>
              <span>Read More</span>
            </div>
            <div className="card">
              <strong>How Artificial Intelligence read your mind to find the best gift</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindunt ut labore et dolore...</p>
              <span>Read More</span>
            </div>
          </div>
        </div>

        <footer>
          <ul className="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#"><img src={logo} alt="" /></a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li> 
          </ul>

          <div className="divider">
            <img src={divider} alt=""/>
          </div>

          <ul className="social">
            <li><a href="#"><img src={facebook} alt=""/></a></li>
            <li><a href="#"><img src={twitter} alt=""/></a></li>
            <li><a href="#"><img src={instagram} alt=""/></a></li>
            <li><a href="#"><img src={youtube} alt=""/></a></li>
            <li><a href="#"><img src={pinterest} alt=""/></a></li>
          </ul>

          <div className="copy">
            &copy; 2010 - 2020      <button>Privacy - Terms</button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
