header();
footer();
setInterval(checkPage, 100);

function header() {
    let text = `
            <nav class="bold">
                <ul>
                    <li>
                        <a href="index.html">
                            <img src="/assets/images/Sparta_logo.png" alt="Sparta Biler">
                        </a>
                    </li>
                    <section class="navFlex">
                        <li class="leasinglink">
                            <a href="leasing.html">Leasing</a>
                        </li>
                        <li class="bilerpaalagerlink">
                            <a href="biler-pa-lager.html">Biler på lager</a>
                        </li>
                        <li class="kontaktlink">
                            <a href="kontakt.html">Kontakt</a>
                        </li>
                    </section>
                    <i id="navIkon2" class="fas fa-times" onclick="dropdownMobile()"></i>
                    <i id="navIkon" class="fas fa-bars" onclick="dropdownMobile()"></i>
                </ul>
                <div class="nav-fade-in dropdownMobile">
                    <ul id="navMobile">
                        <li>
                            <a href="index.html">Forside</a>
                        </li>
                        <li>
                            <a href="leasing.html">Leasing</a>
                        </li>
                        <li>
                            <a href="biler.html">Biler på lager</a>
                        </li>
                        <li>
                            <a href="kontakt.html">Kontakt</a>
                        </li>
                        <section class="headericons">
                            <a href="https://www.facebook.com/Spartabiler.dk" target="_blank">
                                <img src="/assets/images/facebook.png" alt="Sparta Biler Facebook"> <!-- flaticon: https://www.flaticon.com/premium-icon/facebook_2504903 -->
                            </a>
                            <a href="https://www.instagram.com/spartabiler" target="_blank">
                                <img src="/assets/images/instagram.png" alt="Sparta Biler Instagram"> <!-- flaticon: https://www.flaticon.com/free-icon/instagram_2111463 -->
                            </a>
                        </section>
                    </ul>
                </div>
            </nav>
    `;
    document.querySelector('header').innerHTML = text;
}

function dropdownMobile() {
    if (document.getElementById("navMobile").style.display === "block") {
        document.getElementById("navMobile").style.display = "none";
        if (document.querySelector('.cars')) {
            document.querySelector('main').style.display = "block";
        } else {
            document.querySelector('main').style.display = "flex";
        }
        if (document.querySelector('footer')) {
            document.querySelector('footer').style.display = "flex";
            document.querySelector('footer').style.flexDirection = "column";
        }
        document.querySelector('nav ul li a').style.display = "flex";
        document.getElementById("navIkon2").style.display = "none";
        document.getElementById("navIkon").style.display = "block";
        document.querySelector('.nav-fade-in').classList.remove('appear');
        //document.querySelector('.background').classList.remove('bignav');
        document.querySelector('.background').classList.remove('backgroundheight');
        document.querySelector('header').classList.remove('height');


    } else {
        document.getElementById("navMobile").style.display = "block";
        document.querySelector('main').style.display = "none";
        if (document.querySelector('footer')) {
            document.querySelector('footer').style.display = "none";
        }
        document.querySelector('nav ul li a').style.display = "none";
        document.getElementById("navIkon2").style.display = "block";
        document.getElementById("navIkon").style.display = "none";
        document.querySelector('.nav-fade-in').classList.add('appear');
        // document.querySelector('.background').classList.add('bignav');
        //document.getElementById("myDIV").classList.toggle("mystyle");
        document.querySelector('header').classList.add('height');
        if (document.querySelector('.frontpage')) {
            document.querySelector('.frontpage').classList.add('background');
            document.querySelector('.background').classList.add('backgroundheight');
        } else {
            document.querySelector('.background').classList.add('backgroundheight');
        }
    }
}

