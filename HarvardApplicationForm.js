import React, { useState } from "react";

const HarvardApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        personalStatement: "",
        leadershipExperience: "",
        academicAchievements: "",
        extracurriculars: "",
        futureGoals: "",
        additionalDocuments: null,
        interviewAvailability: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        alert("Harvard Application submitted successfully!");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Harvard College Application</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                {renderInput("Full Name", "name", formData.name, handleChange)}
                {renderInput("Email", "email", formData.email, handleChange, "email")}
                {renderInput("Date of Birth", "dob", formData.dob, handleChange, "date")}
                {renderTextarea("Personal Statement (500 words max)", "personalStatement", formData.personalStatement, handleChange)}
                {renderTextarea("Describe a Leadership Experience", "leadershipExperience", formData.leadershipExperience, handleChange)}
                {renderTextarea("Academic Achievements", "academicAchievements", formData.academicAchievements, handleChange)}
                {renderTextarea("Extracurricular Activities", "extracurriculars", formData.extracurriculars, handleChange)}
                {renderTextarea("Future Goals and Aspirations", "futureGoals", formData.futureGoals, handleChange)}
                {renderInput("Interview Availability (Date & Time)", "interviewAvailability", formData.interviewAvailability, handleChange, "datetime-local")}
                <label style={styles.label}>Upload Additional Documents</label>
                <input type="file" name="additionalDocuments" onChange={handleChange} style={styles.fileInput} />
                <button type="submit" style={styles.button}>Submit Application</button>
            </form>
        </div>
    );
};

const renderInput = (label, name, value, onChange, type = "text") => (
    <div>
        <label style={styles.label}>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} style={styles.input} required />
    </div>
);

const renderTextarea = (label, name, value, onChange) => (
    <div>
        <label style={styles.label}>{label}</label>
        <textarea name={name} value={value} onChange={onChange} style={styles.textarea} rows="5" required />
    </div>
);

const styles = {
    container: {
        background: "#A51C30",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        width: "80%",
        maxWidth: "800px",
        margin: "50px auto",
        fontFamily: "Georgia, serif",
        color: "white"
    },
    heading: {
        textAlign: "center",
        fontSize: "28px",
        marginBottom: "20px"
    },
    form: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        color: "black"
    },
    label: {
        fontWeight: "bold",
        display: "block",
        marginTop: "10px"
    },
    input: {
        width: "100%",
        padding: "10px",
        marginTop: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    },
    textarea: {
        width: "100%",
        padding: "10px",
        marginTop: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    },
    fileInput: {
        display: "block",
        marginTop: "10px"
    },
    button: {
        background: "#A51C30",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginTop: "15px",
        fontWeight: "bold"
    }
};

export default HarvardApplicationForm;
