import React from "react"

export function AlgorithmInput(props) {

    return (
        <div className="flex justify-center">
            <div className="input-container">
                <input 
                    type="radio" 
                    id="mlp" 
                    name="algorithm" 
                    onChange={props.handleChange} 
                    value="mlp" 
                    checked={props.algorithm === "mlp"} 
                />
                <div className="radio-tile">
                    <label htmlFor="mlp">MLP</label>
                    <div  className="radio-desc" >A Multi-Layer Perceptron (MLP) is an artificial neural network with layers of interconnected nodes</div>
                </div>
            </div>

            <div className="input-container">
                <input 
                    type="radio" 
                    id="gnb" 
                    name="algorithm" 
                    onChange={props.handleChange} 
                    value="gnb" 
                    checked={props.algorithm === "gnb"} 
                />
                <div className="radio-tile">
                    <label htmlFor="gnb">GaussainNB</label>
                    <div className="radio-desc" >Gaussian Naive Bay machine learning classification technique that relies on Gaussian distribution.</div>
                </div>
            </div>

            <div className="input-container">
                <input 
                    type="radio" 
                    id="dt" 
                    name="algorithm" 
                    onChange={props.handleChange} 
                    value="dt" 
                    checked={props.algorithm === "dt"} 
                />
                <div className="radio-tile">
                    <label htmlFor="dt">Tree</label>
                    <div className="radio-desc" >Decision tree classifier constructs a model by building a tree structure, with each node representing a test</div>
                </div>
            </div>
        </div>
    )
}