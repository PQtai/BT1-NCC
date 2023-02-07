import React from "react";
import "./Content.scss";
import logo from "../../assets/img/logoNCC.png";
import css from "../../assets/img/css-icon.png";
import html from "../../assets/img/html-icon.png";
import url from "../../assets/img/url-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const datas = [
  {
    title: "Lorem ipsum dolor sit amet",
    img: css,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    img: html,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    img: url,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

const Content = ({ setIsActive }) => {
  const handleAddClassActive = () => {
    setIsActive(true);
  };
  return (
    <div className="content">
      <button onClick={handleAddClassActive} className="btn_open">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="logo">
        <img className="logo__img" src={logo} alt="logo-ncc" />
      </div>
      <div className="group wrapper__content">
        <div className="group1">
          <h5 className="group1__title">Lorem ipsum dolor sit asmet?</h5>
          <p className="group1__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
      </div>
      <div className="item__content wrapper__content dFlex">
        <div className="row">
          {datas.map((data, index) => {
            return (
              <div key={index} className="group__item">
                <h5>{data.title}</h5>
                <img src={data.img} alt="img-icon" />
                {data.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
