// Shows current date in header title
var currentDay = document.getElementById('currentDay');
currentDay.innerHTML = moment().format('dddd, MMMM Do')

// Defines the current time hour in the format of '10 PM'
var currentTimeHour = moment().format('h A');
// Gets Time Block Time to test against current time in format of '10 PM'
var timeBlock9am = document.getElementById('time-block-9am').innerHTML;
var timeBlock10am = document.getElementById('time-block-10am').innerHTML;
var timeBlock11am = document.getElementById('time-block-11am').innerHTML;
var timeBlock12pm = document.getElementById('time-block-12pm').innerHTML;
var timeBlock1pm = document.getElementById('time-block-1pm').innerHTML;
var timeBlock2pm = document.getElementById('time-block-2pm').innerHTML;
var timeBlock3pm = document.getElementById('time-block-3pm').innerHTML;
var timeBlock4pm = document.getElementById('time-block-4pm').innerHTML;
var timeBlock5pm = document.getElementById('time-block-5pm').innerHTML;
// Puts Time Blocks into array
var timeBlockArr = [timeBlock9am, timeBlock10am, timeBlock11am, timeBlock12pm, timeBlock1pm, timeBlock2pm, timeBlock3pm, timeBlock4pm, timeBlock5pm];
// Gets Time Block Text Block to change formatting based on current Time
var textBlock9am = document.getElementById('text-block-9am');
var textBlock10am = document.getElementById('text-block-10am');
var textBlock11am = document.getElementById('text-block-11am');
var textBlock12pm = document.getElementById('text-block-12pm');
var textBlock1pm = document.getElementById('text-block-1pm');
var textBlock2pm = document.getElementById('text-block-2pm');
var textBlock3pm = document.getElementById('text-block-3pm');
var textBlock4pm = document.getElementById('text-block-4pm');
var textBlock5pm = document.getElementById('text-block-5pm');
// Puts Text Blocks into array
var textBlockArr = [textBlock9am, textBlock10am, textBlock11am, textBlock12pm, textBlock1pm, textBlock2pm, textBlock3pm, textBlock4pm, textBlock5pm];

// If Time is in past, present or future; change styling accordingly
for (i = 0; i < timeBlockArr.length; i++) {

    var timeBlock = timeBlockArr[i];
    var textBlock = textBlockArr[i];

    if (moment(currentTimeHour, 'h A').isAfter(moment(timeBlock, 'h A'))) {
        textBlock.classList.add('past');
    } else if (moment(currentTimeHour, 'h A').isBefore(moment(timeBlock, 'h A'))) {
        textBlock.classList.add('future');
    } else if (moment(currentTimeHour, 'h A').isSame(moment(timeBlock, 'h A'))) {
        textBlock.classList.add('present');
    }
}

saveButtons = document.getElementsByClassName("saveBtn"); // Grabs all save buttons

// Loops through save buttons and adds event listener and adds buttons to array and adds save
for (i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click',handleSaveButton);
}

// When save button clicked makes key in local storage and populates with the text Block's value
function handleSaveButton () {
    for (i = 0; i < textBlockArr.length; i++) {

    var localKey = 'todo' + i;
    var localValue = textBlockArr[i].value
    // Gets todo list from text blocks and saves to local storage
    localStorage.setItem(localKey,localValue);
    }
}

// Displays all text block items from local storage
function displayTodoText () {
    for (i = 0; i < textBlockArr.length; i++) {
        textBlockArr[i].value = localStorage.getItem('todo' + i);
    }
}
displayTodoText();

// When clearDayButton clicked empty strings are saved to local storage to erase todo data
function handleClearDayButton () {
    for (i = 0; i < textBlockArr.length; i++) {

    var localKey = 'todo' + i;
    // Saves an empty string to local storage to erase todo info
    localStorage.setItem(localKey,'');
    }
    displayTodoText();
}

// Grabs cleardayButton and adds event listener to clear day text
var clearDayButton = document.getElementById('clearDayButton');
clearDayButton.addEventListener('click', handleClearDayButton);