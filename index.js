 
document.getElementById('menuButton').addEventListener( 'click', openCloseButton)

const menu = document.getElementById('menu')

function openCloseButton(){
    menu.classList.toggle('menuOpen')
}