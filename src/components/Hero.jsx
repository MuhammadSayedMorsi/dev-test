import React from "react"
import Girl from "../images/girl.png"

export default function Header() {
  return (
    <div className="h-screen w-screen bg-secoundary -mt-8 relative">
      <div className="borderLeft">
        <div className="addborder">
          <div className="container flex m-auto">
            <div className="w-3/5">
              <h2 className="text-sm text-primary mt-136 mb-21">Great Culture</h2>
              <p className="text-48 2xl:text-6xl text-primary">
                Putting our
                <br />
                people first.
              </p>
              <p className="text-sm text-primary mt-90">Équipe is a French word which means team. <br /> In English “equip” is to provide someone or <br /> something with the necessary resources and <br /> tools to achieve their goals.</p>
            </div>
            <div className="w-6/5 -ml-2">
              <img className="w-full" src={Girl} alt="hero img" />
            </div>
          </div>

          </div>
      </div>
    </div>
  )
}
