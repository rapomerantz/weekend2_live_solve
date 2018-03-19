let calculate = function (mathyObject) {
    console.log('in calculate module calculate function: ', mathyObject);
    
    ///example data from a test: { x: '3', y: '9', type: '*' }
    
    let answer = 0; 
    if( mathyObject.type === '-' ){
        answer = Number(mathyObject.x) - Number(mathyObject.y); 
    }
    else if( mathyObject.type === '*' ){
        answer = Number(mathyObject.x) * Number(mathyObject.y); 
    }
    else if( mathyObject.type === '/' ){
        answer = Number(mathyObject.x) / Number(mathyObject.y); 
    }
    else {
        answer = Number(mathyObject.x) + Number(mathyObject.y); 
    }
    return answer; 
} // end calculate

module.exports = calculate; 


