import React from "react"
import CountUp from 'react-countup';

export function ModelResult({ result, disableStyles, loading, data }) {

    function accuracyStyle(accuracy) {
        if (accuracy < 0) {
            return ""
        } else if (accuracy > 0 && accuracy < 60) {
            return "weak-result" 
        } else if (accuracy > 60 && accuracy < 70) {
            return "medium-result"
        } else if (accuracy >= 70 && accuracy < 80) {
            return "good-result"
        } else if (accuracy >= 80 && accuracy < 90) {
            return "great-result"
        } else {
            return "perfect-result"
        }
    }

    const accuracyTestStyle = accuracyStyle(result.test_accuracy)
    const accuracyTrainingStyle = accuracyStyle(result.training_accuracy)

    const questionmarkStyles = loading ? "text-[3rem] bounce" : "text-[3rem] "

    return (
        <div className="flex flex-col items-center mb-[10rem]">
            <h3>Accuracy & loss</h3>
            <div className="flex gap-[1rem]">
                <div className={`model-result-box ${accuracyTrainingStyle} scale-[0.8]`}>
                    <div className="flex flex-col items-center">
                        <div className={`circle ${accuracyTrainingStyle}-circle`} >
                            {
                                result.training_accuracy === -1 ? <div className={`${questionmarkStyles}1`}>?</div>
                                : <div><CountUp end={result.training_accuracy} duration={3}/>%</div>
                            }
                        </div>
                        <div className="model-result-desc" >training</div>
                    </div>
                </div> 

                <div className={`model-result-box ${accuracyTestStyle}`}>
                    <div className="flex flex-col items-center">
                        <div className={`circle ${accuracyTestStyle}-circle`} >
                            {
                                result.test_accuracy === -1 ? <div className={`${questionmarkStyles}2`}>?</div>
                                : <div><CountUp end={result.test_accuracy} duration={3}/>%</div>
                            }
                        </div>
                        <div className="model-result-desc" >test</div>
                    </div>
                </div>

                <div className={`model-loss-box ${disableStyles} scale-[0.8]`}>
                    <div className="flex flex-col items-center">
                        <div className="loss" >
                            {
                                data.algorithm === "mlp" ? 
                                    result.loss === -1 ? <div className={`${questionmarkStyles}3`}>?</div>
                                    : <div><CountUp end={result.loss} decimals={2}
                                    decimal="." duration={3}/></div>
                                : <div>N/A</div>
                            }
                        </div>
                        <div className="model-result-desc" >loss</div>
                    </div>
                </div>                    
            </div>
            <h3>Confiusion matrix</h3>
            <div className="matrix">
                {
                    result.matrix[0][0] === -1 ?
                    <div className="matrix-field" ><div className={`${questionmarkStyles}1`} >?</div></div> :
                    <div className="matrix-field" >{result.matrix[0][0]}</div>
                }
                {
                    result.matrix[0][1] === -1 ?
                    <div className="matrix-field" ><div className={`${questionmarkStyles}3`} >?</div></div> :
                    <div className="matrix-field" >{result.matrix[0][1]}</div>
                }
                {
                    result.matrix[1][0] === -1 ?
                    <div className="matrix-field" ><div className={`${questionmarkStyles}3`} >?</div></div> :
                    <div className="matrix-field" >{result.matrix[1][0]}</div>
                }
                {
                    result.matrix[1][1] === -1 ?
                    <div className="matrix-field" ><div className={`${questionmarkStyles}1`} >?</div></div> :
                    <div className="matrix-field" >{result.matrix[1][1]}</div>
                }
            </div>
        </div>
    )
}