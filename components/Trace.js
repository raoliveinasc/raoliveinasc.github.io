
export default function Trace({color}) {
    return (
        color == "orange" ? <div style={{backgroundColor: "rgb(255, 105, 0)"}} className="traced"></div> : <div  style={{backgroundColor: "white"}} className="traced"> </div>
    )
}