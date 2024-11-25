let menu = documents.querySelector('#menu-icon');
let navlist = document.querySelector('.nalist');

menu.onclock =() => {
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('open')
}