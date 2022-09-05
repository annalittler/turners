import "./ProgressBar.css"
import { useState, useEffect } from "react"
import circle from "./assets/circle.png"
import circleDone from "./assets/circle-done.png"
import line from "./assets/line.png"
import lineDone from "./assets/line-done.png"

export default function ProgressBar({ progress }) {
    const [stepTwo, setStepTwo] = useState("")
    const [stepThree, setStepThree] = useState("")
    const [stepFour, setStepFour] = useState("")
    const [refresher, setRefresher] = useState(0)
    const valueForProgressBar = progress

    useEffect(() => {
        const progressChecker = () => {
            switch (valueForProgressBar) {
                case "2":
                    // eslint-disable-next-line no-sequences
                    return setStepTwo("2"), setRefresher(1)
                case "3":
                    // eslint-disable-next-line no-sequences
                    return setStepThree("3"), setStepTwo("2"), setRefresher(2)
                case "4":
                    return (
                        setStepFour("4"),
                        setStepThree("3"),
                        setStepTwo("2"),
                        setRefresher(3)
                    )
                default:
                    return null
            }
        }

        progressChecker()
    }, [refresher, valueForProgressBar])

    return (
        <>
            <div className="quote-progress-bar-container">
                <div className="progress-first">
                    <img
                        className="progress-circle"
                        src={circleDone}
                        width={40}
                        alt="circle"
                    />
                    <img
                        className="progress-line"
                        src={stepTwo === "2" ? lineDone : line}
                        height={8}
                        width={600}
                        alt="line"
                    />
                    <h4>Step 1</h4>
                    <p>Car / Driver Details</p>
                </div>
                <div className="progress-second">
                    <img
                        className="progress-circle"
                        src={stepTwo === "2" ? circleDone : circle}
                        width={40}
                        alt="circle"
                    />
                    <img
                        className="progress-line"
                        src={stepThree === "3" ? lineDone : line}
                        height={8}
                        width={600}
                        alt="line"
                    />
                    <h4>Step 2</h4>
                    <p>Quote / Add ons</p>
                </div>
                <div className="progress-third">
                    <img
                        className="progress-circle"
                        src={stepThree === "3" ? circleDone : circle}
                        width={40}
                        alt="circle"
                    />
                    <img
                        className="progress-line"
                        src={stepFour === "4" ? lineDone : line}
                        height={8}
                        width={600}
                        alt="line"
                    />
                    <h4>Step 3</h4>
                    <p>Quote Summary</p>
                </div>
                <div className="progress-fourth">
                    <img
                        className="progress-circle"
                        src={stepFour === "4" ? circleDone : circle}
                        width={40}
                        alt="circle"
                    />
                    <h4>Step 4</h4>
                    <p>Payment</p>
                </div>
            </div>
        </>
    )
}
