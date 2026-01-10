import { useEffect, useState } from "react";

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) { 
            throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchUsers();
    }, []);

    const styles = {
        container: {
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        },
        userItem: {
        padding: "10px",
        marginBottom: "8px",
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "4px",
        },
        detailBox: {
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "6px",
        },
        title: {
        marginBottom: "15px",
        },
    };

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading users...</h2>;
    }

    if (error) {
        return (
        <h2 style={{ textAlign: "center", color: "red" }}>
            Error: {error}
        </h2>
        );
    }

    return (
        <div style={styles.container}>
        <h2 style={styles.title}>User Dashboard</h2>

        {users.map((user) => (
            <div
            key={user.id}
            style={styles.userItem}
            onClick={() => setSelectedUser(user)}
            >
            <strong>{user.name}</strong>
            <br />
            <span>{user.email}</span>
            </div>
        ))}

        {selectedUser && (
            <div style={styles.detailBox}>
            <h3>User Details</h3>
            <p>
                <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
                <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
                <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
                <strong>Company:</strong> {selectedUser.company.name}
            </p>
            </div>
        )}
        </div>
    );
};

export default UserDashboard;
