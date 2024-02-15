import GreekSalad from './img/greek salad.jpg';
import Bruschetta from './img/bruschetta.jpg';
import Dessert from './img/dessert.jpg';
import Customer1 from './img/customer01.jpg';
import Customer2 from './img/customer02.jpg';
import Customer3 from './img/customer03.jpg';
import Customer4 from './img/customer04.jpg';
import ChefB from './img/chefB.jpg';
import Chefs from './img/chefs.jpg';

function Main() {
  return (
    <main>
      {/* Specials */}
      <section>
          <div class="specials-header">
            <h3>This week's specials</h3>
            <a href="#" class="button">online menu</a>
          </div>
          <div class="feature-dishes">
            <div class="card specials">
              <img src={GreekSalad} alt="" />
              <div class="card-body">
                <div class="card-title">
                  <h4>Greek Salad</h4>
                  <span class="dish-price">$12.99</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!</p>
                <div class="card-link">
                  <a href="">Order for delivery <ion-icon name="bicycle-outline"></ion-icon></a>
                </div>
              </div>
            </div>
            <div class="card specials">
              <img src={Bruschetta} alt="" />
              <div class="card-body">
                <div class="card-title">
                  <h4>Bruschetta</h4>
                  <span class="dish-price">$5.00</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt
                  sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!</p>
                <div class="card-link">
                  <a href="">Order for delivery <ion-icon name="bicycle-outline"></ion-icon></a>
                </div>
              </div>
            </div>
            <div class="card specials">
              <img src={Dessert} alt="" />
              <div class="card-body">
                <div class="card-title">
                  <h4>Lemon Dessert</h4>
                  <span class="dish-price">$5.00</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt
                  sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!</p>
                <div class="card-link">
                  <a href="">Order for delivery <ion-icon name="bicycle-outline"></ion-icon></a>
                </div>
              </div>
            </div>
          </div>
      </section>
      
      {/* Testimonials */}
      <section class="testimonials-section">
        <h3>Testimonials</h3>
        <div class="testimonials">
          <div class="card">
            <div class="card-body">
              <img src={Customer1} alt="" />
              <h4>James</h4>
              <h4 class="stars">&#x02605;&#x02605;&#x02605;&#x02605;</h4>
              <q class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <img src={Customer2} alt="" />
              <h4>Angela</h4>
              <h4 class="stars">&#x02605;&#x02605;&#x02605;&#x02605;</h4>
              <q class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <img src={Customer3} alt="" />
              <h4>Rose</h4>
              <h4 class="stars">&#x02605;&#x02605;&#x02605;&#x02605;</h4>
              <q class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <img src={Customer4} alt="" />
              <h4>Kim</h4>
            <h4 class="stars">&#x02605;&#x02605;&#x02605;&#x02605;</h4>
              <q class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo.</q>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section class="about">
        <h3>about us</h3>
        <div class="wrapper">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis vel reiciendis eligendi error molestias adipisci, praesentium odio voluptate illo expedita numquam fugiat pariatur sed voluptas iste laborum enim natus!
            </p><br />
            <p>
              Vitae deleniti provident id quod placeat mollitia vel qui deserunt vero, porro numquam suscipit non omnis repellendus, ratione adipisci odio dicta earum, error animi neque nam nesciunt sit?
            </p><br />
            <p>
              Officiis, autem! Soluta fuga iste veniam repellat. Enim odio ab mollitia earum exercitationem unde sint quod ratione possimus consequatur! Vero rem, eveniet voluptates amet doloremque temporibus quos alias. Aperiam fugit qui adipisci!
            </p>
          </div>
          <div class="image-stack">
            <div class="item-top">
              <img src={ChefB} alt="" />
            </div>
            <div class="item-bottom">
              <img src={Chefs} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Main;