import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null)
    const emailRef =useRef(null)
    const passwordRef =useRef(null)
    useEffect(() =>{
        nameRef.current.focus()
    },[])
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="Name" className="border-2 mt-2 p-3 border-black rounded-md" name="name" type="text" />
                <br />
                <input ref={emailRef} placeholder="Email" defaultValue={'shr2692004@gmail.com'} className="border-2 mt-2 p-3 border-black rounded-md" name="email" type="text" />
                <br />
                <input ref={passwordRef} placeholder="Password" className="border-2 mt-2 p-3 border-black rounded-md" name="phone" type="text" />
                <br />
                <input className="btn btn-primary mt-5" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;