const intOne = document.querySelector("#intOne"),
    intTwo = document.querySelector("#intTwo"),
    btnPlus = document.querySelector(".btn-plus"),
    btnMinus = document.querySelector(".btn-minus"),
    btnKop = document.querySelector(".btn-kop"),
    btnBroke = document.querySelector(".btn-broke"),
    result = document.querySelector(".result");

btnPlus.addEventListener("click", () => {
    const resultPlus = parseInt(intOne.value)+parseInt(intTwo.value);
    result.innerHTML = `<p>${resultPlus}</p>`;
})
btnMinus.addEventListener("click", () => {
    const resultPlus = parseInt(intOne.value)-parseInt(intTwo.value);
    result.innerHTML = `<p>${resultPlus}</p>`;
})
btnKop.addEventListener("click", () => {
    const resultPlus = parseInt(intOne.value)*parseInt(intTwo.value);
    result.innerHTML = `<p>${resultPlus}</p>`;
})
btnBroke.addEventListener("click", () => {
    const resultPlus = parseInt(intOne.value)/parseInt(intTwo.value);
    result.innerHTML = `<p>${resultPlus}</p>`;
})