const slide1 = document.querySelector('.eco');
const slide2 = document.querySelector('.fam');
const slide3 = document.querySelector('.lux');

const carName1 = document.querySelector('.car-name1');
const carName2 = document.querySelector('.car-name2');
const carName3 = document.querySelector('.car-name3');


const imgSlide1 = document.querySelector('.eco .car-img');
const imgSlide2 = document.querySelector('.fam .car-img');
const imgSlide3 = document.querySelector('.lux .car-img');


const categoryE = document.querySelector('.select-economy');
const categoryF = document.querySelector('.select-family');
const categoryL = document.querySelector('.select-luxury');


const prevBtnE = document.querySelector('.prevE');
const nextBtnE = document.querySelector('.nextE');
const prevBtnF = document.querySelector('.prevF');
const nextBtnF = document.querySelector('.nextF');
const prevBtnL = document.querySelector('.prevL');
const nextBtnL = document.querySelector('.nextL');
let counter = 1;

nextBtnE.addEventListener('click', slidePlusE);
prevBtnE.addEventListener('click', slideMinusE);
nextBtnF.addEventListener('click', slidePlusF);
prevBtnF.addEventListener('click', slideMinusF);
nextBtnL.addEventListener('click', slidePlusL);
prevBtnL.addEventListener('click', slideMinusL);

categoryE.addEventListener('click', categoryEco);
categoryF.addEventListener('click', categoryFam);
categoryL.addEventListener('click', categoryLux);


const formRent = document.querySelector('.select-rent');
const formTransfer = document.querySelector('.select-transfer');

const selectCar = document.querySelector('.choose-car');
const selectAirport = document.querySelector('.choose-airport');
const formSubject = document.querySelector('.formSubject');

const engleski = document.querySelector('.eng');
const bosanski = document.querySelector('.bos');
const engleskiF = document.querySelector('.engF');
const bosanskiF = document.querySelector('.bosF');
engleski.addEventListener('click', engJezik);
bosanski.addEventListener('click', bosJezik);
engleskiF.addEventListener('click', engJezik);
bosanskiF.addEventListener('click', bosJezik);


formRent.addEventListener('click', fFormRent);
formTransfer.addEventListener('click', fFormTransfer);

const selectAdress = document.querySelector('#selectFL');
const adressForm = document.querySelector('#adresa');
selectAdress.addEventListener('change', adressAvailable)
function adressAvailable() {
    if(selectAdress.value == 'address') {
        adressForm.style.display = 'block';
    }
    else {
        adressForm.style.display = 'none';
    }
}

function slidePlusE() {
    if (counter >= 4) return;
    counter++;
    sliderE();
    console.log(counter)
}

function slideMinusE() {
    if (counter <= 0) return;
    counter--;
    sliderE();
    console.log(counter)
}

function slidePlusF() {
    if (counter >= 8) return;
    counter++;
    sliderF();
    console.log(counter)
}

function slideMinusF() {
    if (counter <= 0) return;
    counter--;
    sliderF();
    console.log(counter)
}

function slidePlusL() {
    if (counter >= 5) return;
    counter++;
    sliderL();
    console.log(counter)
}

function slideMinusL() {
    if (counter <= 0) return;
    counter--;
    sliderL();
    console.log(counter)
}


function sliderE() {
    switch(counter) {
        case 0:
            imgSlide3.src = "img/slide3Img4.png"
            carName3.innerHTML = 'Audi Q5 - 2018'
            categoryLux();
            counter = 4;
        break

        case 1:
            imgSlide1.src = "img/slideImg1.png"
            carName1.innerHTML = 'Skoda Fabia - 2015'
        break
        
        case 2:
            imgSlide1.src = "img/slide1Img2.png"
            carName1.innerHTML = 'Skoda Rapid - 2020'
        break

        case 3:
            imgSlide1.src = "img/slide1Img3.png"
            carName1.innerHTML = 'Peugeot 301 - 2020'
        break

        case 4:
            imgSlide1.src = "img/slideImg1.png"
            carName1.innerHTML = 'Skoda Fabia - 2015' 
            categoryFam();
        break
    }
}

