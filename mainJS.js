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


    let tablicaTytul = []; // tablica
    let tablicaNotatka = []; // tablica
    let tablicaData = []; // tablica
    let tablicaPinezka = []; // tablica
    // FUNKCJE I METODY

    // konstruktor notatki
    function NowaNotatka(title, note, date, pinned) {
        this.Title = title.value || title;
        this.Note = note.value || note;
        this.Datee = date.innerText = `Utworzono dnia: ${dniTygodnia[obecnaData.getDay()]} ${obecnaData.getDay()} ${miesiace[obecnaData.getMonth()]} ${obecnaData.getFullYear()}`;
        this.Pinned = pinned;


        this.Print = function () { // metoda zwracająca listę nienumerowaną, zawierającą tytuł, notatkę oraz datę utworzenia
            return `<li>${this.Title}</li><li>${this.Note}</li><li>${this.Datee}</li>`;
        }
    }

    // tworzenie obiektu - notatki
    btnDodaj.addEventListener("click", () => {

        let ul = document.createElement("ul");

        // tworzenie obiektu
        let nowyObiekt = new NowaNotatka(tytul, notatka, obecnaData.getDay(), pinezka.checked);
        ul.innerHTML = nowyObiekt.Print();

        // sprawdzanie czy notatka została przypięta
        if (pinezka.checked == true) {
            importantNotebook.appendChild(ul);
            pinezka.checked == false;
        } else {
            notebook.appendChild(ul);
        }
     });







});