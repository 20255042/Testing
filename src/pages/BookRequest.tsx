import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
interface FeedbackData {name: string;
course: string;
feedback: string;
}
function BookRequest() {
// Controlled Form State
const [name, setName] = useState<string>("");
const [course, setCourse] = useState<string>("");
const [feedback, setFeedback] = useState<string>("");
const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);

// Controlled Submit
const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data: FeedbackData = {
name,
course,
feedback
};
setSubmittedData(data);
setName("");
setCourse("");
setFeedback("");
};
return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
<h1>Student Feedback Exercise</h1>
{/* Controlled Form */}
<h2>Controlled Form</h2>
<form onSubmit={handleControlledSubmit}>
<div>
<label>Name:</label><br/>
<input
type="text"
value={name}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setName(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Course:</label><br/>
<input
type="text"
value={course}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setCourse(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Feedback:</label><br/>
<textarea
value={feedback}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setFeedback(e.target.value)
}
/>
</div>
<br/>
<button type="submit">
Submit Controlled Form
</button>
</form>
{/* Display Controlled Data */}
{submittedData && (
<div style={{ marginTop: "20px" }}>
<h3>Submitted Feedback</h3>

<p><strong>Name:</strong> {submittedData.name}</p>
<p><strong>Course:</strong> {submittedData.course}</p>
<p><strong>Feedback:</strong> {submittedData.feedback}</p>
</div>
)}
<hr style={{ margin: "40px 0" }}/>

</div>
);
}
export default BookRequest;