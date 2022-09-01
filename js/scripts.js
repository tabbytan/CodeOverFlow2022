/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function getResults() {
    // for easy integration the flags will be set individually 
    console.log("this is working")

    const params = new URLSearchParams(window.location.search)
    document.getElementById("gas").innerText = params.get("gas");
    document.getElementById("fuel").innerText = params.get("fuel");
    document.getElementById("plane").innerText = params.get("plane");
    gasemissions = 0.408 * params.get("gas");
    fuelemmissions = 0.63 * params.get("fuel");
    aviationemissions = 90 * params.get("plane");
    // function to allow for switching of scenarios if something is above or below average
    // we should do a model or smth here with the check for average thing
    checkaverage(gasemissions, fuelemmissions, aviationemissions);



}
function checkaverage(gasemissions, fuelemmissions, aviationemissions) {
    let gasflag = 0
    let fuelflag = 0
    let aviationflag = 0
    // set values here
    let gasaverage = 392.1 * 0.408;
    let fuelaverage = 83 * 0.63;
    let aviationaverage = 30.9 * 90;
    //
    if (gasemissions >= gasaverage) {
        gasflag = 1
    }
    if (fuelemmissions >= fuelaverage) {
        fuelflag = 1
    }
    if (aviationemissions >= aviationaverage) {
        aviationflag = 1
    }
    console.log(gasflag, fuelflag, aviationflag);
    const flags = [gasflag, fuelflag, aviationflag]
    displayResult(flags);
}

function displayResult(flag) {
    var blank = document.querySelector(".result .col > div").innerText = "";

    var redFilter = "blur(2px) grayscale(80%) brightness(40%) sepia(50%) hue-rotate(-50deg) saturate(500%) contrast(0.8)";
    var greenFilter = "blur(4px) grayscale(20%) brightness(80%) saturate(50%)";


    // gas
    if (flag[0] == 1) {
        document.getElementById("gas").innerText = "Your gas consumption is above the national avarage!";
        document.getElementById("gas-img").style.filter = redFilter;
    }
    else {
        document.getElementById("gas").innerText = `Your gas comsumption is ${gasemissions} tonnes CO2 equivalent`
        document.getElementById("gas-img").style.filter = greenFilter;
    }
    // fuel
    if (flag[1] == 1) {
        document.getElementById("fuel").innerText = "Your fuel consumption is above the national avarage!";
        document.getElementById("fuel-img").style.filter = redFilter;
    }
    else {
        document.getElementById("fuel").innerText = `Your fuel comsumption is ${fuelemmissions} tonnes CO2 equivalent`
        document.getElementById("fuel-img").style.filter = greenFilter;
    }
    // aviation
    if (flag[2] == 1) {
        document.getElementById("plane").innerText = "Your aviation emissions is above the national avarage!";
        document.getElementById("plane-img").style.filter = redFilter;
    }
    else {
        document.getElementById("plane").innerText = `Your aviation emissions is ${aviationemissions} tonnes CO2 equivalent`
        document.getElementById("plane-img").style.filter = greenFilter;
    }
    let total = (gasemissions + fuelemmissions + aviationemissions).toFixed(2);
    document.getElementById("total").innerText = `My total carbon footprint: ${total} tonnes CO2 equivalent`;
}


