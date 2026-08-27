// Show a message when the page loads
console.log("ATM System Portfolio loaded successfully.");

// ATM keypad buttons
const keypadButtons = document.querySelectorAll(".atm-keypad button");

keypadButtons.forEach(function(button) {

```
button.addEventListener("click", function() {

    console.log("ATM button pressed:", button.textContent);

});
```

});

// Update footer year automatically
const year = document.querySelector("#year");

if (year) {
year.textContent = new Date().getFullYear();
}

