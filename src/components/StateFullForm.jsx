import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] =useState()
    const [name, setName] =useState()
    const [password, setPassword] =useState()
    const [error, setError] =useState()
    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length <6){
            setError('Password must be 6 characters long')
        }
        else{
            setError("")
            console.log(name, email, password);
        }
    }
    const handleNameChange = e =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)
        
        
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input required placeholder="Name" onChange={handleNameChange} className="border-2 mt-2 p-3 border-black rounded-md" name="name" type="text" />
                <br />
                <input required placeholder="Email" onChange={handleEmailChange} className="border-2 mt-2 p-3 border-black rounded-md" name="email" type="email" />
                <br />
                <input required placeholder="Number" onChange={handlePasswordChange} className="border-2 mt-2 p-3 border-black rounded-md" name="password" type="password" />
                <br />
                <input className="btn btn-primary mt-5" type="submit" value="Submit" />
            </form>
            {
                error && <p className="text-red-600 ">{error}</p>
            }
        </div>
    );
};

export default StateFullForm;