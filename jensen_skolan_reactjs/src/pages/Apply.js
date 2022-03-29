import '../styles/Apply.css'
import '../components/ApplyedCource'
import { ApplyedCource } from '../components/ApplyedCource'

const Apply = () => {

    const createdCourse = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5']
    const newItem = createdCourse.map((createdCourse) => <ul>{createdCourse}</ul>);

    return (
        <div className = "container">
            <div className='apply_container'>
                <form className='form_apply' action="/action.php">
                    <div className='form_input'>
                        <label for="utbildning">Välja utbildning:</label>
                        <input list="browsers" name="browser"/>
                        <datalist id="browsers">
                            <option value={newItem}/>
                            <option value={newItem}/>
                            <option value={newItem}/>
                            <option value={newItem}/>
                            <option value={newItem}/>
                        </datalist>
                    </div>
                    <div className='form_input'>
                        <label for="fname">Förnamn:</label>
                        <input className='input_class' type="text" id="fname" value="Ditt namn..."/>
                    </div>
                    <div className='form_input'>
                        <label for="Ename">Efternamn:</label>
                        <input type="text" id="lname" value="Ditt efternamn..."/>
                    </div>
                    <div className='form_input'>
                        <label for="Epost">E-post:</label>
                        <input type="text" id="email" value="Ditt E-post..."/>
                    </div>
                    <button className="btn_submit" type="submit">SKICKA</button>
                </form>
            </div>
            <div>
                <ApplyedCource />
            </div>
        </div>
    )
}

export {Apply}