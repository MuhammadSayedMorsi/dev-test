import React from "react";
import LogoIcon from "../images/footer-logo.png";
import LinkdinLogo from "../images/linkdin-logo.svg";
import Xero from "../images/xero.svg";
export default function Footer() {
  return (
    <div className="bg-primary md:h-footerHeight pl-20 pr-24">
      <div className="container flex flex-col m-auto sm:flex-row sm:justify-between">
        <div className="pt-146">
          <h2 className="text-4xl	sm:text-6xl text-coral">Make an enquiry.</h2>
          <ul className="flex flex-col sm:flex-row mt-73">
            <li className="sm:mr-64">
              <a className="flex justify-between items-center border-b pb-1.5 border-coral w-192 cursor-pointer">
                <span className="text-coral">Online enquiry</span>
                <span>
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z" fill="#FFA998" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a className="flex justify-between items-center border-b pb-1.5 border-coral w-192 cursor-pointer">
                <span className="text-coral">Call 8000 0000</span>
                <span>
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z" fill="#FFA998" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-190">
          <h3 className="text-sm text-coral mb-37">Contact Details</h3>
          <p className="text-coral text-sm">
            223 Grote Street,
            <br />
            Adelaide SA 5000
            <br />
            info@equipeadvisory.com.au
            <br />
            Tel 8000 0000
          </p>
          <a className="block bg-coral mt-30">
            <img src={LinkdinLogo} alt="Linkdin logo" />
          </a>
        </div>
        <div className="pt-190">
          <h3 className="text-sm text-coral mb-37">Accreditation</h3>
          <div className="flex">
            <span>
              <img src={Xero} alt="Xero Icon" />
            </span>
            <span className="block w-129 h-75 ml-28">
              <img src={LogoIcon} alt="Logo Icon" />
            </span>
          </div>
        </div>

        <div className="pt-190">
          <a className="block text-sm text-coral mb-37">
            Site Map
          </a>
          <p className="text-sm text-coral">
            ©Equipe Advisory 2021
            <br />
            Website by Simple
          </p>
        </div>
      </div>
    </div>
  )
}
