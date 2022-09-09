import "./style/QuoteSlider.css"
import ReuseableCard from "../reusable-card/ReuseableCard"
import { useState } from "react"

export default function QuoteSlider({ sliderAmount }) {
    const [sliderValue, setSliderValue] = useState(1000)
    const [sliderColor, setSliderColor] = useState("")

    const font = { fontFamily: `Inter` }

    const slider = (e) => {
        setSliderValue(e.target.value)
    }

    window.addEventListener("mousemove", function () {
        let x = sliderValue / 1000
        let color = `linear-gradient(90deg, #0076be ${x}%, white ${x}%)`
        setSliderColor(color)
    })

    const componentStyle = {
        shadow: `none`,
        bgColor: `#d9d9d9`,
        display: `flex`,
        width: `100%`,
        padding: `0rem 1rem 2rem 1rem`,
    }

    return (
        <>
            <ReuseableCard>
                <div style={font} className="quote-slider-container">
                    <h1>How much do you want to insure your car for?</h1>
                    <p>
                        Adjust the amount you would like to insure your car for.
                        The value should incude any accessories and
                        modifications.
                    </p>
                    <div className="quote-slider-input">
                        <h3 style={font}>$</h3>
                        <input
                            type="number"
                            value={sliderValue}
                            onChange={slider}
                            onChangeCapture={sliderAmount}
                        ></input>
                    </div>
                    <div className="quote-slider-master">
                        <ReuseableCard {...componentStyle}>
                            <div style={font} className="slider-left">
                                Min
                            </div>
                            <div className="quote-slider">
                                <input
                                    type="range"
                                    className="quote-slider-range"
                                    min="1000"
                                    max="100000"
                                    value={sliderValue}
                                    id="myRange"
                                    onChange={slider}
                                    style={{ background: sliderColor }}
                                ></input>
                            </div>
                            <div style={font} className="slider-right">
                                Max
                            </div>
                        </ReuseableCard>
                    </div>
                </div>
            </ReuseableCard>
        </>
    )
}
