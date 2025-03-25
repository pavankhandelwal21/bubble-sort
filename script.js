const arrayListElement = document.getElementById("array_list");
const arraySizeElement = document.getElementById("array_size");
const animationSpeedElement = document.getElementById("animation_speed");
const arrayLengthInput = document.getElementById("input-array-size");
const animationSpeedInput = document.getElementById("input-animation-speed");
let arrayLength = 0;
let animationSpeed = 100;
let array = [];

arrayLengthInput.addEventListener('input', (e) => {
    arraySizeElement.innerHTML = arrayLength = +e.target.value;
});

animationSpeedInput.addEventListener('input', (e) => {
    animationSpeedElement.innerHTML = animationSpeed = +e.target.value;
});

window.addEventListener('load', () => {
    arraySizeElement.innerHTML = arrayLength;
    animationSpeedElement.innerHTML = animationSpeed;
})

function addGeneratedArray(){
    array = Array.from({length: arrayLength}, () => Math.floor(Math.random() * 99) + 1);
    arrayListElement.innerHTML = '';
    array.forEach(e => arrayListElement.innerHTML += `
        <li class="text-center">
            <label class="eb-label">${e}</label>
            <div class="array-list-item" style="background-color: greenyellow; height: ${e}px;"></div>
        </li>
    `)
}

async function wait(duration) { 
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function swapHeightElements(e1, e2) {
    const e1Height = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = e1Height;
}

async function swapLabelElements(e1, e2) {
    const divElement1 = e1.innerHTML;
    e1.innerHTML = e2.innerHTML;
    e2.innerHTML = divElement1;
}

async function bubbleSort(){
    const labels = document.querySelectorAll(".eb-label");
    const height = document.querySelectorAll("li div");
    for (let i = 0; i < array.length; i++) {
        isSwapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            heightElement1 = height[j];
            heightElement2 = height[j+1];
            heightElement1.style.backgroundColor = 'yellow';
            heightElement2.style.backgroundColor = 'yellow';
            await wait(animationSpeed);
            if (parseInt(heightElement1.style.height) > parseInt(heightElement2.style.height)) {
                await wait(animationSpeed);
                swapHeightElements(heightElement1, heightElement2);
                swapLabelElements(labels[j], labels[j+1]);
                isSwapped = true;
            }
            heightElement1.style.backgroundColor = 'greenyellow';
            heightElement2.style.backgroundColor = 'greenyellow';
        }
        heightElement2.style.backgroundColor = 'green';
        // if (!isSwapped) {
        //     height.style.backgroundColor = 'green';
        //     break;
        // }
    }
}
