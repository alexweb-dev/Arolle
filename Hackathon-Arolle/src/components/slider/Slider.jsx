import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import matte_cover from "../../assets/image/matte_cover.png";
import super_blend from "../../assets/image/super_blend.png";
import true_match from "../../assets/image/true_match.png";
import "./slider.css";
import React, { useEffect } from "react";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="slider_block">
      <Carousel responsive={responsive}>
        <a
          className="foundation"
          href="https://www.loreal-paris.fr/maquillage/teint/fond-de-teint/fond-de-teint-infaillible-32h-matte-cover/OAP7040.html"
        >
          <img
            className="matte_cover_img"
            src={matte_cover}
            alt="matte_cover"
          />
          <div className="foundation_description">
            <p>L'Oreal Make Up Infaillible Foundation 24H Matte Cover</p>

            <p>13,90€</p>
          </div>
        </a>

        <a
          className="foundation"
          href="https://www.loreal-paris.fr/maquillage/teint/fond-de-teint/infaillible-32h-fond-de-teint-fluide/OAP6866.html"
        >
          <img className="foundation_img" src={super_blend} alt="super_blend" />
          <div className="foundation_description">
            <p>L'Oreal Make Up Infaillible Foundation 32H Fresh Wear</p>

            <p>12,95 €</p>
          </div>
        </a>

        <a
          className="foundation"
          href="https://www.loreal-paris.fr/maquillage/teint/fond-de-teint/fond-de-teint-accord-parfait/OAP3000.html"
        >
          <img className="foundation_img" src={true_match} alt="true_match" />
          <div className="foundation_description">
            <p>L'Oreal Paris True Match Foundation</p>

            <p>12,95 €</p>
          </div>
        </a>
      </Carousel>
    </div>
  );
}

export default Slider;
