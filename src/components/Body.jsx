import data from './components/data.js'

export default function Body() {
    const creatures = data.map((creature) => {
        return (
            <Pokemon 
                key = {creature.id}
                {...creature}
            />
        )
    })
}