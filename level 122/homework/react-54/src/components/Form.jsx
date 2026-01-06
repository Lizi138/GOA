function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();

    const data = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        age: event.target.age.value,
    };

    console.log(data);
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First name" />
        <input type="text" name="lastName" placeholder="Last name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="age" placeholder="Age" />

        <button type="submit">Submit</button>
    </form>
    );
}

export default Form;
