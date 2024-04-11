var formData = {};

document.getElementById('tourismForm').addEventListener('submit', function(event) {
    event.preventDefault();
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.destination = document.getElementById('destination').value;
    formData.comments = document.getElementById('comments').value;
    formData.newsletter = document.getElementById('newsletter').checked;
});

function displayData() {
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = JSON.stringify(formData, null, 2);
}
