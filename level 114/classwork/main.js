// 1
const myObj = (
    <div>
        <p id="pt">Hello</p>
        <h2 id="h2-1">It is React</h2>
        <h3 id="h3-1">My name is Lizi</h3>
        <h4 id="h4-1">I am goa student</h4>
        <h6 id="h5-1">Start Programming</h6>
    </div>
);


const myObj2 = {
    name: "Nugzari",
    lastName: "Baghashvili",
    age: "99"
};

const el = (
    <div>
        <p>{myObj2.name}</p>
        <p>{myObj2.lastName}</p>
        <p>{myObj2.age}</p>
    </div>
);


const arrFunc = () => {
    const img1 = "https://opensource.fb.com/img/projects/facebook-react-native.jpg";
    const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1d3bYqO1ggFgMq7xv0aNpQxBVgPGuE-yl7KqjZRl7H4diqzUy6lbKdkFeSoT5a8LJHCw&usqp=CAU";
    
    const func = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <img
            alt="React"
            style={{color: "blue"}}
            >
            </img>
        </div>
    )


}