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

function getResults(){
    // for easy integration the flags will be set individually 
    let gasflag = 0
    let fuelflag = 0
    let aviationflag = 0
    electricbill = document.getElementById("electricbill").value;
    fuel = document.getElementById("fuel").value;
    flightduration = document.getElementById("flightduration").value;
    gasemissions = 0.408 * electricbill;
    fuelemmissions = 0.63 * fuel;
    aviationemissions = 90 * flightduration;
    // function to allow for switching of scenarios if something is above or below average
    // we should do a model or smth here with the check for average thing
    checkForAverage = (gasemissions,fuelemmissions,aviationemissions) => {

        // set values here
        let gasaverage = 0
        let fuelaverage = 0
        let aviationaverage = 0
        if (gasemissions >= gasaverage){
            gasflag = 1
        }   
        if (fuelemmissions >= fuelaverage){
            fuelflag = 1
        }   
        if (aviationemissions >= aviationaverage){
            aviationflag = 1
        }   
        console.log(gasflag,fuelflag,aviationflag)
    };
}


