let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id  = sec.getAttribute('id');

        if(top => offset && top <offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            }   )
        }

    })
}



menuicon.onclick = () => {
    menuicon.classlist.toggle   ('bx-x');
navbar.classlist.toggle('active')
}

