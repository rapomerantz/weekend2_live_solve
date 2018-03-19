$(document).ready(readyNow); 

function readyNow () {
    $('#clearButton').on('click', function() {
        console.log('in clearButton on click');
    });// end clearButton on click
    
    
    $('#doMathButton').on('click', function() {
        console.log(' in doMathButton on click');
        //capture user input
        let x = $('#xIn').val();
        let y = $('#yIn').val();
        let type = $('#typeIn').val();
        //store in an object
        let objectToSend = {
            x: x,
            y: y,
            type: type,
        };
        console.log('object to send:', objectToSend);
        //send object to server on AJAX
        $.ajax({
            type: 'POST',
            url: '/doMath', 
            data: objectToSend
        }).done (function (response) {
            console.log('back from POST with:', response);
            getAnswer ();            
        });//end AJAX


        //display answer on DOM 
        //



    }); //end #doMathButton on click
}//END READY NOW 

function getAnswer () {
    $.ajax({
        type: 'GET',
        url: "/answer",
    }).done(function (response){
        console.log('back from GET with: ', response );
        outputDiv = $('#answerOut') ;
        outputDiv.empty();
        outputDiv.append(response.answer); 
    })
}//end get answer