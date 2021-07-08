// const decrease = document.querySelector('.btn-one');
// const reset = document.querySelector('.btn-two');
// const increase = document.querySelector('.btn-three');
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

let count = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
  
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;
    });
  });
  
















// Old Faulty Code
/*
let currentValue = Number(value.textContent);


reset.addEventListener('click', () => {
    value.textContent = "0";
})

increase.addEventListener('click', () => {
    currentValue++;
    value.textContent = currentValue; 
})

decrease.addEventListener('click', () => {
    currentValue--;
    value.textContent = currentValue;
})
*/





