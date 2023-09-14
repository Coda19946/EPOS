let alltotal = 0;
let brojac = 0;
function addToCart(element) {
  let mainEl = element.closest(".proizvod");
  let price = mainEl.querySelector("p").innerText;
  let naziv = mainEl.querySelector("h3").innerText;
  let kolicina = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");
  let ukupnaCena = document.querySelector(".total");
  let dugme = document.querySelector(".izvrsiKupovinu");
  kolicina = parseInt(kolicina);
  if (kolicina > 0) {
    price = price.slice(6, 8);
    price = parseInt(price);
    let total = price * kolicina;
    element.setAttribute("disabled", "true");
    element.innerText = "Dodato";
    alltotal += total;
    cartItems.innerHTML += `<div class="cart-single-item">
                            <h3>${naziv}</h3>
                            <p>$${price} x ${kolicina} = $<span>${total}</span>
                            <button onclick="removeFromCart(this)" >Ukloni</button> </p>
                            </div>`;
    ukupnaCena.innerHTML = `Ukupno: ${alltotal}$`;
    dugme.innerHTML = `<a href="kontakt.html"><button>Kupi</button></a>`;
    brojac++;
  } else {
    alert("Odaberi kolicinu");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let ukupnaCena = document.querySelector(".total");
  let cena = mainEl.querySelector("span").innerText;
  let naziv = mainEl.querySelector("h3").innerText;
  let voce = document.querySelectorAll(".proizvod");
  let dugme = document.querySelector(".izvrsiKupovinu");
  console.log(voce);
  alltotal = alltotal - cena;
  ukupnaCena.innerHTML = `Ukupno: ${alltotal}$`;
  brojac--;
  mainEl.remove();
  voce.forEach(function (i) {
    if (i.querySelector(".proizvod h3").innerText === naziv) {
      i.querySelector(".dugme button").removeAttribute("disabled");
      i.querySelector(".dugme button").innerText = "Dodaj";
      i.querySelector(".proizvod input").value = 0;
    }
  });

  if (brojac == 0) {
    dugme.innerHTML = `<div></div>`;
    ukupnaCena.innerHTML = `<div></div>`;
  }
}

function posalji(element) {
  let ime = document.querySelector("#ime").value;
  let email = document.querySelector("#email").value;
  let brojTelefona = document.querySelector("#broj").value;
  let adresa = document.querySelector("#adresa").value;
  let grad = document.querySelector("#grad").value;
  let postanskiBroj = document.querySelector("#postanskiBroj").value;
  let poruka = document.querySelector("#porukaIspisa");

  if (
    ime === "" ||
    email === "" ||
    brojTelefona === "" ||
    adresa === "" ||
    grad === "" ||
    postanskiBroj === ""

  ) {
    alert("Niste popunili sve podatke koji nam trebaju!");
  } else {
    alert(
      `Ime i prezime: ${ime}
       Broj telefona: ${brojTelefona} 
       Email: ${email}
       Drzava: ${document.getElementById("country" ).value}
       Adresa:${adresa}
       Grad: ${grad}
       Poruka: ${document.getElementById("message" ).value}
       Porudzbina ce biti isporučena na dostavljenu adresu.
       Hvala na kupovini!
      `
    );
    element.setAttribute("disabled", "true");
    element.innerText = "Poslato";
    poruka.innerHTML += `<div class="posiljka">Posiljka je poslata</div>`;
  }
}
