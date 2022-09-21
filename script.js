const firstSlide = document.getElementById("banner-one");
const secondSlide = document.getElementById("banner-two");
const thirdSlide = document.getElementById("banner-three");
const acceessories = document.getElementById("accessories");
const dropdown = document.getElementById("dropdown");
const triangle = document.getElementById("dropdown-triangle");
const main = document.querySelector("main");
const sale = document.getElementById("photo-items");
const aroLeft = document.getElementById("arrow-scroll-left");
const aroRight = document.getElementById("arrow-scroll")
const banner = document.getElementById("banner-section")
const dotOne = document.getElementById("dot-one")
const dotTwo = document.getElementById("dot-two")
const dotThree = document.getElementById("dot-three")
const basket = document.getElementById("basket")
const basketMenu = document.getElementById("basket-preview")
const close = document.getElementById("close")
const closeLogin = document.getElementById("close-login")
const loginPage = document.getElementById("login-page")
const loginOpen = document.getElementById("login-preview")
const popUp = document.getElementById("pop-up")
const closePop = document.getElementById("close-pop")
const done = document.getElementById("done")
const firstPop = document.getElementById("first-pop")
const secondPop = document.getElementById("second-pop")
const headingPop = document.getElementById("heading-pop")
const confirmDone = document.getElementById("confirm-done")
const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("navigation")
const hamburgerClose = document.getElementById("hamburger-close")
const popUpCreate = document.getElementById("pop-up-create")
const closePopCreate = document.getElementById("close-pop-create")
const doneCreate = document.getElementById("done-create")
const firstPopCreate = document.getElementById("first-pop-create")
const secondPopCreate = document.getElementById("second-pop-create")
const headingPopCreate = document.getElementById("heading-pop-create")
const confirmDoneCreate = document.getElementById("confirm-done-create")

const scrollUp = document.getElementById("arrow-scroll-up")
const aroLeftMood = document.getElementById("arrow-scroll-left-mood");
const aroRightMood = document.getElementById("arrow-scroll-mood")
const mood = document.getElementById("mood-girls-img")

// dropdown
acceessories.addEventListener("mouseover", function() {
dropdown.style.display = "grid";
main.style.opacity = "0.5";
triangle.style.display = "initial";
main.addEventListener("mouseover", function() {
    dropdown.style.display = "none";
    main.style.opacity = "1";
    triangle.style.display = "none"
})
})

dropdown.addEventListener("mouseleave", function() {
    dropdown.style.display = "none";
    main.style.opacity = "1";
    triangle.style.display = "none"
});

const emailRemind = () => {
    loginPage.style.display = "none";
    popUp.style.display="flex";
    firstPop.style.display = "flex";
    secondPop.style.display = "flex";
    loginPage.style.opacity = "0.8";
    main.addEventListener("click", function() {
        popUp.style.display="none";
        main.style.opacity = "1";
        loginPage.style.opacity = "1";
        })
}

const popFunc = () => {
    secondPop.style.display = "none";
    done.style.display = "flex"
    headingPop.innerHTML = "Готово!";
    let emailPop = document.getElementById("email-pop").value;
    confirmDone.style.display = "initial";
    confirmDone.innerHTML = `На ${emailPop} відправлено інструкцію для відновлення пароля.`;
    main.addEventListener("click", function() {
        popUp.style.display="none";
        main.style.opacity = "1";
        loginPage.style.opacity = "1";
        confirmDone.style.display = "none";
        })
}

const subscribeFunc = () => {
    secondPop.style.display = "none";
    done.style.display = "flex"
    headingPop.innerHTML = "Готово!";
    let emailPop = document.getElementById("email-subscribe").value;
    confirmDone.innerHTML = `На ${emailPop} відправлений електроний лист, що підтверджує вашу підписку`;
    main.addEventListener("click", function() {
        popUp.style.display="none";
        main.style.opacity = "1";
        loginPage.style.opacity = "1";
        })
    popUp.style.display="flex";
    popUp.style.top = "150vw";
    main.style.opacity = "0.5";
}

