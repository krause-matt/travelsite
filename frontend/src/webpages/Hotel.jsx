import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faAnglesLeft,
  faAnglesRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Subscribe } from "../components/Subscribe";
import "./hotel.scss";
import { setMinutes } from "date-fns";

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1631015108968-ba3b87f89005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1631049307290-bb947b114627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export const Hotel = () => {
  const [imgNum, setImgNum] = useState(0);
  const [imgModal, setImgModal] = useState(false);

  const galleryClick = (index) => {
    setImgNum(index);
    setImgModal(true);
  };

  const modalSlider = (direction) => {
    if (direction === "L") {
      imgNum == 0 ? setImgNum(5) : setImgNum(imgNum - 1);
    } else {
      imgNum == 5 ? setImgNum(0) : setImgNum(imgNum + 1);
    }
  };

  return (
    <>
      <NavBar />
      <Header display="partial" />
      {imgModal && (
        <div className="image-modal">
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className="modal-slider"
            onClick={() => modalSlider("L")}
          />
          <img src={gallery[imgNum].img}></img>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="modal-slider"
            onClick={() => modalSlider("R")}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="modal-close"
            onClick={() => setImgModal(false)}
          />
        </div>
      )}
      <div className="hotel-main">
        <div className="hotel-header">
          <div className="hh-info">
            <h1 className="hh-title">Black Oak Suites</h1>
            <div className="hh-location">
              <FontAwesomeIcon icon={faGlobe} />
              <span className="hh-address">
                123 Black Oak Circle, Austin, TX
              </span>
            </div>
            <h4 className="hh-highlight">Located in the heart of downtown</h4>
            <h4 className="hh-offer">Book today and get 2X reward points!</h4>
          </div>
          <button className="book-btn" id="top-btn">
            Check vacancy
          </button>
        </div>
        <div className="hotel-gallery">
          <div className="hg-wrapper">
            {gallery.map((item, index) => {
              return <img src={item.img} onClick={() => galleryClick(index)} />;
            })}
          </div>
        </div>
        <div className="hotel-details">
          <div className="hd-container">
            <h1 className="hd-title">Picture perfect</h1>
            <p className="hd-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              pharetra eu metus in mattis. Maecenas tristique feugiat sapien eu
              feugiat. Proin tincidunt odio at augue ornare, at semper eros
              luctus. Integer eleifend metus id suscipit auctor. Proin
              scelerisque imperdiet est, vel lacinia massa vulputate vitae.
              Donec sagittis diam mauris, nec vulputate lacus rutrum et. Sed
              tristique velit vitae eros vehicula commodo. Suspendisse potenti.
              Donec blandit vitae nisl tristique porttitor. Donec vitae dapibus
              ante, ut commodo nunc. Curabitur pulvinar, erat nec pulvinar
              mollis, orci risus hendrerit dui, vel vehicula urna tortor a odio.
              Etiam non mauris ac nisi porttitor ornare.{" "}
            </p>
          </div>
          <div className="hotel-stay">
            <h1 className="hs-length">Special deal 5-night stay</h1>
            <span className="hs-rating">
              Located near parks, restaurants, and museums with an average user
              rating of 8.5
            </span>
            <div className="hs-total">
              <span className="hs-price">$600</span>
              <span className="hs-nights">{`(5 nights)`}</span>
            </div>
            <button className="book-btn">Check vacancy</button>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};
