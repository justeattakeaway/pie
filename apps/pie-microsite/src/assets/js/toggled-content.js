const buttonA = document.getElementById('page-content-toggle-a');
const buttonB = document.getElementById('page-content-toggle-b');

const contentA = document.getElementById('toggled-content-a');
const contentB = document.getElementById('toggled-content-b');

buttonA.addEventListener('click', () => {
    console.log('clicky');
    contentA.style.display = 'block';
    contentB.style.display = 'none';
});

buttonB.addEventListener('click', () => {
    console.log('clicky');
    contentA.style.display = 'none';
    contentB.style.display = 'block';
});
