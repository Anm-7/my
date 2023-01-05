let lis = document.querySelectorAll(".links li ");
// console.log(lis);
lis.forEach((li) => {
    li.addEventListener("click", removeClass);
    li.addEventListener("click", addClass);
});

function removeClass() {
    lis.forEach((li) => li.classList.remove("active"));
}

function addClass() {
    lis.forEach(() => this.classList.add("active"));
}

let up = document.querySelector(".up");
window.onscroll = function() {
    if (window.scrollY >= 700) {
        up.style.display = "block";
    }
};
up.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

// function find_position_for(letter) {
//     let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let start = alpha.indexOf(letter);
//     return start;
// }

// console.log(find_position_for("c"));
// console.log(find_position_for("a"));
// console.log(find_position_for("C"));