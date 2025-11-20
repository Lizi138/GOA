function Example() {
    const userRole = "admin";
    const isAvailable = true;
    const price = "$20";
    const isDaytime = false;
    const hasNotification = true;
    const email = "user@example.com";
    const discount = 10;

    return (
        <div>
        <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>
        <p>{isAvailable ? price : "Out of stock"}</p>
        <img src={isDaytime ? "sun.png" : "moon.png"} />
        {hasNotification && <p>New Notification</p>}
        {email && <p>{email}</p>}
        {discount > 0 && <p>Discount Available!</p>}

        </div>
    );
}

export default Example;
