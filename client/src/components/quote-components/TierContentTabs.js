import "./style/QuoteTabs.css"
import { useState, useEffect } from "react"

export default function TierContentTabs({
    name,
    cost,
    payFrequency,
    frequencyValue,
    glassExcess,
    breakdownService,
    rentalVehicle,
}) {
    const [totalAmount, setTotalAmount] = useState(0)

    const refresher =
        glassExcess + breakdownService + rentalVehicle + payFrequency

    const glass = parseInt(glassExcess)
    const breakdown = parseInt(breakdownService)
    const rental = parseInt(rentalVehicle)

    useEffect(() => {
        const changeAmount = (payFrequency) => {
            switch (payFrequency) {
                case "fortnight":
                    let glassFortnight = (glass * 12) / 26
                    let breakdownFortnight = (breakdown * 12) / 26
                    let rentalFortnight = (rental * 12) / 26
                    let allFortnight =
                        rentalFortnight +
                        breakdownFortnight +
                        glassFortnight +
                        cost
                    let fortnightTotal = +(
                        Math.round(allFortnight + "e+2") + "e-2"
                    )
                    return setTotalAmount(fortnightTotal)
                case "month":
                    let month = (cost * 26) / 12
                    let monthCost = glass + breakdown + rental + month - 6.3
                    let monthTotal = +(Math.round(monthCost + "e+2") + "e-2")
                    return setTotalAmount(monthTotal)
                case "year":
                    let costYear = cost * 26
                    let glassYear = glass * 12
                    let breakdownYear = breakdown * 12
                    let rentalYear = rental * 12
                    let allYear =
                        costYear +
                        glassYear +
                        breakdownYear +
                        rentalYear -
                        158.54
                    let nyearTotal = +(Math.round(allYear + "e+2") + "e-2")
                    return setTotalAmount(nyearTotal)
                default:
                    return null
            }
        }
        changeAmount(payFrequency)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresher, name])

    return (
        <>
            <div className="quote-tab-content">
                <div className="quote-tab-title">
                    <h1
                        style={{
                            fontSize: `49px`,
                            fontWeight: `600`,
                        }}
                    >
                        {name}
                    </h1>
                </div>
                <div className="quote-tab-cost">
                    <h2>${totalAmount}</h2>
                    <p> &nbsp; per {payFrequency}</p>
                </div>
                <div className="quote-tab-details">
                    {payFrequency === "year"
                        ? `By paying yearly you save $${+(
                              Math.round(
                                  totalAmount + 158.54 - totalAmount + "e+2"
                              ) + "e-2"
                          )}`
                        : "Note: You save money if you choose to pay yearly"}
                </div>
            </div>
        </>
    )
}
