let cells = document.querySelectorAll(".cells"); 


let counter = 0;
let side;

for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    element.addEventListener("click", (e) => {
        const id = e.target.id;
        let vertical1 = document.querySelectorAll(".vertical1"); 
        let vertical2 = document.querySelectorAll(".vertical2");
        let vertical3 = document.querySelectorAll(".vertical3");  
        if (counter % 2 == 0) {
            document.getElementById(id).innerHTML = '<p>o</p>';
            document.getElementById(id).classList.add("o");
            side = "o";
        } else {
            document.getElementById(id).innerHTML = '<p>x</p>';
            document.getElementById(id).classList.add("x");
            side = "x";
        }
        document.getElementById(id).classList.add("disabled");
        let arrayVertical1 = [];
        for (let index = 0; index < vertical1.length; index++) {
            const element = vertical1[index];
            arrayVertical1.push(element.innerHTML)
        }

        let arrayVertical2 = [];
        for (let index = 0; index < vertical2.length; index++) {
            const element = vertical2[index];
            arrayVertical2.push(element.innerHTML)
        }

        let arrayVertical3 = [];
        for (let index = 0; index < vertical3.length; index++) {
            const element = vertical3[index];
            arrayVertical3.push(element.innerHTML)
        }

        const allSame1 = arrayVertical1.every((val, i, arr) => val == arr[0]);
        const hasEmpty1 = arrayVertical1.some((val) => !val);
        if(allSame1 === true && hasEmpty1 === false) {
            window.alert(side + " win");
        }

        const allSame2 = arrayVertical2.every((val, i, arr) => val == arr[0]);
        const hasEmpty2 = arrayVertical2.some((val) => !val);
        if(allSame2 === true && hasEmpty2 === false) {
            alert(side + " win");
        }
        const allSame3 = arrayVertical3.every((val, i, arr) => val == arr[0]);
        const hasEmpty3 = arrayVertical3.some((val) => !val);
        if(allSame3 === true && hasEmpty3 === false) {
            alert(side + " win");
        }
        counter++;
    })
}