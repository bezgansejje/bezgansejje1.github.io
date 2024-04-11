var formData = {};

document.getElementById('tourismForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        saveData();
        alert('Форма отправлена');
    } else {
        alert('Пожалуйста, заполните все обязательные поля');
    }
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    if (name === '' || email === '' || destination === '') {
        return false;
    } else {
        return true;
    }
}

function saveData() {
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.destination = document.getElementById('destination').value;
    formData.comments = document.getElementById('comments').value;
    formData.newsletter = document.getElementById('newsletter').checked;
}

function displayData() {
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = JSON.stringify(formData, null, 2);
}
