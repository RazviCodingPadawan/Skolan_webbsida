import "../pages/Apply"


const ApplyedCource = () => {

    const users = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'];
    const items = users.map((user) => <li>{user}</li>);

    return (
        <div className="applyed_cources">
            <h2>Utvalda kurser:</h2>
            <div className = "cource_list">
            <ul>{items}</ul>
            </div>
        </div>
    )
}

export {ApplyedCource}