let cells = document.querySelectorAll("#field td")
//let butt = document.querySelector(".button")
let i = 0

for (let cell of cells) {
    cell.addEventListener('click', function start() {
        if (i % 2 == 0) {
            this.textContent = "X"
        }
        else {
            this.textContent = "O"
        }
        i++;

        this.removeEventListener("click", start)
        if (isWinner(cells) === true) {
            console.log(`Победитель ${this.textContent}`)
        }
    })


}


function isWinner(cells) {

    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true
        }
        return false;
    }
}

















/*
let b = 0;
butt.addEventListener("click", function () {
    if (i % 2 == 0) {
        this.textContent = "O"
        i = 1
    }
    else {
        this.textContent = "X"
        i = 0
    }
})
*/



