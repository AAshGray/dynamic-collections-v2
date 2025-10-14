import Type from './Type'
import Abilities from './Abilities'
export default function Pokemon(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name + " image"}></img>
            <Type 
                type= {props.type}
            />
            <p>HP: {props.hp}</p>
            <p>Attack: {props.attack} Defense: {props.defense}</p>
            <Abilities 
                abilities={props.abilities}
            />
        </>
    )
} 