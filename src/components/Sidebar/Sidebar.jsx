import React, { useEffect, useRef } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ isActive, setIsActive }) => {
  const sidebarElement = useRef();
  useEffect(() => {
    if (isActive) {
      sidebarElement.current.classList.add("active");
    }
  }, [isActive]);
  const handleRemoveActive = () => {
    sidebarElement.current.classList.remove("active");
    setIsActive(false);
  };
  return (
    <div ref={sidebarElement} className={"Sidebar"}>
      <ul className="list__page">
        <li className="list__item">Home</li>
        <li className="list__item">Services</li>
        <li className="list__item active">News</li>
        <li className="list__item">Blog</li>
        <li className="list__item">Contact</li>
      </ul>
      <button onClick={handleRemoveActive} className="btn__close">
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
};

export default Sidebar;