function footer() {
    let text = `
    <section class="flex">
        <section>
            <a href="tel:61464685"> 
                <p class="bold">Tlf. <span class="robotobold">61 46 46 85</span></p>
            </a>
            <a href="mailto:info@spartabiler.dk">
                <p>info@spartabiler.dk</p>
            </a>
        </section>
        <section>
            <h2 class="bold">Skriv til os og hør, hvad vi kan tilbyde</h2>
            <a href="mailto:info@spartabiler.dk">
                <button>Send en email</button>
            </a>
        </section>
        <section>
            <p class="bold">Adresse:</p>
            <p>Gladsaxe Møllevej <span class="robotolight">21</span></p>
            <p><span class="robotolight">2860</span> Søborg</p>
        </section>
    </section>
    <section class="icons">
        <a href="https://www.facebook.com/Spartabiler.dk" target="_blank">
            <img src="/assets/images/facebook.png" alt="Sparta Biler Facebook"> <!-- flaticon: https://www.flaticon.com/premium-icon/facebook_2504903 -->
        </a>
        <a href="https://www.instagram.com/spartabiler" target="_blank">
            <img src="/assets/images/instagram.png" alt="Sparta Biler Instagram"> <!-- flaticon: https://www.flaticon.com/free-icon/instagram_2111463 -->
        </a>
    </section>
    `;
    if (document.querySelector('footer')) {
        document.querySelector('footer').innerHTML = text;
    }
}

window.onscroll = function () { onScrollChecks() };

function onScrollChecks() {
    if (document.getElementById('illustration1')) {
        let illustration1 = document.querySelector('#illustration1');
        if (window.pageYOffset >= illustration1.offsetTop) {
            let tmpX = window.pageYOffset - illustration1.offsetTop;
            if (tmpX >= 10) {
                illustration1.style.transform = "translateX(" + tmpX + "px)";
            }
        }
    }

    if (document.getElementById('illustration2')) {
        let illustration2 = document.querySelector('#illustration2');
        if (window.pageYOffset >= illustration2.offsetTop) {
            let tmpX = window.pageYOffset - illustration2.offsetTop;
            if (tmpX >= 10) {
                illustration2.style.transform = "translateX(" + tmpX + "px)";
            }
        }
    }

    if (document.getElementById('illustration3')) {
        let illustration3 = document.querySelector('#illustration3');
        if (window.pageYOffset >= illustration3.offsetTop) {
            let tmpX = window.pageYOffset - illustration3.offsetTop;
            if (tmpX >= 10) {
                illustration3.style.transform = "translateX(" + tmpX + "px)";
            }
        }
    }

    if (document.getElementById('illustration4')) {
        let illustration4 = document.querySelector('#illustration4');
        if (screen.width < 1200) {
            illustration4.style.transform = "translateX(0)";
        } else if (window.pageYOffset >= illustration4.offsetTop - (illustration4.offsetHeight * 2)) {
            let tmpX = -1 * (window.pageYOffset - illustration4.offsetTop);
            if (tmpX >= 10) {
                illustration4.style.transform = "translateX(" + tmpX + "px)";
            }
        }
    }
}

function leasing(leasingtype) {
    if (leasingtype == 'privatleasing') {
        document.getElementById('privatleasing').style.display = "flex";
        document.getElementById('erhvervsleasing').style.display = "none"
        document.getElementById('splitleasing').style.display = "none"
    } else if (leasingtype == 'erhvervsleasing') {
        document.getElementById('privatleasing').style.display = "none";
        document.getElementById('erhvervsleasing').style.display = "flex"
        document.getElementById('splitleasing').style.display = "none"
    } else if (leasingtype == 'splitleasing') {
        document.getElementById('privatleasing').style.display = "none";
        document.getElementById('erhvervsleasing').style.display = "none"
        document.getElementById('splitleasing').style.display = "flex"
    }
}

/* KODE NEDENFOR (UNDTAGEN LINJE 209-213 OG 227-230) ER FRA W3SCHOOLS. Kilde: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, knap) {
    showDivs(slideIndex += n, knap);
}

function showDivs(n, knap) {
    var i;
    if (knap == 'knap1') {
        document.querySelector('.knap1').style.animation = "slideshowbutton 0.2s";
    } else if (knap == 'knap2') {
        document.querySelector('.knap2').style.animation = "slideshowbutton 0.2s";
    }
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (x.length > 0) {
        x[slideIndex - 1].style.display = "block";
    }
    if (document.querySelector('.knap1')) {
        setTimeout(() => {
            document.querySelector('.knap1').style.animation = "none";
            document.querySelector('.knap2').style.animation = "none";
        }, 100)
    }
}

/* KODE OVENFOR (UNDTAGEN LINJE 209-213 OG 227-230) ER FRA W3SCHOOLS. Kilde: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self */

