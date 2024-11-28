// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Input validation: Check if all fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all the fields.');
        return; // Stop the form submission if any field is empty
    }
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(sanitizeInput(name), "</p>\n        <p><b>Email:</b> ").concat(sanitizeInput(email), "</p>\n        <p><b>Phone:</b> ").concat(sanitizeInput(phone), "</p>\n\n        <h3>Education</h3>\n        <p>").concat(sanitizeInput(education), "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(sanitizeInput(experience), "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(sanitizeInput(skills), "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
// Function to sanitize input and prevent XSS attacks
function sanitizeInput(input) {
    var div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
