import React from "react";
import Menu from "../images/Menu.svg";
export default function () {
  return (
    <div className="ml-25 fixed z-50">
      <h6 className="text-primary text-sm mt-111 mb-73">Menu</h6>
      <span className="cursor-pointer">
        <img src={Menu} alt="Menu" />
      </span>
    </div>
  )
}