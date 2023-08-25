// Ketika di scroll
window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// Ketika toggle menu ditekan
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}