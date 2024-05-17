document.addEventListener("DOMContentLoaded", function() {
    //const card = document.querySelector(".cards"); old card var
    const cards = document.querySelectorAll(".cards");
    const overlay = document.querySelector(".overlay");
    let currentlyfocusedcard = null;


    // focus card
    function focusCard(card) {
        if (currentlyfocusedcard !== null) {
            currentlyfocusedcard.classList.remove("focused");
        }
        
        card.classList.add("focused");
        overlay.style.display = "block";
        currentlyfocusedcard = card;
    }

    //unfocus card
    function unfocusCard() {
        if (currentlyfocusedcard == null) {
            console.log("Error walay focused card")
        }
        else {
            currentlyfocusedcard.classList.remove("focused");
            overlay.style.display = "none";
        }
    }

    //card click check old

    // card.addEventListener("click",function() {
    //     if (card.classList.contains("focused")) {
    //         unfocusCard(card);
    //         } else {
    //         focusCard(card);
    //         }
    // });

    //card click check new
    cards.forEach(card => {
        card.addEventListener("click", function() {
            if (card.classList.contains("focused")) {
                unfocusCard();
                console.log("card unfocus");
                console.log(card.classList);
                console.log(card);
            } else {
                focusCard(card);
                console.log("card focus");
                console.log(card.classList);
                console.log(card);
            }
        });
    });
    
    //overlay click check
    overlay.addEventListener("click", function() {
        unfocusCard();
    });



});