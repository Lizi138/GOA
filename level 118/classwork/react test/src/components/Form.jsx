const Form = () => {
    const me = e => {
        e.preventDefault();

        const me1 = {
            name: e.target.name.value
        }

        console.log(me1)
    }
    return (
        <form onSubmit={me}>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;