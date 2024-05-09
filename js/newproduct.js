const fourBox = document.getElementById('four-box');
const sixBox = document.getElementById('six-box');
const burger = document.getElementById('burger');
const oneBox = document.getElementById('one-box')

const twoBytwo = document.getElementsByClassName('first-order')[0];
const threeBythree = document.getElementsByClassName('second-order')[0];
const sixBysix = document.getElementsByClassName('third-order')[0];
const oneByone = document.getElementsByClassName('fourth-order')[0];

// Store the original colors of the buttons
const fourBoxOriginalColor = fourBox.style.color;
const oneBoxOriginalColor = fourBox.style.color;
const sixBoxOriginalColor = sixBox.style.color;
const burgerOriginalColor = burger.style.color; // Assuming the burger button has a color style

// Function to reset all button colors and visibility (excluding the clicked button)
function resetColorsAndVisibility(clickedButton) {
  sixBox.style.color = clickedButton !== sixBox ? sixBoxOriginalColor : "gray";    // Reset sixBox if not clicked
  fourBox.style.color = clickedButton !== fourBox ? fourBoxOriginalColor : "gray";  // Reset fourBox if not clicked
  burger.style.color = clickedButton !== burger ? burgerOriginalColor : "gray";      // Reset burger if not clicked (assuming color style)
  oneBox.style.color = clickedButton != oneBox ? oneBoxOriginalColor : 'gray' ;

twoBytwo.classList.remove('hidden');
threeBythree.classList.add('hidden');
sixBysix.classList.add('hidden');
oneByone.classList.add('hidden')
}

// Event listeners for each button
fourBox.addEventListener('click', () => {
resetColorsAndVisibility(fourBox);
twoBytwo.classList.remove('hidden');
threeBythree.classList.add('hidden');
sixBysix.classList.add('hidden');
oneByone.classList.add('hidden');
});

sixBox.addEventListener('click', () => {
resetColorsAndVisibility(sixBox);
twoBytwo.classList.add('hidden');
threeBythree.classList.remove('hidden');
sixBysix.classList.add('hidden');
oneByone.classList.add('hidden');
});

burger.addEventListener('click', () => {
resetColorsAndVisibility(burger);
twoBytwo.classList.add('hidden');
threeBythree.classList.add('hidden');
sixBysix.classList.remove('hidden');
oneByone.classList.add('hidden');
});


oneBox.addEventListener('click', () => {
resetColorsAndVisibility(burger);
twoBytwo.classList.add('hidden');
threeBythree.classList.add('hidden');
sixBysix.classList.add('hidden');
oneByone.classList.remove('hidden');
oneByone.classList.add('d-flex');
});
