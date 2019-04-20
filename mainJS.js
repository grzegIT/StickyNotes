window.addEventListener("load", () => {

    // zmienne 
    let notebook = document.getElementById("notebook"),
        importantNotebook = document.getElementById("importantNotebook"),
        tytul = document.getElementById("newTitle"),
        notatka = document.getElementById("newNote"),
        pinezka = document.getElementById("pin");
    const btnDodaj = document.getElementById("add");

    const obecnaData = new Date();
    const miesiace = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "pażdziernik", "listopad", "grudzień"];
    const dniTygodnia = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

    /* FUNKCJE I METODY */
    // konstruktor notatki
    function NowaNotatka(title, note, date, pinned) {
        this.Title = title.value || title;
        this.Note = note.value || note;
        this.Datee = date.innerText = `Utworzono dnia: ${dniTygodnia[obecnaData.getDay()]} ${obecnaData.getDay()} ${miesiace[obecnaData.getMonth()]} ${obecnaData.getFullYear()}`;
        this.Pinned = pinned;


        this.Print = function () { // metoda zwracająca listę nienumerowaną, zawierającą tytuł, notatkę oraz datę utworzenia
            return `<li>${this.Title}</li><li>${this.Note}</li><li>${this.Datee}</li>`;
        }
        // zapisywanie obiektu do localstorage
        localStorage.setItem(this.Title + this.Note + this.Pinned + this.Datee, JSON.stringify(this));
    }

    // tworzenie obiektu - notatki
    btnDodaj.addEventListener("click", () => {

        let ul = document.createElement("ul");

        // tworzenie obiektu
        let nowyObiekt = new NowaNotatka(tytul, notatka, obecnaData.getDate(), pinezka.checked);
        ul.innerHTML = nowyObiekt.Print();

        // sprawdzanie czy notatka została przypięta
        if (pinezka.checked == true) {
            importantNotebook.appendChild(ul);
            pinezka.checked == false;
        } else {
            notebook.appendChild(ul);
        }     
    });

    //  wyświetlanie pobranych notatek z localStorage
    for(let klucz in localStorage){
        let odzyskanyObiekt = JSON.parse(localStorage.getItem(klucz));
        let ul = document.createElement("ul");
        // tworzenie obiektu
        let nowyObiekt = new NowaNotatka(odzyskanyObiekt.Title, odzyskanyObiekt.Note,  odzyskanyObiekt.Datee, odzyskanyObiekt.Pinned);
        ul.innerHTML = nowyObiekt.Print();
        // sprawdzanie czy notatka została przypięta
        if (odzyskanyObiekt.Pinned == true) {
            importantNotebook.appendChild(ul);
            odzyskanyObiekt.Pinned == false;
        } else {
            notebook.appendChild(ul);
        }
    }
});