// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLInputElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLInputElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

    // Input validation: Check if all fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all the fields.');
        return; // Stop the form submission if any field is empty
    }

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${sanitizeInput(name)}</p>
        <p><b>Email:</b> ${sanitizeInput(email)}</p>
        <p><b>Phone:</b> ${sanitizeInput(phone)}</p>

        <h3>Education</h3>
        <p>${sanitizeInput(education)}</p>

        <h3>Experience</h3>
        <p>${sanitizeInput(experience)}</p>

        <h3>Skills</h3>
        <p>${sanitizeInput(skills)}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});

// Function to sanitize input and prevent XSS attacks
function sanitizeInput(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
