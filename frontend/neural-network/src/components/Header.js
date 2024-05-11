import React from 'react'
import { Link } from 'react-router-dom';

export function Header(props) {

    const btnContent = props.home ? "check" : "begin"
    const styles = props.home ? "flex justify-center" : "flex justify-center mb-[4rem]"
    const iconStyles = props.iconBig ? "home-icon scale-[1.2]" : "home-icon"
    return (
    <div className={styles}>
        <div className="home-content">
            <div className="home-header">
                <div>
                    <div className="home-title slide" >
                        <div className="whitespace-nowrap">{props.title[0]}</div>
                        <div>{props.title[1]}</div>
                        <div>{props.title[2]}</div>
                    </div>
                    {
                        props.description === "" ?
                        props.subtitle.length > 0 ?
                        <div className="home-subtitle">
                            <div>{props.subtitle[0]}</div>
                            <div>{props.subtitle[1]}</div>
                        </div> :
                        null :
                        <div className="model-description" >{props.description}</div>
                    }
                </div>
                <Link to="/diabetes" ><button className="btn">{btnContent}</button></Link>
            </div>
            <img className={iconStyles} src={props.icon} />
        </div>
    </div>
  )
}
