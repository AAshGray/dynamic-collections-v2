export default function Abilities(props){
    const abilities = props.abilities.map((ability) => {
        return (
            <li>{ability.name}: {ability.description}</li>
        )
    })
    
    return (
        <>
            <p>Abilities:</p>
            <ul>
                {abilities}
            </ul>        
        </>
    )
}