function checkPage() {
    const url = window.location.href;
    if (url.indexOf('leasing') > -1) {
        document.querySelector('.leasinglink a').style.color = "var(--darkred)";
    } else if (url.indexOf('biler-pa-lager') > -1) {
        document.querySelector('.bilerpaalagerlink a').style.color = "var(--darkred)";
    } else if (url.indexOf('kontakt') > -1) {
        document.querySelector('.kontaktlink a').style.color = "var(--darkred)";
    }
}

fetchCars();
let alleBiler;

function fetchCars() {
    fetch('https://spartabiler.charlottegracia.dk/wp-json/wp/v2/posts?categories=2&per_page=50')
        .then(response => response.json())
        .then(data => {
            alleBiler = data;
            let maerkeArray = [];
            let aargangArray = [];
            data.forEach(element => {
                maerkeArray.push(element.acf.maerke);
                aargangArray.push(element.acf.aargang);
            });

            let unikkeMaerker = [...new Set(maerkeArray)];
            unikkeMaerker.sort();
            unikkeMaerker.forEach(maerke => {
                let text = `<option value="${maerke}">${maerke}</option>`;
                document.querySelector('.maerker').innerHTML += text;
            });

            let unikkeAargange = [...new Set(aargangArray)];
            unikkeAargange.sort();
            unikkeAargange.forEach(aargang => {
                let text = `<option value="${aargang}">${aargang}</option>`;
                document.querySelector('.aargang').innerHTML += text;
            });

            drawCars(data);
        })
        .catch(error => {
            console.log(error);
        })
}

function sortCars() {
    const maerke = document.querySelector('.maerker').value;
    const aargang = document.querySelector('.aargang').value;
    let sorteredeBiler = [];

    if (maerke != "" && aargang != "") {
        alleBiler.forEach(bil => {
            if (bil.acf.maerke == maerke && bil.acf.aargang == aargang) {
                sorteredeBiler.push(bil);
            }
        });

        if (sorteredeBiler.length >= 1) {
            drawCars(sorteredeBiler);

        } else if (sorteredeBiler.length == 0) {
            text = `
                <p>Der er desværre ingen biler, der matcher dine kriterier. Prøv en anden kombination eller klik på knappen nedenfor for at nulstille.</p>
                <button onclick="drawCars(alleBiler)" class="nulstil">Nulstil filtrering</button>
            `;
            document.querySelector('.numberOfCars').innerHTML = "";
            document.querySelector('.carGrid').innerHTML = "";
            document.querySelector('.noCars').innerHTML = text;
        }

    } else if (maerke != "" && aargang == "") {
        alleBiler.forEach(bil => {
            if (bil.acf.maerke == maerke) {
                sorteredeBiler.push(bil);
            }
        });
        drawCars(sorteredeBiler);

    } else if (aargang != "" && maerke == "") {
        alleBiler.forEach(bil => {
            if (bil.acf.aargang == aargang) {
                sorteredeBiler.push(bil);
            }
        });
        drawCars(sorteredeBiler);

    } else if (maerke == "" && aargang == "") {
        drawCars(alleBiler);
    }
}

function drawCars(biler) {
    console.log("antal biler: " + biler.length);
    let text = "";
    biler.forEach(bil => {
        text +=
            `
        <a href="bil.html" class="carBox">
            <img src="${bil.acf.billede1.url}" alt="">
            <article class="details">
                <section>
                    <h2 class="headerCars">${bil.acf.maerke} ${bil.acf.model}</h2>
                    <p class="pris robotolight">${bil.acf.flexleasing_privat_manedlig_ydelse} pr. md.</p>
                </section>
                <section>
                    <section class="icondetail">
                        <img src="assets/images/history.png" alt="">
                        <p>Årstal</p>
                    </section>
                    <p class="robotolight">${bil.acf.aargang}</p>
                </section>
                <section>
                    <section class="icondetail">
                        <img src="assets/images/road.png" alt="">
                        <p>KM kørt</p>
                    </section>
                    <p class="robotolight">${bil.acf.km_kort}</p>
                </section>
                <section>
                    <section class="icondetail">
                        <img src="assets/images/gas-station.png" alt="">
                        <p>Brændstof</p>
                    </section>
                    <p>${bil.acf.braendstof}</p>
                </section>
            </article>
        </a>
        `;
    });
    document.querySelector('.numberOfCars').innerHTML = `Antal biler fundet: ${biler.length}`;
    document.querySelector('.carGrid').innerHTML = text;
    document.querySelector('.noCars').innerHTML = "";
}