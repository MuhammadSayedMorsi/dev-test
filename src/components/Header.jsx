import React from "react"
import Arrowdown from "../images/arrowdown.svg"
import HeroImg from "../images/heroimg.png"
import Logo from "../images/Logo.svg"
import BurgerMenu from "./BurgerMenu"
export default function Header() {
  return (
    <div className="h-screen w-screen bg-secoundary">
      <div className="container flex m-auto">
        <div className="w-3/5 h-full mt-106">
          <h2 className="mb-130">
            <img src={Logo} alt="" />
          </h2>
          <p className="text-48 2xl:text-6xl text-primary">
            Discover
            <br />
            our culture
          </p>
          <div className="mt-200 ml-80 2xl:ml-25">
            <p className="text-sm text-primary">Explore</p>
            <span className="block mt-37 cursor-pointer">
              <img src={Arrowdown} alt="" />
            </span>
          </div>
        </div>
        <div className="w-6/5 -ml-2">
          <img className="" src={HeroImg} alt="hero img" />
        </div>
        <div className="w-1/5">
          <BurgerMenu />
        </div>
      </div>
    </div>
  )
}