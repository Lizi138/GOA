const persons = [
    {userName: "Lizi", userAge: 12},
    {userName: "Sandro", userAge: 22}
];

const Comp = () => {
    return (
        <>
        <ul>
            {
                persons.map((el, i) => (
                    <li key={i}>
                        <p>{el.userAge}</p>
                        <h1>{el.userName}</h1>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default Comp;