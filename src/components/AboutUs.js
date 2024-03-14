import Image1 from '../images/chefB.jpg';
import Image2 from '../images/chefs.jpg';
import './AboutUs.css';

function AboutUs() {
    return(
        <section className="about" id="about">
            <h3>about us</h3>
            <div className="wrapper">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis vel reiciendis eligendi error molestias adipisci, praesentium odio voluptate illo expedita numquam fugiat pariatur sed voluptas iste laborum enim natus!
                    </p><br/>
                    <p>
                        Vitae deleniti provident id quod placeat mollitia vel qui deserunt vero, porro numquam suscipit non omnis repellendus, ratione adipisci odio dicta earum, error animi neque nam nesciunt sit?
                    </p><br/>
                    <p>
                        Officiis, autem! Soluta fuga iste veniam repellat. Enim odio ab mollitia earum exercitationem unde sint quod ratione possimus consequatur! Vero rem, eveniet voluptates amet doloremque temporibus quos alias. Aperiam fugit qui adipisci!
                    </p>
                </div>
                <div className="image-stack">
                    <div className="item-top">
                        <img src={Image1} alt="Chef working" />
                    </div>
                    <div className="item-bottom">
                        <img src={Image2} alt="Chefs chatting in the kitchen" />
                    </div>
                </div>
            </div>
        </section>
      );
}

export default AboutUs;