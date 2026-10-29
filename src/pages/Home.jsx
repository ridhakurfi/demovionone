import '../styles/home.css'
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaTruckMonster,
  FaAward,
  FaWhatsapp,
} from "react-icons/fa";

const equipments = [
  {
    name: "Excavator CAT 320",
    price: "Rp 3.500.000 / day",
    image: "https://res.cloudinary.com/ducjx48tv/image/upload/v1783578927/demovion1/escavator_qjjkcf.jpg",
  },
  {
    name: "Bulldozer D85",
    price: "Rp 5.000.000 / day",
    image: "https://res.cloudinary.com/ducjx48tv/image/upload/v1783578927/demovion1/bulldozer_j5decl.jpg",
  },
  {
    name: "Wheel Loader",
    price: "Rp 4.100.000 / day",
    image: "https://res.cloudinary.com/ducjx48tv/image/upload/v1783578928/demovion1/wheel_imkdjd.jpg",
  },
  {
    name: "Motor Grader",
    price: "Rp 4.800.000 / day",
    image: "https://res.cloudinary.com/ducjx48tv/image/upload/v1783578927/demovion1/motorgrader_xatavn.jpg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + equipments.length) % equipments.length);
  };

  const next = () => {
    setCurrent((current + 1) % equipments.length);
  };

  return (
    <div className="home">

      <section className="hero">

        <div className="mainImage">

          <img
            src={equipments[current].image}
            alt={equipments[current].name}
          />

          <div className="overlay">
            <h2>{equipments[current].name}</h2>
            <p>{equipments[current].price}</p>
          </div>

          <button className="arrow left" onClick={prev}>
            <FaArrowLeft />
          </button>

          <button className="arrow right" onClick={next}>
            <FaArrowRight />
          </button>

        </div>

        <div className="thumbnails">
          {equipments.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt=""
              onClick={() => setCurrent(index)}
              className={current === index ? "active" : ""}
            />
          ))}
        </div>

      </section>

      <section className="achievement">

        <div className="card">
          <FaUsers />
          <h3>30+</h3>
          <p>Business Partners</p>
        </div>

        <div className="card">
          <FaTruckMonster />
          <h3>120+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="card">
          <FaAward />
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

      </section>

      <section className="testimonial">

        <h2>What Clients Say</h2>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>
            "Equipment was delivered on time and in excellent condition."
          </p>
          <span>- PT Nusantara Karya</span>
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>
            "Professional service with competitive rental pricing."
          </p>
          <span>- CV Bumi Persada</span>
        </div>

      </section>

      <section className="waSection">

        <a
          href="https://wa.me/6281234567890"
          className="waButton"
        >
          <FaWhatsapp />
          Contact via WhatsApp
        </a>

      </section>

      <footer>

        <h3>Chakra Tractors</h3>

        <p>
          Heavy Equipment Rental for Mining, Construction &
          Infrastructure Projects.
        </p>

        <small>
          © 2026 Chakra Tractors
        </small>

      </footer>

    </div>
  );
}