import '../styles/Apply.css'
import '../components/ApplyedCource'
import { ApplyedCource } from '../components/ApplyedCource'

const Apply = () => {

    return (
        <div className = "container">
            <div className='apply_container'>
                <form className='form_apply' action="/action.php">
                    <div className='form_input'>
                        <label for="utbildning">Välja utbildning:</label>
                        <input list="browsers" name="browsers"/>
                        <datalist id="browsers">
                            <option value= 'Course 1'/>
                            <option value= 'Course 2'/>
                            <option value= 'Course 3'/>
                            <option value= 'Course 4'/>
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
                    <div className='form_input'>
                        <label for="Textarea">Meddelande:</label>
                        <textarea type="text" id="email" value="Skriv meddelande..."/>
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