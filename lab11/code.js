function calculateSum() {
  var n = document.getElementById('numberN').value;
  var m = document.getElementById('numberM').value;
  var sum = 0;
  if (!isNaN(n) && !isNaN(m) && n && m) {
    n = parseInt(n, 10);
    m = parseInt(m, 10);
    let lastDigits = n.toString().slice(-m);
    for (let digit of lastDigits) {
      sum += parseInt(digit, 10);
    }
    alert("Сумма последних " + m + " цифр числа " + n + " равна: " + sum);
  } else {
    alert("Пожалуйста, введите действительные числа.");
  }
}