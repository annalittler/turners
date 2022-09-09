export default function TierContent({ name, cost, details }) {
    const font = { fontFamily: `Inter` }

    return (
        <>
            <div>
                <div className="tier-selection">
                    <h1 style={font}>{name}</h1>
                </div>
                <div style={font} className="tier-cost">
                    <h2 style={font}>${cost} </h2>
                    <p style={font}> &nbsp; per fortnight</p>
                </div>
                <div style={font} className="tier-details">
                    {details}
                </div>
            </div>
        </>
    )
}
