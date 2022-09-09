import "./style/MoreTime.css"
import Icon from "./assests/clock-icon.png"
import ReuseableCard from "../reusable-card/ReuseableCard"

export default function MoreTime() {
    const componentStyle = {
        padding: `0`,
        margin: `2rem`,
        width: `100%`,
        border: `1px solid #0076be`,
        bgColor: `white`,
    }
    const componentStyle2 = {
        padding: `0`,
        bgColor: `white`,
    }
    const font = { fontFamily: `Inter` }

    const saveQuote = () => console.log(`Save Quote Button`)

    return (
        <>
            <ReuseableCard {...componentStyle2}>
                <div className="more-time-main">
                    <div style={font} className="more-time-left">
                        <h2>Need more time?</h2>
                        <p>
                            Save your quote for later and access in your Turners
                            account
                        </p>
                    </div>
                    <div className="more-time-right">
                        <img src={Icon} alt="clock icon" width={80} />
                    </div>
                </div>
                <div className="more-time-container">
                    <ReuseableCard {...componentStyle}>
                        <button
                            onClick={saveQuote}
                            className="reusable-add-btn more-time-btn"
                        >
                            Save Quote
                        </button>
                    </ReuseableCard>
                </div>
            </ReuseableCard>
        </>
    )
}
