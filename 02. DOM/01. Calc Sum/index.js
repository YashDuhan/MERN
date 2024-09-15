function populateDiv() {
  const firstnumber = document.getElementById("firstNumber").value;
  const secondnumber = document.getElementById("secondNumber").value;

  // Parse the values as integers and sum them
  const sum = parseInt(firstnumber) + parseInt(secondnumber);

  // Display the sum
  const element = document.getElementById("finalSum");
  element.innerHTML = sum;
}
