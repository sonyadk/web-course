
function crtstr(){
    let alphabet = 'abcdefgfijklmnopqrstuvwxyz0123456789',
    word = '';
    for(let i = 0; i < 4; i++){
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return word;
}

function picturestr(){
    let c = document.getElementById("c");
    const ctx = c.getContext("2d");
    const text = crtstr();
    ctx.font = "30px Arial";
    ctx.strokeText(text,70,100)

document.getElementById('myb').onclick = function(){
        text1 = document.getElementById('mi').value;
        if (text1.localeCompare(text) == 0){
            alert("Вы прошли проверку");
        }
        else{
            alert("Вы не прошли проверку");
        }    
    }
}
picturestr()





//console.log(word)