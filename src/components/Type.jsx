export default function Type(props) {
    let typeList = ""
    console.log(props.type[0])
    for(let i = 0; i < props.type.length; i++) {
        if(i == props.type.length -1) {
            typeList = typeList + props.type[i]
        }
        else {
            typeList = typeList + props.type[i] + ", "
        }
    }
    return (
        <p><span className="label">Type:</span> {typeList}</p>
    )
}