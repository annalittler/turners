import "./style/TierSelection.css"
import TierContent from "./TierContent"

export default function TierSelection({
    trigger,
    item: { rating, name, cost, details },
}) {
    const font = { fontFamily: `Inter` }

    return (
        <>
            <div className="tier-selection-content">
                <div
                    style={font}
                    className={
                        trigger === "comp" ? "tier-banner" : "tier-banner-hide"
                    }
                >
                    {rating}
                </div>
                <TierContent name={name} cost={cost} details={details} />
            </div>
        </>
    )
}
