let container = document.getElementById("container_1");

for (let i = 1; i <= 1000; i++) {


  if (i % 3 == 0 && i % 5 == 0) {
    let Fizzbuzz = "Fizzbuzz";
    container.innerHTML += `
      <div class="ciclo fizzbuzz">${Fizzbuzz}</div>
  `;
  } else if (i % 3 == 0) {

    let fizz = "Fizz";
    container.innerHTML += `
      <div class="ciclo fizz">${fizz}</div>
  `;

  } else if (i % 5 == 0) {

     let buzz = "Buzz";
     container.innerHTML +=
     `<div class="ciclo buzz">${buzz}</div> `;

  } else {
    container.innerHTML += `<div class="ciclo" >${i}</div>`;
  }
}