import '../styles/Apply.css'

const Apply = () => {
    return (
        <div className='apply_container'>
            <form className='form_apply' action="/action.php">
                <div className='form_input'>
                    <label for="fname">Förnamn:</label>
                    <input type="text" id="fname" value="Ditt namn..."/>
                </div>
                <div className='form_input'>
                    <label for="Ename">Efternamn:</label>
                    <input type="text" id="lname" value="Ditt efternamn..."/>
                </div>
                <div className='form_input'>
                    <label for="Epost">E-post:</label>
                    <input type="text" id="email" value="Ditt E-post..."/>
                </div>
                <div className='form_input'>
                    <label for="utbildning">Välja utbildning:</label>
                    <input list="browsers" name="browser"/>
                    <datalist id="browsers">
                        <option value="Internet Explorer"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>
                </div>
                <input className='btn_submit' type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export {Apply}