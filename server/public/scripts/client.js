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
        //send object to server
        //display answer on DOM 
        //



    }); //end #doMathButton on click
}//END READY NOW 