import React, {useState} from "react";

const TrafficLigth = () => {
    const colors =["red", "yellow", "green"]
    const [lit , setLit] = useState("")

    const handleLit = (colors)=>{
        setLit(colors)

    }


    return (
        <>
        <div className="container">
            <div className="row col-12 justify-content-center">
            <div className="lamppost">

            </div>
            <div className="row col-12 justify-content-center">
            <div className="box">
            {colors.map((color)=>{
                return (
                    <div key={color} className={`ligth ${lit === color ? "active" : ""}` } style={{backgroundColor: color}} onClick={()=> handleLit(color)}></div>
                )
            })}
            </div>
            </div>

        </div>
        </div>
        </>
    )

}


export default TrafficLigth 