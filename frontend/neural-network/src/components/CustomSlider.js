import React from "react"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export function CustomSlider(props) {

    function convertUnderscore(str) {
        const tab = str.split("")
        const res =  tab.map(char => char === '_' ? ' ' : char)
        // console.log(tab)
        return res.join("")
    }

    return (
        <div className="slider-content">
            <div className="slider-content-element pt-[0.5rem]">
                <div className="text-[1.5rem] uppercase" >{convertUnderscore(props.name)}</div>
                <div className="slider-description">{props.description}</div>
            </div>
            <div className="slider-content-element">
                <Box sx={{ width: 400 }}>
                    <Slider
                    name={props.name}
                    // valueLabelDisplay="auto"
                    color="warning"
                    value={props.value}
                    onChange={props.handleChange}
                    step={props.step}
                    marks={props.marks}
                    min={props.min}
                    max={props.max}
                    />
                </Box>
                <div className="slider-value-box" >
                    <div>
                        {props.value}
                    </div>
                </div>
            </div>
        </div>
    )
}