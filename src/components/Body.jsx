import data from './data.js'
import Pokemon from './Pokemon.jsx'

export default function Body() {
    const creatures = data.map((creature) => {
        return (
            <Pokemon 
                key = {creature.id}
                {...creature}
            />
        )
    })

    return (
        <>
            <main>
                {creatures}
            </main>
        </>
    )
}