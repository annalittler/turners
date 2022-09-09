import "./style/TermsAndC.css"
import ReuseableCard from "../reusable-card/ReuseableCard"
import { useState } from "react"

export default function TermsAndC({ termsAgreed }) {
    const [checkBox, setCheckBox] = useState(false)

    const font = { fontFamily: `Inter` }

    const componentStyle = {
        border: `1px solid black`,
        shadow: `none`,
        overflowY: `scroll`,
        padding: `0 3rem`,
        height: `15rem`,
        className: `remove-scroll-bar`,
    }

    const tickingTheBox = () => {
        setCheckBox(!checkBox)
    }

    return (
        <>
            <ReuseableCard>
                <div className="terms-main">
                    <div style={font} className="terms-header">
                        <h2>Terms and Conditions</h2>
                    </div>
                    <div style={font} className="terms-form">
                        <ReuseableCard {...componentStyle}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Commodo ullamcorper a lacus vestibulum sed arcu
                                non odio euismod. Nibh cras pulvinar mattis
                                nunc. Hac habitasse platea dictumst quisque
                                sagittis purus sit amet. Non pulvinar neque
                                laoreet suspendisse interdum consectetur libero
                                id. Felis imperdiet proin fermentum leo vel
                                orci. Lobortis mattis aliquam faucibus purus in
                                massa. Lectus proin nibh nisl condimentum id
                                venenatis a condimentum vitae. Ut faucibus
                                pulvinar elementum integer enim neque volutpat.
                                Viverra orci sagittis eu volutpat odio. Volutpat
                                diam ut venenatis tellus. Lectus sit amet est
                                placerat in egestas erat. Quis enim lobortis
                                scelerisque fermentum dui faucibus. Consectetur
                                adipiscing elit ut aliquam purus sit amet
                                luctus. At tellus at urna condimentum mattis.
                                Consectetur a erat nam at lectus urna. At quis
                                risus sed vulputate. Egestas erat imperdiet sed
                                euismod nisi. Ut morbi tincidunt augue interdum
                                velit. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Commodo ullamcorper a lacus vestibulum sed arcu
                                non odio euismod. Nibh cras pulvinar mattis
                                nunc. Hac habitasse platea dictumst quisque
                                sagittis purus sit amet. Non pulvinar neque
                                laoreet suspendisse interdum consectetur libero
                                id. Felis imperdiet proin fermentum leo vel
                                orci. Lobortis mattis aliquam faucibus purus in
                                massa. Lectus proin nibh nisl condimentum id
                                venenatis a condimentum vitae. Ut faucibus
                                pulvinar elementum integer enim neque volutpat.
                                Viverra orci sagittis eu volutpat odio. Volutpat
                                diam ut venenatis tellus. Lectus sit amet est
                                placerat in egestas erat. Quis enim lobortis
                                scelerisque fermentum dui faucibus. Consectetur
                                adipiscing elit ut aliquam purus sit amet
                                luctus. At tellus at urna condimentum mattis.
                                Consectetur a erat nam at lectus urna. At quis
                                risus sed vulputate. Egestas erat imperdiet sed
                                euismod nisi. Ut morbi tincidunt augue interdum
                                velit.
                            </p>
                            <div className="terms-form-bottom full-bleed-blue">
                                <label className="terms-label">
                                    <input
                                        type="radio"
                                        checked={checkBox}
                                        value="agreed"
                                        onClick={termsAgreed}
                                        onChange={tickingTheBox}
                                    />
                                </label>
                                <h2>Yes, I agree</h2>
                            </div>
                        </ReuseableCard>
                    </div>
                </div>
            </ReuseableCard>
        </>
    )
}
