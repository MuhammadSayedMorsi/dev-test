import React from "react"
import AttachCv from "../images/attach.svg"
import Submit from "../images/submit.svg"
export default function FillInfo() {
  return (
    <div className="pt-80 pb-80 bg-coral">
      <div className="container m-auto flex justify-between">
        <div className="">
          <h5 className="text-sm text-primary">Start your next chapter</h5>
          <p className="text-primary text-48 2xl:text-6xl">If this is the <br />
            right time for you,<br />
            join our team.</p>
        </div>
        <form className="pr-24">
          <h6 className="text-sm text-primary pb-68">Career Enquiry</h6>
          <ul className="flex">
            <li className="flex flex-col w-260 mr-30">
              <label htmlFor="Full name" className="text-sm text-primary pb-12 pt-12">Full Name</label>
              <input type="text" placeholder="Enter Full Name" className="h-48 block rounded-full	outline-none pl-27"/>
            </li>
            <li className="flex flex-col w-260">
              <label htmlFor="Full name" className="text-sm text-primary pb-12 pt-12">Email Adress</label>
              <input type="text" placeholder="Enter Email" className="h-48 block rounded-full	outline-none pl-27"/>
            </li>
          </ul>

          <ul className="flex">
            <li className="flex flex-col w-260 mr-30">
              <label htmlFor="Full name" className="text-sm text-primary pt-12 pb-12">Contract Number</label>
              <input type="text" placeholder="Contract Number" className="h-48 block rounded-full	outline-none pl-27"/>
            </li>
            <li className="flex flex-col w-260">
              <label htmlFor="Full name" className="text-sm text-primary pb-12 pt-12">Salary Expectation</label>
              <select className="h-48 block rounded-full outline-none pl-27 pr-27">
                <option value="please select">please select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </li>
          </ul>

          <ul className="flex">
            <li className="flex flex-col w-260 mr-30 pb-12 pt-12">
              <label htmlFor="Full name" className="text-sm text-primary pt-12 pb-12">Attach Cv</label>
              <button className="h-48 w-260 bg-white rounded-full	outline-none flex justify-between items-center pl-27 pr-27">
                Submit
                <span>
                  <img src={AttachCv} alt="attachcv icon" />
                </span>
              </button>

            </li>
            <li className="flex flex-col w-260 mt-40 pb-12 pt-12">
              <button className="h-48 w-260 bg-white rounded-full	outline-none flex justify-between items-center pl-27 pr-27">
                Submit
                <span>
                  <img src={Submit} alt="" />
                </span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}