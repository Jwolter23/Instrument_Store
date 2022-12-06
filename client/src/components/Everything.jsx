export default function Everything (props) {
console.log(props)

const Instrument = (props) => {
    return  (
        <div className="instrument">
        <h3>{props.instrument.brand}</h3>
        <h3>{props.instrument.model}</h3>
        <img className="instrument-image"src={props.instrument.image}></img>
        <h3>{props.instrument.color}</h3>
        <h3>{props.instrument.price}</h3>

        </div>
    )
}



return (
    <div className="grid">
        {props.instruments.map((instrument) => (
            <Instrument instrument={instrument}/>
        ))}
    </div>
)

}