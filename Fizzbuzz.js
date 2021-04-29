for(var i=1;i<1000;i++){
    var logString = "";
    if(i % 3==0){
        logString+="Fizz";
    }
    if(i % 5==0){
        logString+="Buzz";
    }
    if(logString==""){
        console.log(i)
    }else{
        console.log(logString);
    } 
}
