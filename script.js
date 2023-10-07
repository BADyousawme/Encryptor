const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

function encription(text,key){
    let encription="";
    for(let i=0;i<text.length;i++){
        const textchar=text[i];
        const keychar=key[i % key.length];
        const textindex=alphabet.indexOf(textchar);
        const keyindex =alphabet.indexOf(keychar);
        if(textindex === -1){
            encription+=textchar;
        }
        else{
            const newindex =(textindex+keyindex)%alphabet.length;
            encription +=alphabet[newindex];
        }
    }
    return encription;
}

function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (encryptedText === -1) {
            decryptedText += encryptedChar;
        } else {
            let newIndex = encryptedIndex - keyIndex;
            if (newIndex < 0) newIndex += alphabet.length;
            decryptedText += alphabet[newIndex];
        }
    }

    return decryptedText;
}

function updateresult(isencrypting){
    const text=document.getElementById("message").value;
    const key = document.getElementById("key").value;
    let result="";
    if (isencrypting) {
        result = encription(text, key);
    } else {
        result = decryptText(text, key);
    }
    document.getElementById("result").textContent=result;
}

document.getElementById("en-btn").addEventListener('click', function () {
    updateresult(true);
});

document.getElementById("de-btn").addEventListener('click', function () {
    updateresult(false);
});

// Initialize the result with encrypted text when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateresult(true);
});