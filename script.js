let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'DE') {
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target);
            string += e.target.innerHTML;
            // console.log(string);
            document.querySelector('input').value = string;
        }
    })
})