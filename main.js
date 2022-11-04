var data = {
  view: 'home',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('data-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
function unloadWindow(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
}
window.addEventListener('beforeunload', unloadWindow);

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

var $submitForm = document.querySelector('.input-form');
$submitForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  var obj = {};
  event.preventDefault();
  obj.dayofweek = $submitForm.elements.dayofweek.value;
  obj.time = $submitForm.elements.time.value;
  obj.notes = $submitForm.elements.notes.value;
  obj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(obj);
  $submitForm.reset();
  closeModal();
}
