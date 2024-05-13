import React from "react"
import { Header } from "../components/Header"
import icon from "../icons/icon2.png"
import arrows from "../icons/arrows.png"
import arrow from "../icons/arrow.png"
import { AlgorithmInput } from "../components/AlgorithmInput"
import { LayersInput } from "../components/LayersInput"
import { SolverInput } from "../components/SolverInput"
import { IterationInput } from "../components/IterationInput"
import { ActivationInput } from "../components/ActivationInput"
import axios from 'axios'
import { ModelResult } from "../components/ModelResult"

export function Model() {
    const uri = "http://127.0.0.1:5000"

    const [data, setData] = React.useState({
        algorithm: "mlp",
        layers: [6, 3],
        solver: "sgd",
        iterations: 500,
        activation: "logistic"
    })

    const [result, setResult] = React.useState({
        training_accuracy: -1,
        test_accuracy: -1,
        loss: -1,
        matrix: [[-1,-1], [-1,-1]]
    })

    const [loading, setLoading] = React.useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)
        setResult({
            training_accuracy: -1,
            test_accuracy: -1,
            loss: -1,
            matrix: [[-1, -1], [-1, -1]]
        })
        setTimeout(() => {
            axios.post(`${uri}/model/test`, data)
            .then(msg => {
                setResult(msg.data)
                console.log(msg.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
        }, 3000)
    }

    const disableStyles = data.algorithm !== "mlp" ? "z-[-1] opacity-50" : ""

    return (
        <div>
            <Header title={["AI Model"]} subtitle={[]} description="Imagine the neural network as a team of tiny workers. Each worker (or neuron) taking information about a person, doing calculations, and passing the result to the next worker, to learn patterns and make predictions." icon={icon} iconBig={true} home={false} />
            <div className="diabetes-paragraph">
                <div className="w-[70%]" >
                    Explore and customize our AI model below. It's designed for easy editing and understanding.
                </div>
                <img className="w-[7rem]" src={arrows} />
            </div>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col items-center">
                        <div>
                            <h2>Neural network</h2>
                        </div>
                        <AlgorithmInput algorithm={data.algorithm} handleChange={handleChange} />

                        <div className="arrow-icon-box">
                            <img className="arrow-icon" src={arrow} />
                        </div>

                        <div className={`model-input-header ${disableStyles}`}>
                            <h2>Layers and neurons</h2>
                        </div>
                        <LayersInput data={data} setData={setData} disableStyles={disableStyles} />

                        <div className="arrow-icon-box">
                            <img className="arrow-icon" src={arrow} />
                        </div>

                        <div className={`model-input-header ${disableStyles}`}>
                            <h2>Solver</h2>
                        </div>
                        <SolverInput solver={data.solver} handleChange={handleChange} disableStyles={disableStyles} />

                        <div className="arrow-icon-box">
                            <img className="arrow-icon" src={arrow} />
                        </div>

                        <div className={`model-input-header ${disableStyles}`}>
                            <h2>Max iteration</h2>
                        </div>
                        <IterationInput iterations={data.iterations} handleChange={handleChange} disableStyles={disableStyles} />
                        
                        <div className="arrow-icon-box">
                            <img className="arrow-icon" src={arrow} />
                        </div>

                        <div className={`model-input-header ${disableStyles}`}>
                            <h2>Activation function</h2>
                        </div>
                        <ActivationInput activation={data.activation} handleChange={handleChange} disableStyles={disableStyles} />

                        <div className="arrow-icon-box">
                            <img className="arrow-icon" src={arrow} />
                        </div>

                        <div className="model-input-header">
                            <h2>Test your customised model</h2>
                        </div>
                        <button className="btn" >test</button>
                    </div>
                </form>
                
                <ModelResult result={result} disableStyles={disableStyles} loading={loading} data={data} />  
            </div>
        </div>
    )
}