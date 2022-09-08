import "./style/QuoteTabs.css"
import ReuseableCard from "../reusable-card/ReuseableCard"
import TierContentTabs from "./TierContentTabs"
import { useState } from "react"

export default function QuoteTabs({
    quoteDetails,
    selectedQuote,
    glassExcess,
    breakdownService,
    rentalVehicle,
}) {
    const [payFrequency, setPayFrequency] = useState("fortnight")
    const [frequencyValue, setfrequencyValue] = useState(1)

    const font = { fontFamily: `Inter` }

    const updatePricing = (e) => {
        setPayFrequency(e.target.value)
        setfrequencyValue(e.target.id)
    }

    const optionalCosts = {
        glassExcess: glassExcess,
        breakdownService: breakdownService,
        rentalVehicle: rentalVehicle,
    }

    const componentStyle = {
        padding: `0`,
        margin: `0`,
    }

    return (
        <>
            <ReuseableCard {...componentStyle}>
                <div className="quote-tabs-main">
                    <div className="quote-tabs-top">
                        <button
                            style={font}
                            onClick={updatePricing}
                            value="year"
                            id={22}
                            className={
                                payFrequency === "year"
                                    ? "tab-selected-left"
                                    : "quote-tabs-left"
                            }
                        >
                            Pay
                            <br /> Yearly
                        </button>
                        <button
                            style={font}
                            onClick={updatePricing}
                            value="month"
                            id={2}
                            className={
                                payFrequency === "month"
                                    ? "tab-selected-mid"
                                    : "quote-tabs-mid"
                            }
                        >
                            Pay
                            <br /> Monthly
                        </button>
                        <button
                            style={font}
                            onClick={updatePricing}
                            value="fortnight"
                            id={1}
                            className={
                                payFrequency === "fortnight"
                                    ? "tab-selected-right"
                                    : "quote-tabs-right"
                            }
                        >
                            Pay
                            <br /> Fortnightly
                        </button>
                    </div>
                    <div className="quote-tabs-bottom">
                        <span>
                            {quoteDetails
                                .filter((i) => i.set === selectedQuote)
                                .map((item, idx) => {
                                    return (
                                        <TierContentTabs
                                            name={item.name}
                                            cost={item.cost}
                                            payFrequency={payFrequency}
                                            frequencyValue={frequencyValue}
                                            key={idx}
                                            {...optionalCosts}
                                        />
                                    )
                                })}
                        </span>
                    </div>
                </div>
            </ReuseableCard>
        </>
    )
}
