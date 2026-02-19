import ComponentB from "./ComponentB"

const ComponentA = () => {

    let name = {
        age: 12,
        roleNo: 1234

    }

    return (
        <div>
            <h1>ComponentA</h1>
            <ComponentB data={name}/>
        </div>
    )
}

export default ComponentA