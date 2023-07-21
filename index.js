const element = document.getElementById("steppp");
const { forward, backward, moveTo } = Steppp(element);

document.querySelector("#forward").addEventListener("click", () => {
    forward();
});

document.querySelector("#backward").addEventListener("click", () => {
    backward();
});

document.querySelector("#moveToStepA").addEventListener("click", () => {
    moveTo("step_a");
});

function changeFeeling() {
    const feeling = document.getElementById('feeling')
    if (feeling.innerHTML === "Happy") {
        feeling.innerHTML = "Sad"
    } else {
        feeling.innerHTML = "Happy"
    }
}