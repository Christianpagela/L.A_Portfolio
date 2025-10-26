// Responsive Navigation
const toggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Animated Typing Effect for Name
const nameEl = document.getElementById('student-name');
const nameText = "Your Name";
let i = 0;
function typeName() {
    if (i < nameText.length) {
        nameEl.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeName, 120);
    } else {
        nameEl.textContent = nameText;
    }
}
nameEl.textContent = "";
typeName();

// Modal for Projects
function showModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('project-modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Download CV Button
document.getElementById('download-cv').addEventListener('click', function() {
    // Replace with your actual CV link
    window.open('https://example.com/your-cv.pdf', '_blank');
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        document.getElementById('contact-response').textContent = "Thanks for reaching out, " + name + "! I'll get back to you soon.";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('contact-response').textContent = "Please fill in all fields.";
    }
});