closePop.addEventListener("click", function() {
    popUp.style.display="none";
    main.style.opacity = "1";
    loginPage.style.opacity = "1";
})

// basket

basket.addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    basketMenu.style.display = "initial";
    main.style.opacity = "0.5";
    loginPage.style.display = "none";
    main.addEventListener("click", function() {
        basketMenu.style.display="none";
        main.style.opacity = "1";
        })
    
})

close.addEventListener("click", function() {
    basketMenu.style.display = "none";
    main.style.opacity = "1";
})

// login

closeLogin.addEventListener("click", function() {
    loginPage.style.display = "none";
    main.style.opacity = "1";
})

loginOpen.addEventListener("click", function() {
    loginPage.style.display = "flex";
    main.style.opacity = "0.5";
    basketMenu.style.display = "none";
    main.addEventListener("click", function() {
        loginPage.style.display="none";
        main.style.opacity = "1";
        })
})

const loginOpenFunc = () => {
    loginPage.style.display = "flex";
    main.style.opacity = "0.5";
}

//banner
let counter = 0;

let plusSlides = () => {
counter++;
}

let minusSlides = () => {
    counter--;
}

dotOne.addEventListener("click", function() {
    slideOne();
    counter = 0;
})

dotTwo.addEventListener("click", function() {
    slideTwo();
    counter = 1;
})

dotThree.addEventListener("click", function() {
    slideThree();
    counter = 2;
})

hero.addEventListener("click", function() {
switch(counter)  {
    case 1: 
    slideTwo()
    break;  
    case 2: 
    slideThree();
    break;
    case -1:
    slideThree();
    break;
    case -2:
    slideTwo();
    break;
    default:
    counter = 0;
    slideOne();
    }
})

let slideOne = () => {
    firstSlide.style.display = "initial";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    dotOne.style.backgroundColor = "#D0191D";
    dotThree.style.backgroundColor = "white";
    dotTwo.style.backgroundColor = "white";
}

let slideTwo = () => {
    thirdSlide.style.display = "none";
    secondSlide.style.display = "initial";
    firstSlide.style.display = "none";   
    dotTwo.style.backgroundColor = "#D0191D"
    dotOne.style.backgroundColor = "white";
    dotThree.style.backgroundColor = "white";
}

let slideThree = () => {
    firstSlide.style.display = "none";
    thirdSlide.style.display = "initial";
    secondSlide.style.display = "none";
    dotThree.style.backgroundColor = "#D0191D";
    dotOne.style.backgroundColor = "white"
    dotTwo.style.backgroundColor = "white"
}

// sale

aroRight.addEventListener("click", function() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        sale.scrollBy({
            left: 340,
            behavior: "smooth"
        });      } else {
            sale.scrollBy({
                left: 450,
                behavior: "smooth"
            });
      }
   

});

sale.addEventListener("scroll", function() {
    if (sale.scrollLeft > 1000) {
        aroRight.style.display = "none";
        aroLeft.style.display = "initial";

    }
    if (sale.scrollLeft === 0) {
        aroLeft.style.display = "none";
        aroRight.style.display = "initial";

    }

    if (sale.scrollLeft !== 0) {
        aroLeft.style.display = "initial";
    }

    if (sale.scrollLeft < 1000) {
        aroRight.style.display = "initial";
    }

})

aroLeft.addEventListener("click", function() {
    sale.scrollBy({
        left: -450,
        behavior: "smooth"
    });
    aroRight.style.display = "initial";
});

// responsive 
const hamburgerFunc = () => {
    navigation.style.display = "flex";
    navigation.style.flexDirection = "column";
    navigation.style.position = "absolute";
    navigation.style.zIndex = "1000"
    navigation.style.top= "0";
    navigation.style.left= "0";
    navigation.style.backgroundColor = "white";
    navigation.style.height = "100vh";
    navigation.style.width = "100vw";
    navigation.style.alignItems= "flex-start";
    hamburger.style.visibility = "hidden";
    hamburgerClose.style.display = "initial"
}

