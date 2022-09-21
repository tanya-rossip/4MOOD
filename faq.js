const chooseHeading = document.getElementById("payment")
const chooseHeadingTwo = document.getElementById("return")
const chooseHeadingThree = document.getElementById("questions")
const firstDescription = document.getElementById("first-heading-description")
const secondDescription = document.getElementById("second-heading-description")
const thirdDescription = document.getElementById("third-heading-description")
const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("navigation")
const hamburgerClose = document.getElementById("hamburger-close")


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
let quantitySecond = document.getElementById("quantity-second-item")
let itemPrice = document.getElementById("item-price")
let deliveryPrice = document.getElementById("delivery-price")
let totalPrice = document.getElementById("total-amount")
let quantity = document.getElementById("quantity")
let count = document.getElementById("count")

const popUp = document.getElementById("pop-up")
const closePop = document.getElementById("close-pop")
const done = document.getElementById("done")
const firstPop = document.getElementById("first-pop")
const secondPop = document.getElementById("second-pop")
const headingPop = document.getElementById("heading-pop")
const confirmDone = document.getElementById("confirm-done")

const popUpCreate = document.getElementById("pop-up-create")
const closePopCreate = document.getElementById("close-pop-create")
const doneCreate = document.getElementById("done-create")
const firstPopCreate = document.getElementById("first-pop-create")
const secondPopCreate = document.getElementById("second-pop-create")
const headingPopCreate = document.getElementById("heading-pop-create")
const confirmDoneCreate = document.getElementById("confirm-done-create")

//email-reminder
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
        main.style.opacity = "0.7";
    })
    
    close.addEventListener("click", function() {
        basketMenu.style.display = "none";
        main.style.opacity = "1";
    })

 //login
 closeLogin.addEventListener("click", function() {
    loginPage.style.display = "none";
    main.style.opacity = "1";
})

loginOpen.addEventListener("click", function() {
    loginPage.style.display = "flex";
    main.style.opacity = "0.5";
})

const totalAmount = () => {
    totalPrice.innerHTML = parseInt(itemPrice.innerHTML) * (parseInt(quantitySecond.innerHTML)) + parseInt(deliveryPrice.innerHTML);
    if (totalPrice.innerHTML > 999) {
        deliveryPrice.innerHTML = "0";
        totalAmount();
    } else 
     {
        deliveryPrice.innerHTML = "30";
        totalPrice.innerHTML = parseInt(itemPrice.innerHTML) * (parseInt(quantitySecond.innerHTML)) + parseInt(deliveryPrice.innerHTML);
    }

}

const loginOpenFunc = () => {
    loginPage.style.display = "flex";
    main.style.opacity = "0.5";
}

chooseHeading.addEventListener("click", function() {
    firstDescription.style.display = "initial";
    secondDescription.style.display = "none";
    thirdDescription.style.display = "none";
    chooseHeading.classList.add("hchoose");
    chooseHeadingTwo.classList.remove("hchoose")
    chooseHeadingThree.classList.remove("hchoose");
 })
 
 chooseHeadingTwo.addEventListener("click", function() {
     secondDescription.style.display = "initial";
     firstDescription.style.display = "none";
     thirdDescription.style.display = "none";
     chooseHeadingTwo.classList.add("hchoose")
     chooseHeading.classList.remove("hchoose");
     chooseHeadingThree.classList.remove("hchoose");
 })
 
 chooseHeadingThree.addEventListener("click", function() {
     thirdDescription.style.display = "initial";
     secondDescription.style.display = "none";
     firstDescription.style.display = "none";
     chooseHeadingThree.classList.add("hchoose");
     chooseHeading.classList.remove("hchoose");
     chooseHeadingTwo.classList.remove("hchoose")
 })

 // responsive 
const hamburgerFunc = () => {
    navigation.style.display = "flex";
    navigation.style.flexDirection = "column";
    navigation.style.position = "absolute";
    navigation.style.zIndex = "1000";
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