function sliderF() {
    switch(counter) {
        case 0:
            imgSlide1.src = "img/slide1Img3.png"
            carName1.innerHTML = 'Peugeot 301 - 2020'
            categoryEco();
            counter = 3;
        break

        case 1:
            imgSlide2.src = "img/slide2Img1.png"
            carName2.innerHTML = 'Skoda Octavia - 2022'
        break
        
        case 2:
            imgSlide2.src = "img/slide2Img2.png"
            carName2.innerHTML = 'Skoda Octavia - 2020' 
        break

        case 3:
            imgSlide2.src = "img/slide2Img3.png"
            carName2.innerHTML = 'Toyota Corolla - 2020'
        break

        case 4:
            imgSlide2.src = "img/slide2Img4.png"
            carName2.innerHTML = 'Volkswagen Passat - 2020'
        break

        case 5:
            imgSlide2.src = "img/slide2Img5.png"
            carName2.innerHTML = 'Seat Leon - 2020'
        break

        case 6:
            imgSlide2.src = "img/slide2Img6.png"
            carName2.innerHTML = 'Mercedes GLK - 2015'
        break

        case 7:
            imgSlide2.src = "img/slide2Img7.png"
            carName2.innerHTML = 'Volkswagen Golf 7 - 2015'
        break

        case 8:
            imgSlide2.src = "img/slide2Img1.png"
            carName2.innerHTML = 'Skoda Octavia - 2020'
            categoryLux();
        break
    }
}

function sliderL() {
    switch(counter) {
        case 0:
            imgSlide2.src = "img/slide2Img7.png"
            carName2.innerHTML = 'Volkswagen Golf 7 - 2015'
            categoryFam();
            counter = 7;
        break

        case 1:
            imgSlide3.src = "img/slide3Img1.png"
            carName3.innerHTML = 'Mercedes V-class - 2020'
        break
        
        case 2:
            imgSlide3.src = "img/slide3Img2.png"
            carName3.innerHTML = 'Mercedes Vito - 2020'
        break

        case 3:
            imgSlide3.src = "img/slide3Img3.png"
            carName3.innerHTML = 'Mercedes ML - 2015'
        break

        case 4:
            imgSlide3.src = "img/slide3Img4.png"
            carName3.innerHTML = 'Audi Q5 - 2018'
        break

        case 5:
            imgSlide3.src = "img/slide3Img1.png"
            carName3.innerHTML = 'Mercedes V-class - 2020'
            categoryEco();
        break
    }
}



function categoryEco() {
    counter = 1;
    categoryE.style.backgroundColor = '#1092c9';
    categoryF.style.backgroundColor = '#000';
    categoryL.style.backgroundColor = '#000';
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
}

function categoryFam() {
    counter = 1;
    categoryE.style.backgroundColor = '#000';
    categoryF.style.backgroundColor = '#1092c9';
    categoryL.style.backgroundColor = '#000';
    slide1.style.display = "none";
    slide2.style.display = "block";
    slide3.style.display = "none";
}

function categoryLux() {
    counter = 1;
    categoryE.style.backgroundColor = '#000';
    categoryF.style.backgroundColor = '#000';
    categoryL.style.backgroundColor = '#1092c9';
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";
}


function fFormRent() {
    formRent.style.backgroundColor = '#1092c9';
    formTransfer.style.backgroundColor = '#000';
    selectCar.style.display = 'flex';
    selectAirport.style.display = 'none';
    formSubject.value = 'NOVI KORISNIK ZA RENTANJE'
}

function fFormTransfer() {
    formRent.style.backgroundColor = '#000';
    formTransfer.style.backgroundColor = '#1092c9';
    selectCar.style.display = 'none';
    selectAirport.style.display = 'flex';
    formSubject.value = 'NOVI KORISNIK ZA TRANSFER'
}

