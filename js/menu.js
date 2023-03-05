const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
const header = document.querySelector('header')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if(currentScroll > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }


})