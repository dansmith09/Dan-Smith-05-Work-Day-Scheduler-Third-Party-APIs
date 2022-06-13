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


var saveButton9am = document.getElementById('saveButton9am');
saveButton9am.addEventListener('click', saveText)

function saveText() {
    var todo = textBlock9am.value;
    /// save to local storage
    /// print from local storage
    alert(todo);
}

/// content editable takes value when save button clicked saves to local storage and displays
/// maybe if statement that says if local storage is null then be empty however if 
// / something is there show the ting

// Trying to store a string in 