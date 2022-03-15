import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>This page doesn't exist. Go <Link to='/'>home</Link></p>
        </div>
    )
}

export {Notfound}