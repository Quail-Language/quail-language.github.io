function toggleMenu(id) {
    let thing = document.getElementById(id)
    if (thing.classList.contains('navbar-active')) {
        thing.classList.remove('navbar-active')
    } else {
        thing.classList.add('navbar-active')
    }
}