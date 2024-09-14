// List of 50 colors to choose from
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBD33",
    "#B833FF", "#33FFBD", "#A1FF33", "#FF3333", "#33A1FF",
    "#FF5733", "#57FF33", "#5733FF", "#33FF57", "#A133FF",
    "#FF5733", "#33FFBD", "#5733FF", "#FF3357", "#FF33A1",
    "#33BDFF", "#FF57A1", "#A1FFBD", "#57FF33", "#FF3333",
    "#BD33FF", "#5733BD", "#57A1FF", "#FF5733", "#3357FF",
    "#A1BD33", "#33FF33", "#FFBD57", "#5733A1", "#FF33BD",
    "#33A1FF", "#FF5733", "#33FFBD", "#5733FF", "#A133BD",
    "#57FF33", "#FF3357", "#33BDFF", "#A1FF33", "#FF57A1",
    "#FFBD33", "#3357FF", "#33A1FF", "#57FFBD", "#FF33BD"
];

// Function to change the background color
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Listen for a keypress (spacebar) or click event
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeBackgroundColor();
    }
});

document.addEventListener('click', changeBackgroundColor);
