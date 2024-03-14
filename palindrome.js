const form = document.getElementById("palindrome-form");
// console.log("check palindrome form", checkButton);
const palindromeInput = document.getElementById("text-input");
// console.log("palindrome Input:", palindromeInput);
const result = document.getElementById("result");
// console.log("result is:", result);

const palindrome = (str) => {
  // give a value to str
  str = palindromeInput.value;
  // create a new cleaned up string regex
  const cleanStr = str.replace(/[^A-Za-z0–9]/g, "");
  // check if the cleanStr is a palindrome
  const isPalindrome = cleanStr.toLowerCase() === cleanStr.split("").reverse().join("").toLowerCase();
  
  if (isPalindrome && cleanStr.length >= 1) {
    result.classList.remove("hidden")
    result.textContent = `${str.toUpperCase()} is a palindrome!`
  } else {
    result.classList.remove("hidden")
    result.textContent = `${str.toUpperCase()} is not a palindrome.`
  }

  return isPalindrome;
}

const empty = () => {
  if (palindromeInput.value === "") {
    alert("Please input a value");
  }
};

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    empty();
    palindrome()
  });
}