const closeHamburger = () => {
    hamburger.style.visibility = "initial";
    hamburgerClose.style.display = "none";
    navigation.style.display = "none";
}

//responsive login
 const loginResponsive = () => {
    loginPage.style.display = "flex";
    navigation.style.display = "none";
    hamburger.style.visibility = "initial";
    hamburgerClose.style.display = "none";
    main.style.opacity = "0.5";
 }

//  pop-up window for create account

const popFuncCreate = () => {
    loginPage.style.display = "none";
    popUpCreate.style.display="flex";
    firstPop.style.display = "flex";
    secondPop.style.display = "flex";
    loginPage.style.opacity = "0.8";
 }
 
const popFuncSubmit = () => {
    secondPopCreate.style.display = "none";
        doneCreate.style.display = "flex"
        headingPopCreate.innerHTML = "Account created!!";
        let emailPopCreate = document.getElementById("email-pop-create").value;
        confirmDoneCreate.style.display = "initial";
        confirmDoneCreate.innerHTML = `На ${emailPopCreate} відправлений лист з посиланням на активацію акаунта.`;
        main.addEventListener("click", function() {
            popUpCreate.style.display="none";
            main.style.opacity = "1";
            confirmDoneCreate.style.display = "none";
            })
}

    closePopCreate.addEventListener("click", function() {
    popUpCreate.style.display="none";
    main.style.opacity = "1";
})

window.addEventListener("scroll", function() {
   if (window.scrollY > 1) {
        scrollUp.style.display = "initial";
    }
    else 
    if (window.scrollY === 0) {
        scrollUp.style.display = "none";
    }
})

scrollUp.addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

const popFuncSubmitEng = () => {
    secondPopCreate.style.display = "none";
        doneCreate.style.display = "flex"
        headingPopCreate.innerHTML = "Done!";
        let emailPopCreate = document.getElementById("email-pop-create").value;
        confirmDoneCreate.style.display = "initial";
        confirmDoneCreate.innerHTML = `We have sent an email to ${emailPopCreate}. Please check your inbox and click on the link to activate your account`;
        main.addEventListener("click", function() {
            popUpCreate.style.display="none";
            main.style.opacity = "1";
            confirmDoneCreate.style.display = "none";
            })
}


const popFuncEng = () => {
    secondPop.style.display = "none";
    done.style.display = "flex"
    headingPop.innerHTML = "Check your email address";
    let emailPop = document.getElementById("email-pop").value;
    confirmDone.style.display = "initial";
    confirmDone.innerHTML = `We've sent an email to ${emailPop} so that you can reset your password.`;
    main.addEventListener("click", function() {
        popUp.style.display="none";
        main.style.opacity = "1";
        loginPage.style.opacity = "1";
        confirmDone.style.display = "none";
        })
}

// mood for girls

aroRightMood.addEventListener("click", function() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        mood.scrollBy({
            left: 340,
            behavior: "smooth"
        });      } else {
            mood.scrollBy({
                left: 450,
                behavior: "smooth"
            });
      }
   

});


mood.addEventListener("scroll", function() {
    if (mood.scrollLeft > 500) {
        aroRightMood.style.display = "none";
        aroLeftMood.style.display = "initial";

    }
    if (mood.scrollLeft === 0) {
        aroLeftMood.style.display = "none";
        aroRightMood.style.display = "initial";

    }

    if (mood.scrollLeft !== 0) {
        aroLeftMood.style.display = "initial";
    }

    if (mood.scrollLeft < 500) {
        aroRightMood.style.display = "initial";
    }

})

aroLeftMood.addEventListener("click", function() {
    mood.scrollBy({
        left: -450,
        behavior: "smooth"
    });
    aroRightMood.style.display = "initial";
});