const box = document.querySelectorAll('.boxtop');
const chilled = document.querySelectorAll('.boxtop_chilled');
const rotate = document.querySelectorAll('.rotate');
box[0].addEventListener('click', function() {
    chilled[0].classList.toggle('extra')
    rotate[0].classList.toggle('extra')
});
box[1].addEventListener('click', function() {
    chilled[1].classList.toggle('extra')
    rotate[1].classList.toggle('extra')
});