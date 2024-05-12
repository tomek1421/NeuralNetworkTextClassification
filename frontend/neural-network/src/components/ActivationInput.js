import React from "react"
import identity from "../icons/identityGraphOrange.png"
import relu from "../icons/reluGraphOrange.png"
import logistic from "../icons/logisticGraphOrange.png"

export function ActivationInput(props) {

    return (
        <div className="flex justify-center">
            <div className={`input-container input-container-activation ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="identity" 
                    name="activation" 
                    onChange={props.handleChange} 
                    value="identity" 
                    checked={props.activation === "identity"} 
                />
                <div className="radio-tile">
                    <label htmlFor="identity">identity</label>
                    <div className="img-identity"></div>
                </div>
            </div>

            <div className={`input-container input-container-activation ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="relu" 
                    name="activation" 
                    onChange={props.handleChange} 
                    value="relu" 
                    checked={props.activation === "relu"} 
                />
                <div className="radio-tile">
                    <label htmlFor="relu">relu</label>
                    <div className="img-relu"></div>
                </div>
            </div>

            <div className={`input-container input-container-activation ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="logistic" 
                    name="activation" 
                    onChange={props.handleChange} 
                    value="logistic" 
                    checked={props.activation === "logistic"} 
                />
                <div className="radio-tile">
                    <label htmlFor="logistic">logistic</label>
                    <div className="img-logistic"></div>
                </div>
            </div>
        </div>
    )
}