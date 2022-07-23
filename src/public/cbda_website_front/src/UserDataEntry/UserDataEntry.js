import React, {useState} from 'react';
import './UserDataEntry.css';


function UserDataEntry() {
    const [inputField, setInputField] = useState({
        user_name: '',
        email:'',
        phone_number: '',
        course:''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.first_name)
    }

    return (
        <div className="UserDataEntry">
            <input 
            type="text" 
            name="user_name" 
            onChange={inputsHandler} 
            placeholder="Name" 
            value={inputField.user_name}/>

            <br/>

            <input 
            type="email" 
            name="email" 
            onChange={inputsHandler} 
            placeholder="Email" 
            value={inputField.email}/>

            <br/>

            <input 
            type="number" 
            name="phone" 
            onChange={inputsHandler} 
            placeholder="Phone" 
            value={inputField.phone_number}/>

            <br/>
            <br/>
            <select placeholder='Course'
            value={inputField.course}
            onChange={inputsHandler}
            >
                <option value="bba">BBA</option>
                <option value="bba">BCom</option>
                <option value="bba">Law</option>
                <option value="bba">Psychology</option>
            </select>

            <button onClick={submitButton}>Submit Now</button>
        </div>

    )
}