function bosJezik() {
    engleski.style.color = '#ffffff';
    bosanski.style.color = '#1092c9';
    document.querySelector('.mobileButton a').innerHTML = 'KONTAKTIRAJ NAS';
    document.querySelector('.nav2 li:nth-child(1) a').innerHTML = 'O NAMA';
    document.querySelector('.nav2 li:nth-child(2) a').innerHTML = 'AERODROM TRANSFER';
    document.querySelector('.nav2 li:nth-child(3) a').innerHTML = 'IZRENTAJ AUTO';
    document.querySelector('.contactUsButton').innerHTML = 'KONTAKTIRAJ NAS';

    document.querySelector('.transfer-heading h1:nth-child(1)').innerHTML = 'RENT A CAR';
    document.querySelector('.transfer-heading h1:nth-child(2)').innerHTML = 'AERODROM TRANSFER';

    document.querySelector('.transfer-content h2').innerHTML = 'TRANSFER SA AERODROMA';
    document.querySelector('.transfer-content ul li:nth-child(1)').innerHTML = 'Aerodrom Sarajevo';
    document.querySelector('.transfer-content ul li:nth-child(3)').innerHTML = 'Aerodrom Tuzla ';
    document.querySelector('.transfer-content ul li:nth-child(5)').innerHTML = 'Aerodrom Banja Luka';
    document.querySelector('.transfer-content ul li:nth-child(7)').innerHTML = 'Aerodrom Mostar ';

    document.querySelector('.transfer-content2 h2').innerHTML = 'VIP TRANSFERI';
    document.querySelector('.transfer-content2 ul li:nth-child(1)').innerHTML = 'Otmjeno';
    document.querySelector('.transfer-content2 ul li:nth-child(3)').innerHTML = 'Elegantno ';
    document.querySelector('.transfer-content2 ul li:nth-child(5)').innerHTML = 'U Stilu';

    document.querySelector('.transfer-content3 h2').innerHTML = 'A2B TRANSFERI';
    document.querySelector('.transfer-content3 ul li:nth-child(1)').innerHTML = 'Sa vaše adrese na sve popularne destinacije, i destinacije po želji';

    document.querySelector('.about-heading h1:nth-child(1)').innerHTML = 'O';
    document.querySelector('.about-heading h1:nth-child(2)').innerHTML = 'NAMA';
    document.querySelector('.about-us-text p:nth-child(1)').innerHTML = "Dobro došli u DRIVE ME SARAJEVO, vaš vrhunski rent-a-car i aerodromski prevoz u Sarajevu! Nudimo široku ponudu vozila koja odgovaraju vašim potrebama, bilo da ste ovdje zbog posla ili iz zadovoljstva. Naša usluga prijevoza do aerodroma pruža pravovremen i pouzdan prijevoz od i do aerodroma, tako da ne morate brinuti da ćete propustiti let. Naši ljubazni i iskusni vozači pobrinut će se da sigurno i udobno stignete na odredište.";
    document.querySelector('.about-us-text p:nth-child(2)').innerHTML = "Naša usluga iznajmljivanja automobila nudi raznovrsna vozila od ekonomičnih do luksuznih, tako da možete odabrati savršen automobil za svoje potrebe. Sva naša vozila su dobro održavana i redovno servisirana, što vam osigurava ugodnu i udobnu vožnju. Nudimo i fleksibilne opcije najma, bilo da vam treba automobil na nekoliko dana, sedmica ili duže.";
    document.querySelector('.about-us-text p:nth-child(3)').innerHTML = "U DRIVE ME SARAJEVO ponosimo se izuzetnom uslugom za korisnike. Naš tim je uvijek spreman pomoći vam sa svim pitanjima ili nedoumicama koje imate, a mi se trudimo da vaše iskustvo s nama bude što jednostavnije i bez stresa. Rezervišite rent-a-car ili uslugu aerodromskog prevoza već danas, a nama prepustite da se pobrinemo za ostalo!";

    document.querySelector('.cars-heading h1:nth-child(1)').innerHTML = 'KATEGORIJE';
    document.querySelector('.cars-heading h1:nth-child(2)').innerHTML = 'ZA RENTANJE';
    document.querySelector('.select-economy').innerHTML = 'EKONOMIJA';
    document.querySelector('.select-family').innerHTML = 'STANDARDNO';
    document.querySelector('.select-luxury').innerHTML = 'LUKSUZNO';

    // document.querySelector('.contact-us-heading h1').innerHTML = 'KONTAKTIRAJTE ';
    document.querySelector('.select-rent').innerHTML = 'IZRENTAJ AUTO';
    document.querySelector('.select-transfer').innerHTML = 'ZAKAŽI TRANSFER';

    document.querySelector('label[for=name]').innerHTML = 'Ime i Prezime';
    document.querySelector('label[for=phone]').innerHTML = 'Broj Telefona';
    document.querySelector('label[for=email]').innerHTML = 'E-mail Adresa';
    document.querySelector('label[for=date]').innerHTML = 'Datum Preuzimanja';
    document.querySelector('label[for=date2]').innerHTML = 'Datum Povratka';
    document.querySelector('label[for=cars]').innerHTML = 'Izaberi Auto';
    document.querySelector('label[for=airport]').innerHTML = 'Izaberi Aerodrom';
    document.querySelector('label[for=request]').innerHTML = 'Vaš Zahtjev';
    document.querySelector('label[for=address]').innerHTML = 'Vaša adresa';
    document.querySelector('.contact-us2').value = 'Kontaktiraj nas';

    document.querySelector('.footerDiv:nth-of-type(2) h4').innerHTML = 'Zakaži Transfer';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(1)').innerHTML = 'Transfer Sa Aerodroma';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(2)').innerHTML = 'VIP Transferi';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(3)').innerHTML = 'A2B Transferi';
    document.querySelector('.footerDiv:nth-of-type(3) h4').innerHTML = 'Tipovi Auta';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(1)').innerHTML = 'Ekonomična Klasa';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(2)').innerHTML = 'Standardna Klasa';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(3)').innerHTML = 'Luksuzna Klasa';
    document.querySelector('.footerDiv:nth-of-type(4) h4').innerHTML = 'Društvene Mreže';
    document.querySelector('.footer-phoneNum').innerHTML = 'Broj Telefona';
}

