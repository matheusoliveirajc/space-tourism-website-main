const menu = document.querySelector('.menu-mobile');
const openIcon = document.querySelector('.open-menu-icon');
const closeIcon = document.querySelector('.close-menu-icon > img');
function changeMenu(){
    document.body.classList.toggle('blockScrolly');
    menu.classList.toggle('open-menu');
    document.addEventListener('click', (event)=>{
        let isClickMenu = menu.contains(event.target);
        let isClickOpen = openIcon.contains(event.target);
        if(!isClickMenu && !isClickOpen){
            document.body.classList.remove('blockScrolly');
            menu.classList.remove('open-menu');
        }
    });
}
openIcon.addEventListener('click', changeMenu);
closeIcon.addEventListener('click', changeMenu);