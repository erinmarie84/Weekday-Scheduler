 //Click on timeblock to enter an event, save event in local storage 
var time= $('.time');
var timeNow= moment().hour();


document.addEventListener('DOMContentLoaded', function(){
colorChange();

function saveinLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
    //console.log (key, value);
}
    $(document).ready(function(){
    $('.btn').on('click', function(){
        event.preventDefault();
        var input= $(this).siblings('.description').val().trim();
        var time= $(this).parent().attr('data-hour');
        
        //console.log(input, 'input');
        //console.log(time, 'time');
        saveinLocalStorage(time, input);
    })
 
$('#9am .description').val(JSON.parse(localStorage.getItem('9')));
$('#10am .description').val(JSON.parse(localStorage.getItem('10')));
$('#11am .description').val(JSON.parse(localStorage.getItem('11')));
$('#12pm .description').val(JSON.parse(localStorage.getItem('12')));
$('#13pm .description').val(JSON.parse(localStorage.getItem('13')));
$('#14pm .description').val(JSON.parse(localStorage.getItem('14')));
$('#15pm .description').val(JSON.parse(localStorage.getItem('15')));
$('#16pm .description').val(JSON.parse(localStorage.getItem('16')));
$('#17pm .description').val(JSON.parse(localStorage.getItem('17')));
$('#18pm .description').val(JSON.parse(localStorage.getItem('18')));

})
//Color code each time block to indicate past, current and future
    //When event time has passed event block will change to grey 
    //When event time is current time block will change to red
    //When event is in the future event time block will change to green
function colorChange(){
    time.each(function (){
    var thisHour= $(this);
        //console.log(thisHour, 'thisHour');
        //console.log(time, 'time' );
    var timeHour= parseInt(thisHour.attr('data-hour'),10);
        //console.log(timeHour, 'timeHour');
        //console.log(timeNow, 'timeNow');
    thisHour.removeClass('past', 'present', 'future')

    if(timeHour === timeNow){
        thisHour.addClass('present');
    }

    if(timeHour > timeNow){
        thisHour.addClass('future');
    }

    if(timeHour < timeNow){
        thisHour.addClass('past');
    }


    })
}  

$('#currentDay').text(moment().format('MMM Do YYYY'));
})
