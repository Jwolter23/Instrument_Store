export default function Everything (props) {
console.log(props)

const Instrument = (props) => {
    
    return  (
        <div className="instrument">
        <h3>{props.instrument.brand}</h3>
        <h3>{props.instrument.model}</h3>
        <img className="instrument-image"src={props.instrument.image}></img>
        <h3>{props.instrument.color}</h3>
        <h3>${props.instrument.price}</h3>

        </div>
    )
}


return (
    <div className="grid">
        {props.instruments.map((instrument) =>{
            let instruments = props.instruments
            let length = instruments.length
            if (length === 0) {
                return (
                    <div>
                        <h1>Loading Please Wait...</h1>
                    </div>
                )
            } else return (
                <Instrument instrument={instrument}/>
            )
        })}
    </div>
)
// return (
//     <div className="grid">
//         {props.instruments.map((instrument) => {
//                 let instruments = props.instruments
//                 let length = instruments.length
//                 if (length === 0  ) {
//                 return (
//                     <div>
//                         <h1>Loading Please Wait...</h1>
//                     </div>
//                 )
//                 } else {  
//         (
//             <Instrument instrument={instrument}/>
//         )}
//     )}
//     </div>
// )

 }