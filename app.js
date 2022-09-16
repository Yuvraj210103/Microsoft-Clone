const hamburger = document.getElementById('hamburger');
const list = document.getElementById('nav-list');
function listHide() {
    list.classList.toggle("block");
    if (list.className == "bg-gray-100 block") {
        hamburger.innerHTML = `<i class="fa-lg fa-solid fa-xmark "></i>`;
    }
    else {
        hamburger.innerHTML = `<box-icon name='menu'></box-icon>`
    }
}
function closeMenu(){
    list.classList.toggle("block");
    if (list.className == "bg-gray-100 block") {
        hamburger.innerHTML = `<i class="fa-lg fa-solid fa-xmark "></i>`;
    }
    else {
        hamburger.innerHTML = ` <box-icon name='menu'></box-icon>`
    }
}
function scrollBack(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}
function reload(){
    window.location.reload();
}
