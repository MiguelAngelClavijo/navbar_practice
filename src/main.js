const menuextend = document.querySelector('.menu-extend');
const menucompress = document.querySelector('.menu-compress');
const sidebar = document.querySelector('.sidebar-extend');
const buttontarget = document.querySelectorAll('.target')

menuextend.onclick = function () {
    if (sidebar.classList.contains('sidebar-extend')) {
        sidebar.classList.remove('sidebar-extend')
        sidebar.classList.add('sidebar-compress')
    }
};

menucompress.onclick = function () {
    if (sidebar.classList.contains('sidebar-compress')) {
        sidebar.classList.remove('sidebar-compress')
        sidebar.classList.add('sidebar-extend')
    }
};

buttontarget.forEach(element => {
    element.addEventListener('click', () => {
        buttontarget.forEach(otherElement => {
            if (otherElement !== element && otherElement.classList.contains('ontarget')) {
                otherElement.classList.remove('ontarget');
            }
        });
        element.classList.add('ontarget');
    });
});
