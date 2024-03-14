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
              <q className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer2} alt="" />
              <h4>Angela</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer3} alt="" />
              <h4>Rose</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Customer4} alt="" />
              <h4>Kim</h4>
              <span className="stars"><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /><FaStar size={15} /></span>
              <q className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
        </div>
      </section>
  
    );
}

export default Testimonials;