var txtDis = document.getElementsByClassName('txt');


//function to check if string is a palindrome
function palChecker(str){
    var strLength = str.length;
    for(var i = 0; i < strLength / 2; i++){
        if(str[i] != str[strLength - 1 - i]){
            return txtDis[0].innerHTML='The text is not a Palindrome'
        }
        else{
            return txtDis[0].innerHTML = "The text is a Palindrome";
        }
    }
}

//button submit function
function btnSub(){
    var btnSubmit = document.getElementById('btnSubmit');
    var inputTxt = document.getElementById('inputTxt');
    btnSubmit.onclick = function(){
        event. preventDefault();
        if(inputTxt.value != ''){
            palChecker(inputTxt.value);
            inputTxt.value = '';
        }
        else{
            return txtDis[0].innerHTML='Please enter a text';
        }
    }
}
btnSub();

