function clearScreen() {
    document.getElementById("result").value = "";
  }
    function calculate() {
    try {
      document.getElementById("result").value = eval(document.getElementById("result").value)
    } catch (e) {
      alert(e.message)
    }
  }
  
  function displayResult(value) {
  
    let operators = ["+", "-", "*", "/", "."]
    let resultInputValue = document.getElementById("result").value
    let lastCharacter = resultInputValue.charAt(resultInputValue.length - 1)

    if (operators.includes(value) && operators.includes(lastCharacter)) {
      console.log('entered')
      let valueWithoutLastOperator = resultInputValue.substr(0, resultInputValue.length - 1);
      document.getElementById("result").value = valueWithoutLastOperator + value
      return
    }
  
    document.getElementById("result").value += value;
  }
  
