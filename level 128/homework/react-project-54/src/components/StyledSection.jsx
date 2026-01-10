const StyledSection = () => {
  const styles = {
    container: {
        padding: "30px",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial",
        borderRadius: "10px",
        maxWidth: "700px",
        margin: "40px auto",
    },
    title: {
        color: "#333",
        marginBottom: "15px",
        textAlign: "center",
    },
    paragraph: {
        color: "#555",
        lineHeight: "1.6",
        marginBottom: "10px",
    },
    list: {
        paddingLeft: "20px",
        marginBottom: "15px",
    },
    listItem: {
        backgroundColor: "#fff",
        marginBottom: "8px",
        padding: "8px",
        borderRadius: "5px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    footer: {
        marginTop: "20px",
        textAlign: "center",
        color: "#777",
        fontSize: "14px",
    },
};

    return (
        <div style={styles.container}>
        <h2 style={styles.title}>Stateless Styled Component</h2>

        <p style={styles.paragraph}>
            ეს არის stateless კომპონენტი. მას არ აქვს state და არ იყენებს hooks.
        </p>

        <p style={styles.paragraph}>
            ყველა ელემენტი გასტილულია მხოლოდ inline styles-ის გამოყენებით.
        </p>

        <ul style={styles.list}>
            <li style={styles.listItem}>პირველი ელემენტი</li>
            <li style={styles.listItem}>მეორე ელემენტი</li>
            <li style={styles.listItem}>მესამე ელემენტი</li>
        </ul>

        <button style={styles.button}>დააჭირე</button>

        <div style={styles.footer}>
            © 2026 Stateless Component Example (ტექსტები AI-ს მოვაფიქრებინე დიდად კარგად ვერ მოვიფიქრე :D)
        </div>
        </div>
    );
};

export default StyledSection;
