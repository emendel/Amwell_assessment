// Requiring fs module in which  
// readFile function is defined. 
const fs = require('fs') 

//Check if a number exists in a list
function exists(vector, number){
    for (var i = 0; i < vector.length; i++){
        if (number == vector[i]){
            return true;
        }
    }
    return false;
}

function find_lowest_x(file, size){
    fs.readFile(file, (err, data) => { 
        if (err) throw err; 

        var lines = data.toString().split('\n');
        var vec = []
        for (var i = 0; i < lines.length; i++){
            var num = parseInt(lines[i]);
            if (typeof num === 'number' && !isNaN(num)){
                if (vec.length < size){
                    vec.push(num);
                    vec.sort((a,b)=>a-b); 
                }
                else if (vec[2] > num && !exists(vec, num)){
                    vec[2] = num;
                    vec.sort((a,b)=>a-b); 
                }
            }
        }
        console.log(vec.sort((a,b)=>a-b));
    }) 
}

find_lowest_x('text.txt', 3);
