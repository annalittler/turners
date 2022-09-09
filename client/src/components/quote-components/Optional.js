import "./style/Optional.css"
import Icon from "./assests/chevron-down-grey.png"
import ReuseableCard from "../reusable-card/ReuseableCard"
import { useState } from "react"

export default function Optional({ breakdownCost, glassCost, rentalCost }) {
    const [glassExcess, setGlassExcess] = useState(0)
    const [breakdownService, setBreakdownService] = useState(0)
    const [rentalVehicle, setRentalVehicle] = useState(0)

    const font = { fontFamily: `Inter` }

    const componentStyle = {
        border: `1px solid #0076BE`,
        shadow: `none`,
        padding: `0`,
        margin: `0`,
    }

    const glassPrice = (e) => {
        setGlassExcess(e.target.value)
    }

    const breakdownPrice = (e) => {
        setBreakdownService(e.target.value)
    }

    const rentalPrice = (e) => {
        setRentalVehicle(e.target.value)
    }

    const btnOutline = `1px solid #0076BE`

    return (
        <>
            <ReuseableCard>
                <div style={font} className="optional-main">
                    <h2>Optional</h2>
                    <h4>Choose optional extras to upgrade your cover</h4>
                    <ReuseableCard border={btnOutline}>
                        <div className="optional-btn-main">
                            <div className="optional-btn-left">
                                <p>Turners standard breakdown service</p>
                                <h4>$2.67 per month</h4>
                                <button>
                                    Learn more &nbsp;
                                    <img
                                        src={Icon}
                                        fill={`black`}
                                        width={15}
                                        alt="arrow icon"
                                    />
                                </button>
                            </div>
                            <div className="optional-btn-right">
                                <ReuseableCard {...componentStyle}>
                                    <button
                                        className={
                                            breakdownService === "0"
                                                ? "reusable-selected-btn"
                                                : "reusable-add-btn"
                                        }
                                        onClick={breakdownCost}
                                        onClickCapture={breakdownPrice}
                                        value={
                                            breakdownService === "0"
                                                ? "2.67"
                                                : "0"
                                        }
                                        id="breakdown"
                                    >
                                        {breakdownService === "0"
                                            ? "Remove"
                                            : "+ Add"}
                                    </button>
                                </ReuseableCard>
                            </div>
                        </div>
                    </ReuseableCard>
                    <ReuseableCard border={btnOutline}>
                        <div className="optional-btn-main">
                            <div className="optional-btn-left">
                                <p>Turners glass excess</p>
                                <h4>$5 per month</h4>
                                <button>
                                    Learn more &nbsp;
                                    <img
                                        src={Icon}
                                        fill={`black`}
                                        width={15}
                                        alt="arrow icon"
                                    />
                                </button>
                            </div>
                            <div className="optional-btn-right">
                                <ReuseableCard {...componentStyle}>
                                    <button
                                        className={
                                            glassExcess === "0"
                                                ? "reusable-selected-btn"
                                                : "reusable-add-btn"
                                        }
                                        onClick={glassCost}
                                        onClickCapture={glassPrice}
                                        value={glassExcess === "0" ? "5" : "0"}
                                        id="glass"
                                    >
                                        {glassExcess === "0"
                                            ? "Remove"
                                            : "+ Add"}
                                    </button>
                                </ReuseableCard>
                            </div>
                        </div>
                    </ReuseableCard>
                    <ReuseableCard border={btnOutline}>
                        <div className="optional-btn-main">
                            <div className="optional-btn-left">
                                <p>Turners rental vehicle option</p>
                                <h4>$5 per month</h4>
                                <button>
                                    Learn more &nbsp;
                                    <img
                                        src={Icon}
                                        fill={`black`}
                                        width={15}
                                        alt="arrow icon"
                                    />
                                </button>
                            </div>
                            <div className="optional-btn-right">
                                <ReuseableCard {...componentStyle}>
                                    <button
                                        className={
                                            rentalVehicle === "0"
                                                ? "reusable-selected-btn"
                                                : "reusable-add-btn"
                                        }
                                        onClick={rentalCost}
                                        onClickCapture={rentalPrice}
                                        value={
                                            rentalVehicle === "0" ? "5" : "0"
                                        }
                                        id="rental"
                                    >
                                        {rentalVehicle === "0"
                                            ? "Remove"
                                            : "+ Add"}
                                    </button>
                                </ReuseableCard>
                            </div>
                        </div>
                    </ReuseableCard>
                </div>
            </ReuseableCard>
        </>
    )
}
