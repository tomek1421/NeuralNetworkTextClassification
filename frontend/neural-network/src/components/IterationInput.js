import React from "react"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export function IterationInput(props) {

    return (
        <div className="flex flex-col items-center">
            <Box sx={{ width: 600 }} className={props.disableStyles} >
                <Slider
                name={"iterations"}
                // valueLabelDisplay="auto"
                color="warning"
                value={props.iterations}
                onChange={props.handleChange}
                step={500}
                marks={true}
                min={500}
                max={5000}
                />
            </Box>
            <div className={`slider-value-box ${props.disableStyles}`} >
                <div>
                    {props.iterations}
                </div>
            </div>
        </div>
    )
}