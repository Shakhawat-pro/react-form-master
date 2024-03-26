import useInputState from "./hook/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('name')
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} placeholder="Name" className="border-2 mt-2 p-3 border-black rounded-md" name="name" type="text" />
                <br />
                <input placeholder="Email" className="border-2 mt-2 p-3 border-black rounded-md" name="email" type="text" />
                <br />
                <input placeholder="password" className="border-2 mt-2 p-3 border-black rounded-md" name="phone" type="text" />
                <br />
                <input className="btn btn-primary mt-5" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default HookForm;