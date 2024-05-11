import React from "react"
import { Header } from "../components/Header"
import icon from "../icons/icon2.png"
import arrows from "../icons/arrows.png"
import arrow from "../icons/arrow.png"
import { AlgorithmInput } from "../components/AlgorithmInput"

export function Model() {

    const [data, setData] = React.useState({
        algorithm: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

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
                <form>
                    <div className="flex justify-center">
                        <h2>Neural network</h2>
                    </div>
                    <AlgorithmInput algorithm={data.algorithm} handleChange={handleChange} />
                    <div>{data.algorithm}</div>

                    <div className="flex justify-center mt-[3rem] mb-[3rem]">
                        <img className="arrow-icon" src={arrow} />
                    </div>
                </form>
            </div>
        </div>
    )
}