import React from "react"

export function SolverInput(props) {

    return (
        <div className="flex justify-center">
            <div className={`input-container input-container-solver ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="adam" 
                    name="solver" 
                    onChange={props.handleChange} 
                    value="adam" 
                    checked={props.solver === "adam"} 
                />
                <div className="radio-tile">
                    <label for="adam">adam</label>
                    <div  className="radio-desc">Adaptive Moment Estimation</div>
                </div>
            </div>

            <div className={`input-container input-container-solver ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="lbfgs" 
                    name="solver" 
                    onChange={props.handleChange} 
                    value="lbfgs" 
                    checked={props.solver === "lbfgs"} 
                />
                <div className="radio-tile">
                    <label for="lbfgs">lbfgs</label>
                    <div className="radio-desc">Limited-memory Broyden-Fletcher-Goldfarb-Shanno</div>
                </div>
            </div>

            <div className={`input-container input-container-solver ${props.disableStyles}`}>
                <input 
                    type="radio" 
                    id="sgd" 
                    name="solver" 
                    onChange={props.handleChange} 
                    value="sgd" 
                    checked={props.solver === "sgd"} 
                />
                <div className="radio-tile">
                    <label for="sgd">sgd</label>
                    <div className="radio-desc">Stochastic Gradient Descent</div>
                </div>
            </div>
        </div>
    )
}