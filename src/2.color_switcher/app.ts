const hexValues: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B"
    , "C", "D", "E", "F"];

const btn = document.getElementById('btn')!;
const color = document.querySelector('.color')!;


// btn.addEventListener('click', function (): void {
//     let hexColor: string = "#";

//     // Para armar una cadena con el formato #000000
//     for (let i:number = 0; i < 6; i++) {
//         hexColor += hexValues[getRandomNumber()];
//     }

//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
// });

btn.addEventListener('click', function (): void {
    generateColor((x) => {
        color.textContent = x;
        document.body.style.backgroundColor = x;
    });
});

function generateColor(update: (color: string) => void) {
    let hexColor: string = "#";

    for (let i: number = 0; i < 6; i++) {
        hexColor += hexValues[getRandomNumber()];
    }

    update(hexColor);
}

function getRandomNumber(): number {
    return Math.floor(Math.random() * hexValues.length);
}