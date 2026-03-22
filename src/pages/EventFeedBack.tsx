import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
interface FeedbackData {
name: string;
course: string;
feedback: string;
}
function EventFeedBack() {

// Uncontrolled Form Refs
const nameRef = useRef<HTMLInputElement>(null);
const courseRef = useRef<HTMLInputElement>(null);
const feedbackRef = useRef<HTMLTextAreaElement>(null);

// Uncontrolled Submit
const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
if (nameRef.current && courseRef.current && feedbackRef.current) {
const data: FeedbackData = {
name: nameRef.current.value,
course: courseRef.current.value,
feedback: feedbackRef.current.value
};
console.log("Uncontrolled Form Data:", data);
alert("Check the console for submitted data.");
}
};
return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
<h1>Student Feedback Exercise</h1>
{/* Uncontrolled Form */}
<h2>Uncontrolled Form</h2>
<form onSubmit={handleUncontrolledSubmit}>
<div>
<label>Name:</label><br/>
<input type="text" ref={nameRef}/>
</div>
<br/>
<div>
<label>Course:</label><br/>
<input type="text" ref={courseRef}/>
</div>
<br/>
<div>
<label>Feedback:</label><br/>
<textarea ref={feedbackRef}/>
</div>
<br/>
<button type="submit">
Submit Uncontrolled Form
</button>
</form>
</div>
);
}

export default EventFeedBack;