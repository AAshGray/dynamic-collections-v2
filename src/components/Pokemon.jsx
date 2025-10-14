import Type from './Type'
import Abilities from './Abilities'
export default function Pokemon(props) {
    return (
        <div className='pokemon'>
            <span className="label"><h3>{props.name}</h3></span>
            <img src={props.image} alt={props.name + " image"}></img>
            <Type 
                type= {props.type}
            />
            <p><span className="label">HP:</span> {props.hp}</p>
            <p><span className="label">Attack:</span> {props.attack} <span className="label">Defense:</span> {props.defense}</p>
            <Abilities 
                abilities={props.abilities}
            />
        </div>
    )
} 