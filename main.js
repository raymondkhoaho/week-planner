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

$overlay.addEventListener('click', closeModal);

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

var $daysDiv = document.querySelector('div.days');
var $days = document.querySelectorAll('.day-link');
$daysDiv.addEventListener('click', daysofweekHandler);
function daysofweekHandler(event) {
  for (var i = 0; i < $days.length; i++) {
    if (event.target.getAttribute('data-view') === $days[i].getAttribute('data-view'))
  }
}

      function renderEntry(obj) {
        var tableRow = document.createElement('tr');
        var tableDataTime = document.createElement('td');
        tableDataTime.textContent = obj.time;
        var tableDataNotes = document.createElement('td');
        tableDataNotes.textContent = obj.notes;

        tableRow.appendChild(tableDataTime);
        tableRow.appendChild(tableDataNotes);

        return tableRow;
      }

      var tableBody = document.
