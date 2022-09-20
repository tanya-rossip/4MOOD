const acceessories = document.getElementById("accessories")
const dropdown = document.getElementById("dropdown")
const triangle = document.getElementById("dropdown-triangle")
const main = document.querySelector("main")
const basket = document.getElementById("basket")
const basketMenu = document.getElementById("basket-preview")
const close = document.getElementById("close")
const photoOne = document.getElementById("photo-one")
const photoTwo = document.getElementById("photo-two")
const photoThree = document.getElementById("photo-three")
const photoFour = document.getElementById("photo-four")
const mainPhoto = document.getElementById("item3-main-photo")
const chooseHeading = document.getElementById("choose-heading")
const chooseHeadingTwo = document.getElementById("choose-heading-two")
const chooseHeadingThree = document.getElementById("choose-heading-three")
const firstDescription = document.getElementById("first-heading-description")
const secondDescription = document.getElementById("second-heading-description")
const thirdDescription = document.getElementById("third-heading-description")
const secondItem = document.getElementById("second-item")
const firstItem = document.getElementById("first-item")
const closeFirst = document.getElementById("close-first")
const closeSecond = document.getElementById("close-second")
const minusFirst = document.getElementById("minus-first")
const minusSecond = document.getElementById("minus-second")
const plusFirst = document.getElementById("plus-first")
const plusSecond = document.getElementById("plus-second")
let quantitySecond = document.getElementById("quantity-second-item")
let itemPrice = document.getElementById("item-price")
let deliveryPrice = document.getElementById("delivery-price")
let totalPrice = document.getElementById("total-amount")
let quantity = document.getElementById("quantity")
let count = document.getElementById("count")
let orderBtn  = document.getElementById("order-button")
const loginPage = document.getElementById("login-page")
const loginOpen = document.getElementById("login-preview")
const closeLogin = document.getElementById("close-login")
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
const otherPhotos = document.getElementById("other-photos")
const aroLeft = document.getElementById("arrow-scroll-left");
const aroRight = document.getElementById("arrow-scroll")
const popUpCreate = document.getElementById("pop-up-create")
const closePopCreate = document.getElementById("close-pop-create")
const doneCreate = document.getElementById("done-create")
const firstPopCreate = document.getElementById("first-pop-create")
const secondPopCreate = document.getElementById("second-pop-create")
const headingPopCreate = document.getElementById("heading-pop-create")
const confirmDoneCreate = document.getElementById("confirm-done-create")
const scrollUp = document.getElementById("arrow-scroll-up")


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

const testFunc = () => {
      orderBtn.disabled = true;
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    basketMenu.style.display = "initial";
    orderBtn.disabled = true;
    secondItem.style.display = "flex";
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    count.innerHTML = parseInt(count.innerHTML) + 1;  
    totalAmount();  
}



const secondAdding = () => {
    count.innerHTML = parseInt(count.innerHTML) + 1;  
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    quantitySecond.innerHTML =  parseInt(quantitySecond.innerHTML) + 1;
    totalAmount();  
}

const secondSubtract = () => {
    count.innerHTML = parseInt(count.innerHTML) - 1;  
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    quantitySecond.innerHTML =  parseInt(quantitySecond.innerHTML) - 1;


    if (parseInt(quantitySecond.innerHTML) === 0) {
        secondItem.style.display = "none";
    }
    totalAmount();
}

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

    // basket
    
    basket.addEventListener("click", function() {
        totalAmount();
        loginPage.style.display = "none";        basketMenu.style.display = "initial";
        main.style.opacity = "0.7";
        main.addEventListener("click", function() {
            basketMenu.style.display="none";
            main.style.opacity = "1";
            })
    })
    
    close.addEventListener("click", function() {
        basketMenu.style.display = "none";
        main.style.opacity = "1";
    })
    
    


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
 
closeSecond.addEventListener("click", function() {
    secondItem.style.display = "none";
    totalPrice.innerHTML = "0";
    count.innerHTML = parseInt(count.innerHTML) - 1;   
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
   
})

closeFirst.addEventListener("click", function() {
    firstItem.style.display = "none";
    count.innerHTML = parseInt(count.innerHTML) - 1;  
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;

})

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

    
    // item part

    
    
const chosePhotoOne = () => {
    
    photoOne.style.opacity = "1";
    photoTwo.style.opacity = "0.7";
    photoThree.style.opacity = "0.7";
    photoFour.style.opacity = "0.7";
    mainPhoto.style.backgroundImage = "url('images/bags/3.jpg')"
} 

const chosePhotoTwo = () => {
    photoTwo.style.opacity = "1";
    photoOne.style.opacity = "0.7";
    photoThree.style.opacity = "0.7";
    photoFour.style.opacity = "0.7";
    mainPhoto.style.backgroundImage = "url('bag3/testforbasket.jpg')"
} 

const chosePhotoThree = () => {
    photoThree.style.opacity = "1";
    photoOne.style.opacity = "0.7";
    photoTwo.style.opacity = "0.7";
    photoFour.style.opacity = "0.7";
    mainPhoto.style.backgroundImage = "url('bag3/39086636d02138df800c2832b8480c44.jpg')"
} 

const chosePhotoFour = () => {
    photoFour.style.opacity = "1";
    photoOne.style.opacity = "0.7";
    photoTwo.style.opacity = "0.7";
    photoThree.style.opacity = "0.7";
    mainPhoto.style.backgroundImage = "url('bag3/3f79615f34ff9654d982821d3be17016.jpg')"
} 

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
    basketMenu.style.display = "none";
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

//responsive login
const loginResponsive = () => {
    loginPage.style.display = "flex";
    navigation.style.display = "none";
    hamburger.style.visibility = "initial";
    hamburgerClose.style.display = "none";
    main.style.opacity = "0.5";
 }

//  arrow

aroRight.addEventListener("click", function() {    
            otherPhotos.scrollBy({
                left: photoOne.width,
                behavior: "smooth"
            });
});

aroLeft.addEventListener("click", function() {
    
    otherPhotos.scrollBy({
        left: -photoOne.width,
        behavior: "smooth"
    });

    aroRight.style.display = "initial";
});

otherPhotos.addEventListener("scroll", function() {

        if (otherPhotos.scrollLeft > (photoOne.width * 2)) {
            aroRight.style.display = "none";
            aroLeft.style.display = "initial";
    
        }
        if (otherPhotos.scrollLeft <= 10) {
            aroLeft.style.display = "none";
            aroRight.style.display = "initial";
    
        }
    
        if (otherPhotos.scrollLeft !== 0) {
            aroLeft.style.display = "initial";
        }
    
        if (otherPhotos.scrollLeft < (photoOne.width * 2)) {
            aroRight.style.display = "initial";
        }

})

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
