
let arr=prompt('Введите строку');
var pos = 0;
var last_pos=-5;
var count=0;

var target=' ';
while (true) {
    var foundPos = arr.indexOf(target, pos);
    if (foundPos == -1) break;

    if (foundPos==0){  //start space
        last_pos=foundPos-1;       
    }

    if (last_pos!==(foundPos-1)){//checking adjacent spaces
            count++;
    }

    pos = foundPos + 1; // continue search from next
    last_pos=foundPos; 
}
    //checking if space was before last word
    if (last_pos<(arr.length-1)){
        count++;
    }
    //no space, word exist
    if ((count===0)&&(arr.length>0)){
        
        count=1;
    }
    //checking string  consisting of spaces only
   var just_spac=true;
    for(var i=0; i<arr.length;i++){
        if (arr.charAt(i)!=' ')  
            just_spac=false;
    }
    if (just_spac) count=0;

alert('всего слов '+count);