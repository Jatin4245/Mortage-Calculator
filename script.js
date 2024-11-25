document.getElementById('calculate').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const type = document.querySelector('input[name="type"]:checked').value;
  
    let result;
    if (type === 'repayment') {
      const monthlyRate = rate / 100 / 12;
      const payments = term * 12;
      result = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
    } else if (type === 'interestOnly') {
      result = (amount * rate) / 100 / 12;
    }
  
    document.getElementById('resultText').textContent = result
      ? `Your monthly payment is £${result.toFixed(2)}`
      : 'Please fill in all fields correctly.';
  });
  