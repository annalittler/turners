import "./QuoteStep2.css"
import { useState, useEffect } from "react"
import Header from "../components/header/Header"
import ProgressBar from "../components/progress-bar/ProgressBar"
import QuoteCard from "../components/quote-components/QuoteCard"
import QuoteTabs from "../components/quote-components/QuoteTabs"
import { InsuranceData } from "../components/quote-components/InsuranceData"
import MoreTime from "../components/quote-components/MoreTime"
import QuoteSlider from "../components/quote-components/QuoteSlider"
import Optional from "../components/quote-components/Optional"
import TermsAndC from "../components/quote-components/TermsAndC"
import ReuseableCard from "../components/reusable-card/ReuseableCard"

export default function QuoteStep2() {
    const [quoteSelected, setQuoteSelected] = useState("comp")
    const [glassExcess, setGlassExcess] = useState(0)
    const [breakdownService, setBreakdownService] = useState(0)
    const [rentalVehicle, setRentalVehicle] = useState(0)
    const [termAgreement, setTermAgreement] = useState("")
    const [sliderValue, setSliderValue] = useState(5000)

    const font = { fontFamily: `Inter` }

    const selectQuote = (e) => {
        setQuoteSelected(e.target.value)
    }

    const sliderAmount = (e) => {
        setSliderValue(e.target.value)
    }

    const breakdownCost = (e) => {
        e.preventDefault()
        setBreakdownService(e.target.value)
    }

    const glassCost = (e) => {
        e.preventDefault()
        setGlassExcess(e.target.value)
    }

    const rentalCost = (e) => {
        e.preventDefault()
        setRentalVehicle(e.target.value)
    }

    const termsAgreed = (e) => {
        setTermAgreement(e.target.value)
    }

    const backBtn = () => console.log(`Back Button`)
    const nextBtn = () => console.log(`Next Button`)

    const componentStyle = {
        padding: `0`,
        margin: `0`,
        width: `18rem`,
    }

    const quoteCard = {
        quoteDetails: InsuranceData,
        selectQuote: selectQuote,
    }

    const quoteTabs = {
        selectedQuote: quoteSelected,
        quoteDetails: InsuranceData,
        glassExcess: glassExcess,
        breakdownService: breakdownService,
        rentalVehicle: rentalVehicle,
    }

    return (
        <>
            <div className="quote-step-2-top">
                <Header />
                <ProgressBar progress="2" />
                <h1 style={font} className="quote-step-2-h1">
                    Here is your quote
                </h1>
            </div>
            <div className="quote-step-2-mid full-bleed">
                <div className="quote-step-2-left">
                    <QuoteCard {...quoteCard} />
                    <QuoteSlider sliderAmount={sliderAmount} />
                    <Optional
                        breakdownCost={breakdownCost}
                        glassCost={glassCost}
                        rentalCost={rentalCost}
                    />
                    <TermsAndC termsAgreed={termsAgreed} />
                    <div className="quote-step-2-left-bottom">
                        <ReuseableCard {...componentStyle}>
                            <button
                                onClick={backBtn}
                                style={font}
                                className="reusable-add-btn"
                            >
                                Back
                            </button>
                        </ReuseableCard>
                        <ReuseableCard {...componentStyle}>
                            <button
                                onClick={nextBtn}
                                style={font}
                                disabled={
                                    termAgreement === "agreed" ? false : true
                                }
                                className="reusable-add-btn"
                            >
                                Next
                            </button>
                        </ReuseableCard>
                    </div>
                </div>
                <div className="quote-step-2-right">
                    <QuoteTabs {...quoteTabs} />
                    <MoreTime />
                </div>
            </div>
        </>
    )
}
