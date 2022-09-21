const acceessories = document.getElementById("accessories");
const dropdown = document.getElementById("dropdown");
const triangle = document.getElementById("dropdown-triangle");
const main = document.querySelector("main");
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
        headingPopCreate.innerHTML = "Готово!";
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

closePop.addEventListener("click", function() {
    popUp.style.display="none";
    main.style.opacity = "1";
    loginPage.style.opacity = "1";
})

// arrow-up

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

