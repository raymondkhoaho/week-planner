var $entryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal');
var $overlay = document.querySelector('.overlay');
var $cancelButton = document.querySelector('.cancel-button');

$entryButton.addEventListener('click', openModal);
function openModal(event) {
  $modal.className = 'modal';
  $overlay.className = 'overlay';
}

$cancelButton.addEventListener('click', closeModal);
function closeModal(event) {
  $modal.className = 'modal hidden';
  $overlay.className = 'overlay hidden';
}
