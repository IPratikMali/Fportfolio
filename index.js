const li = document.querySelectorAll(".links");
const div = document.querySelectorAll("div");
function activeMenu(){
    let len = div.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu)
}