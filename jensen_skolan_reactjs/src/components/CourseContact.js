import React, { useRef} from "react";
import "./CourseContact.css";

function CourseContact() {

    const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const adressRef = useRef(null)
    const postRef = useRef(null)
    const ortRef = useRef(null)
    const kursIdRef = useRef(null)
    const messageRef =  useRef(null)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            Förnamn: firstNameRef.current.value,
            Efternamn: lastNameRef.current.value,
            Epost: emailRef.current.value,
            Telefonnummer: phoneRef.current.value,
            Adress: adressRef.current.value,
            Postnummer: postRef.current.value,
            Ort: ortRef.current.value,
            KursId: kursIdRef.current.value,
            KursIdn: messageRef.current.value
        }
        alert("Din anmälan har skickats med följande uppgifter: \n" + JSON.stringify(data))
    }

    return (
        <div  className="container-course">
            <h2>Intresseanmälan för Kurs/er</h2>
            <form onSubmit={handleSubmit} className="form-course">
                <div className="name">
                    <label for="firstName" id="nameLabel">FÖRNAMN</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        ref={firstNameRef} 
                        tabindex="1" 
                        required
                    />
                    
                    <label for="lastName">EFTERNAMN</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabindex="2"  
                        required
                    />
                </div>
                <label for="email">E-POSTADRESS</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="exempel@jensen.se"
                ref={emailRef}
                tabindex="3" 
                required
                />

                <label for="phone">TELEFONNUMMER</label>
                <input 
                type="text" 
                id="phone"
                className="phone"
                placeholder="07********"
                ref={phoneRef}
                tabindex="4" 
                required
                />

                <label for="adress">ADRESS</label>
                <input 
                type="text" 
                id="adress"
                className="adress"
                ref={adressRef}
                tabindex="5" 
                required
                />

                <label for="postnummer">POSTNUMMER</label>
                <input 
                type="text" 
                id="postnummer"
                className="postnummer"
                ref={postRef}
                tabindex="6" 
                required
                />

                <label for="ort">ORT</label>
                <input 
                type="text" 
                id="ort"
                className="ort"
                ref={ortRef}
                tabindex="7" 
                required
                />

                <label for="kursId">KURSID</label>
                <input 
                type="text" 
                id="kursId"
                className="kursId"
                ref={kursIdRef}
                tabindex="8" 
                />

                <label for="message">ID VID FLERA KURSER</label>
                <textarea 
                placeholder="Ange ID för alla kurser som du är intresserad av:" 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">SKICKA ANMÄLAN</button>
            </form>
        </div>
    )
}

export default CourseContact;