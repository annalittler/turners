import "./style/QuoteCard.css"
import { InsuranceCovers } from "./InsuranceData"
import Icon from "./assests/chevron-down-grey.png"
import pdfIcon from "./assests/pdf-icon.png"
import ReuseableCard from "../reusable-card/ReuseableCard"
import TierSelection from "./TierSelection"
import { useState } from "react"

const QuoteCard = ({ quoteDetails, selectQuote }) => {
    const [btnSelected, setBtnSelected] = useState("comp")

    const font = { fontFamily: `Inter` }

    const componentStyle = {
        padding: `0`,
        margin: `2rem`,
        width: `30%`,
        border: `1px solid #0076be`,
    }

    const styles = {
        padding: `0 0 2rem 0`,
    }

    const btnSelector = (e) => {
        setBtnSelected(e.target.value)
    }

    const saveQuote = () => console.log(`Save Quote for Later Button`)

    const quoteData = "FFR425645"
    const expiryDate = "30th September 2022"

    return (
        <>
            <ReuseableCard {...styles}>
                <div className="quote-card-main">
                    <div style={font} className="quote-card-left">
                        <h3>
                            Your quote number{" "}
                            <span
                                style={{
                                    fontWeight: "600",
                                    fontSize: "35px",
                                    fontFamily: "Inter",
                                }}
                            >
                                {quoteData}
                            </span>
                        </h3>
                        <p>Valid until {expiryDate}</p>
                    </div>
                    <div className="quote-card-right">
                        <img
                            src={pdfIcon}
                            width={20}
                            height={25}
                            alt="pdf icon"
                        />
                        <p onClick={saveQuote} style={font}>
                            Save quote for later
                        </p>
                    </div>
                </div>
                <div className="quote-card-bottom">
                    <div className="quote-buttons">
                        <ReuseableCard {...componentStyle}>
                            <button
                                style={font}
                                className={
                                    btnSelected === "comp"
                                        ? "reusable-selected-btn"
                                        : "reusable-add-btn"
                                }
                                onClickCapture={btnSelector}
                                onClick={selectQuote}
                                value="comp"
                            >
                                Comprehensive
                            </button>
                        </ReuseableCard>
                        <ReuseableCard {...componentStyle}>
                            <button
                                style={font}
                                className={
                                    btnSelected === "fire"
                                        ? "reusable-selected-btn"
                                        : "reusable-add-btn"
                                }
                                onClickCapture={btnSelector}
                                onClick={selectQuote}
                                value="fire"
                            >
                                Third Party, Fire & Theft
                            </button>
                        </ReuseableCard>
                        <ReuseableCard {...componentStyle}>
                            <button
                                style={font}
                                className={
                                    btnSelected === "third"
                                        ? "reusable-selected-btn"
                                        : "reusable-add-btn"
                                }
                                onClickCapture={btnSelector}
                                onClick={selectQuote}
                                value="third"
                            >
                                Third Party Only
                            </button>
                        </ReuseableCard>
                    </div>
                    {quoteDetails
                        .filter((i) => i.set === btnSelected)
                        .map((item, idx) => {
                            return (
                                <TierSelection
                                    trigger={btnSelected}
                                    item={item}
                                    key={idx}
                                />
                            )
                        })}
                </div>
                <ReuseableCard shadow={`none`} padding={`1rem 3rem 0 3rem`}>
                    <div className="quote-btn-bottom">
                        <details>
                            <summary>
                                See what's covered{" "}
                                <img
                                    src={Icon}
                                    fill={`black`}
                                    width={15}
                                    alt="arrow icon"
                                />
                            </summary>
                            {InsuranceCovers.filter(
                                (i) => i.set === btnSelected
                            ).map((item) => {
                                return item.details
                            })}
                        </details>
                    </div>
                </ReuseableCard>
            </ReuseableCard>
        </>
    )
}

export default QuoteCard
