// ===========================
// SECTION NAVIGATION
// ===========================

const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".next-btn");

let currentSection = 0;


// Hide all sections except first

sections.forEach((section, index) => {

    if(index !== 0){

        section.classList.add("hidden");

    }

});


// Show next section function

function showNextSection(){

    if(currentSection < sections.length){

        sections[currentSection].classList.add("hidden");

        currentSection++;


        if(currentSection < sections.length){

            sections[currentSection].classList.remove("hidden");

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    }

}




// ===========================
// BEGIN BUTTON
// ===========================


const beginBtn = document.getElementById("beginBtn");


if(beginBtn){

    beginBtn.addEventListener("click", () => {

        showNextSection();

    });

}




// ===========================
// NEXT BUTTONS
// ===========================


buttons.forEach(button => {

    button.addEventListener("click", () => {

        showNextSection();

    });

});





// ===========================
// YES / NO QUESTION
// ===========================


const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const noPopup = document.getElementById("noPopup");

const popupMessage = document.getElementById("popupMessage");

const closeNoPopup = document.getElementById("closeNoPopup");


let noClicks = 0;



// YES BUTTON

if(yesBtn){

    yesBtn.addEventListener("click", () => {

        window.location.href = "yes.html";

    });

}



// NO BUTTON

if(noBtn && noPopup && popupMessage){

    noBtn.addEventListener("click", () => {


        noClicks++;


        if(noClicks === 1){

            popupMessage.innerHTML =
            "okay, u can think abt it muna :))";

            noBtn.style.display = "none";

        }


        noPopup.style.display = "flex";


    });

}



// CLOSE POPUP

if(closeNoPopup){

    closeNoPopup.addEventListener("click", () => {

        noPopup.style.display = "none";

    });

}





// ===========================
// MUSIC
// ===========================


const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");


let playing = false;



// Play music after Begin button

if(beginBtn && music){

    beginBtn.addEventListener("click", () => {


        if(!playing){


            music.play()

            .then(() => {


                playing = true;


                if(musicButton){

                    musicButton.innerHTML = "♫";

                }


            })


            .catch(() => {


                console.log("Music needs interaction");


            });


        }


    });

}




// Music toggle button

if(musicButton && music){


    musicButton.addEventListener("click", () => {



        if(playing){


            music.pause();


            musicButton.innerHTML = "♫";


            playing = false;



        }


        else{


            music.play()

            .then(() => {


                musicButton.innerHTML = "❚❚";


                playing = true;


            });



        }



    });


}