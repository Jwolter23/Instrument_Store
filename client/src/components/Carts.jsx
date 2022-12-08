export default function Carts (props) {
    console.log(props)

    
    return (
        <div className="grid">
            {props.carts.map((items) => (
                <div>
                    <h3>Hi</h3>
                    <h3>{items.items}</h3>
                </div>
            ))}
        </div>
    )
     }