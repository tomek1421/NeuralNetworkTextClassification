import React from "react"

export function LayersInput({data, setData, disableStyles}) {

    function handleIncreaseNeuron(index) {
        setData(prev => {
            const newLayers = prev.layers.map((neurons, i) => {
                if (i === index) return neurons + 1
                return neurons
            console.log(newLayers)
            })
            return {
                ...prev,
                layers: newLayers
            }
        })
    }

    function handleDecreseNeuron(index) {
        setData(prev => {
            const newLayers = prev.layers.map((neurons, i) => {
                if (i === index) return neurons - 1
                return neurons
            })
            return {
                ...prev,
                layers: newLayers
            }
        })
    }

    function handleAddLayer() {
        setData(prev => {
            const newLayers = [...prev.layers, 3]
            return {
                ...prev, 
                layers: newLayers
            }
        })
    }

    function handleRemoveLayer(index) {
        setData(prev => {
            const newLayers = prev.layers.reduce((acc, curr, i) => {
                if (index !== i) acc.push(curr)
                return acc
            }, [])
            return {
                ...prev, 
                layers: newLayers
            }
        })
    }

    return (
        <div className={`layers-input ${disableStyles}`}>
            {
                data.layers.map((neurons, index) => {
                    return  (
                        <div className="layer">
                            <div className="layer-header">Layer {index+1}</div>
                            <div className="layer-content">
                                <div className="neurons-header" >neurons</div>
                                <div className="neurons-buttons">
                                    <div onClick={() => handleDecreseNeuron(index)} className="minus-plus-btn">-</div>
                                    <div className="neurons-value">{neurons}</div>
                                    <div onClick={() => handleIncreaseNeuron(index)} className="minus-plus-btn">+</div>
                                </div>
                                <div onClick={() => handleRemoveLayer(index)} className="remove-btn">X</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="add-layer" onClick={handleAddLayer} >+ Add layer</div>
        </div>
    )
}