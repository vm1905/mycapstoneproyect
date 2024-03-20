import Customer1 from '../images/customer01.jpg';
import Customer2 from '../images/customer02.jpg';
import Customer3 from '../images/customer03.jpg';
import Customer4 from '../images/customer04.jpg';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';


function Testimonials() {
    return(
        <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonials">
          <div className="card">
            <div className="card-body">
              <img src={Customer1} alt="" />
              <h4>James</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">Your menu is  executed authentically. Do not change a thing!! You are spot on!</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer2} alt="" />
              <h4>Angela</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">Our friends were duly impressed and will no doubt be returning soon!</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer3} alt="" />
              <h4>Rose</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">I just wanted to let you know that I had one of the best dinners of my life last night…. at your restaurant!!</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer4} alt="" />
              <h4>Kim</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">The food, the service, the host, EVERYTHING was perfect! Keep up the good work !</q>
            </div>
          </div>
        </div>
      </section>
  
    );
}

export default Testimonials;