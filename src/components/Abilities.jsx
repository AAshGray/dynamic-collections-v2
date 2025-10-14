export default function Abilities(props){
    const abilities = props.abilities.map((ability) => {
        return (
            <li><span className="label">{ability.name}</span>: {ability.description}</li>
        )
    })
    
    return (
        <>
            <span className="label"><p>Abilities:</p></span>
            <ul>
                {abilities}
            </ul>        
        </>
    )
}