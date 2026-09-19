const button = document.querySelector("#likeBtn");
const card = document.querySelector("#card");

button.addEventListener("click", function () {

    card.classList.toggle("bg-pink-100");

    if(button.textContent === "🤍 Like"){
        button.textContent = "❤️ Liked";
    }else{
        button.textContent = "🤍 Like";
    }

});