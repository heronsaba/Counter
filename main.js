const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const value = document.querySelector("#value");
count = 0;

increment = () => {
    count = count + 1;
    value.textContent = count;
    changeColor(count);

}
zero = () => {
    count = 0;
    value.textContent = count;
    changeColor(count);

}
decrement = () => {
    count = count - 1;
    value.textContent = count;
    changeColor(count);

}

changeColor = (count) => {
    if (count > 0) {
        value.style.color = "green";
    }
    else if (count === 0){
        value.style.color = "#222";
    }
    else if (count <0){
        value.style.color = "red";
    }
}


increase.addEventListener('click', increment);
decrease.addEventListener('click', decrement);
reset.addEventListener('click', zero);