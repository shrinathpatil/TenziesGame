import react from "react"
import { ReactDOM } from "react-dom/client"
import "./style.css"

export default function Die(props){
    const styles={backgroundColor:props.isheld?"#59E391":"rgb(253, 214, 162)"}
    return (
        <>
        <div className="die-face"
            style={styles} 
            onClick={props.onHold}>
             <h2 className="die-num">{props.value}</h2>
        </div>
        
        </>
    )
}