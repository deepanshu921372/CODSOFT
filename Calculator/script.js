let display = document.querySelector("#display");

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
  display.value += char;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function sinf() {
  try {
    display.value = Math.sin(parseFloat(display.value));
  } catch (e) {
    display.value = "Error";
  }
}

function cosf() {
  try {
    display.value = Math.cos(parseFloat(display.value));
  } catch (e) {
    display.value = "Error";
  }
}

function tanf() {
  try {
    display.value = Math.tan(parseFloat(display.value));
  } catch (e) {
    display.value = "Error";
  }
}

function sqrtf() {
  try {
    display.value = Math.sqrt(parseFloat(display.value));
  } catch (e) {
    display.value = "Error";
  }
}