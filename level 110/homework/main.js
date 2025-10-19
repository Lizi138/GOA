// 1
const asyncFun = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        const users = await response.json();

        console.log(users);
        for (const user of users) {
        console.log(user.name);
    }
    } catch (error) {
        console.error(error);
    }
}

fetchUserData();

// 2
async function handleApiError() {
    const badUrl = "https://jsonplaceholder.typicode.com/invalidEndpoint";

    try {
        const response = await fetch(badUrl);

    if () {
        new Promise(response.status);
    }

    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error("Custom Error: Could not fetch data. Please check the API link.");
    }
}

handleApiError();