function engJezik() {
    engleski.style.color = '#1092c9';
    bosanski.style.color = '#ffffff';
    document.querySelector('.mobileButton a').innerHTML = 'CONTACT US';
    document.querySelector('.nav2 li:nth-child(1) a').innerHTML = 'ABOUT US';
    document.querySelector('.nav2 li:nth-child(2) a').innerHTML = 'AIRPORT SHUTTLE SERVICE';
    document.querySelector('.nav2 li:nth-child(3) a').innerHTML = 'RENT A CAR';
    document.querySelector('.contactUsButton').innerHTML = 'CONTACT US';

    document.querySelector('.transfer-heading h1:nth-child(1)').innerHTML = 'AIRPORT CAR RENTAL';
    document.querySelector('.transfer-heading h1:nth-child(2)').innerHTML = ' AND SHUTTLE SERVICES';

    document.querySelector('.transfer-content h2').innerHTML = 'AIRPORT TRANSFER';
    document.querySelector('.transfer-content ul li:nth-child(1)').innerHTML = 'Sarajevo International Airport';
    document.querySelector('.transfer-content ul li:nth-child(3)').innerHTML = 'Tuzla International Airport';
    document.querySelector('.transfer-content ul li:nth-child(5)').innerHTML = 'Banja Luka International Airport';
    document.querySelector('.transfer-content ul li:nth-child(7)').innerHTML = 'Mostar International Airport';

    document.querySelector('.transfer-content2 h2').innerHTML = 'VIP TRANSFERS';
    document.querySelector('.transfer-content2 ul li:nth-child(1)').innerHTML = 'Classy';
    document.querySelector('.transfer-content2 ul li:nth-child(3)').innerHTML = 'Elegant';
    document.querySelector('.transfer-content2 ul li:nth-child(5)').innerHTML = 'Premium';

    document.querySelector('.transfer-content3 h2').innerHTML = 'A2B TRANSFERS';
    document.querySelector('.transfer-content3 ul li:nth-child(1)').innerHTML = 'From your address to all popular destinations';

    document.querySelector('.about-heading h1:nth-child(1)').innerHTML = 'ABOUT';
    document.querySelector('.about-heading h1:nth-child(2)').innerHTML = 'US';
    document.querySelector('.about-us-text p:nth-child(1)').innerHTML = "Welcome to DriveMe Sarajevo, your premier car rental and airport shuttle service in Sarajevo! We offer a wide range of vehicles to suit your needs, whether you're here for business or pleasure. Our airport shuttle service provides timely and reliable transportation to and from the airport, so you don't have to worry about missing your flight. Our friendly and experienced drivers will make sure you get to your destination safely and comfortably.";
    document.querySelector('.about-us-text p:nth-child(2)').innerHTML = "Our car rental service offers a variety of vehicles from economy to luxury, so you can choose the perfect car for your needs. All of our vehicles are well-maintained and regularly serviced, ensuring that you have a smooth and enjoyable driving experience. We also offer flexible rental options, whether you need a car for a few hours, a day, or even a week.";
    document.querySelector('.about-us-text p:nth-child(3)').innerHTML = "At FLY&DRIVE Sarajevo, we pride ourselves on our exceptional customer service. Our team is always ready to assist you with any questions or concerns you may have, and we strive to make your experience with us as seamless and stress-free as possible. Book your car rental or airport shuttle service today and let us take care of the rest!";


    document.querySelector('.cars-heading h1:nth-child(1)').innerHTML = 'RENTAL';
    document.querySelector('.cars-heading h1:nth-child(2)').innerHTML = 'CATEGORIES';
    document.querySelector('.select-economy').innerHTML = 'ECONOMY';
    document.querySelector('.select-family').innerHTML = 'STANDARD';
    document.querySelector('.select-luxury').innerHTML = 'LUXURY';

    document.querySelector('.contact-us-heading h1').innerHTML = 'CONTACT US ';
    document.querySelector('.select-rent').innerHTML = 'RENT A CAR';
    document.querySelector('.select-transfer').innerHTML = 'BOOK A TRANSFER';

    document.querySelector('label[for=name]').innerHTML = 'Full Name';
    document.querySelector('label[for=phone]').innerHTML = 'Phone Number';
    document.querySelector('label[for=email]').innerHTML = 'Email';
    document.querySelector('label[for=date]').innerHTML = 'Pick-up Date';
    document.querySelector('label[for=date2]').innerHTML = 'Drop-off Date';
    document.querySelector('label[for=cars]').innerHTML = 'Choose a car';
    document.querySelector('label[for=airport]').innerHTML = 'Choose an airport';
    document.querySelector('label[for=address]').innerHTML = 'Your address';
    document.querySelector('label[for=request]').innerHTML = 'Your Request';
    document.querySelector('.contact-us2').value = 'CONTACT US';

    document.querySelector('.footerDiv:nth-of-type(2) h4').innerHTML = 'Transfer Booking';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(1)').innerHTML = 'Airport Transfer';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(2)').innerHTML = ' VIP Transfer';
    document.querySelector('.footerDiv:nth-of-type(2) li:nth-child(3)').innerHTML = 'A2B Transfer';
    document.querySelector('.footerDiv:nth-of-type(3) h4').innerHTML = 'Type Of Cars';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(1)').innerHTML = 'Economy Class';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(2)').innerHTML = ' Standard Class';
    document.querySelector('.footerDiv:nth-of-type(3) li:nth-child(3)').innerHTML = ' Luxury Class';
    document.querySelector('.footerDiv:nth-of-type(4) h4').innerHTML = 'Social Media';
    document.querySelector('.footer-phoneNum').innerHTML = 'Phone number';
}

// DATUM PREUZIMANJA, DATUM POVRATKA
// DATUM POLASKA, DATUM POVRATKA