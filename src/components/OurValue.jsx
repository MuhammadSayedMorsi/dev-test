import React from "react"
import ValueIcon from "../images/valueicon.svg"

export default function OurValue() {
  return (
    <div className="h-screen w-screen bg-secoundary relative pt-167 pb-217">
      <div className="flex justify-between items-center m-auto pl-22 pr-22">
        <div className="">
          <img className="" src={ValueIcon} alt="Value Icon" />
        </div>

        <div className="">
          <h2 className="text-sm text-primary">Our Values</h2>
          <p className="text-48 2xl:text-6xl text-primary">
            The values that guide <br /> our every action.
          </p>
          <div className="mt-111">
            <ul className="flex justify-between">
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-3"> <span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-3"><span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 text-sm text-primary"><span className="pr-30">1</span> Family</li>
            </ul>
            <ul className="flex justify-between">
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
            </ul>
            <ul className="flex justify-between">
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 mr-30 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
              <li className="border-b border-primary w-186 text-sm text-primary pb-12 pt-7"><span className="pr-30">1</span> Family</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
