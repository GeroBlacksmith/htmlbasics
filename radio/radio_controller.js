function mostrar(elem) {
    var elemento = elem.toElement;
    resetTabs(elemento.value);
    //console.log(elemento.value);
}
function resetTabs(choice) {

    var tab = document.querySelectorAll('.tabs');
    if (choice === undefined) {
        for (t in tab) {

            if (!(isNaN(t))) {

                tab[t].style.display = "none";

            }


        }
    } else {
        for (t in tab) {

            if (!(isNaN(t))) {
                if (choice === t) {
                    tab[t].style.display = "block";
                } else {
                    tab[t].style.display = "none";
                }
            }


        }
    }
}

function load() {
    var radio = document.querySelectorAll('.radios');

    for (r in radio) {
        if (!(isNaN(r))) {
            radio[r].addEventListener('click', mostrar, false);
        }
    }

    resetTabs();

}
document.addEventListener('DOMContentLoaded', load, false);