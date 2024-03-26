
const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("form Submitted")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" className="border-2 mt-2 p-3 border-black rounded-md" name="name" type="text" />
                <br />
                <input placeholder="Email" className="border-2 mt-2 p-3 border-black rounded-md" name="email" type="text" />
                <br />
                <input placeholder="Number" className="border-2 mt-2 p-3 border-black rounded-md" name="phone" type="text" />
                <br />
                <input className="btn btn-primary mt-5" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;