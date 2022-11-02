var pict = document.querySelector('.pictDiv');
var quote = document.querySelector('.quoteDiv');
var img = ['„Są jak marionetki, ja pociągam za sznurki, a oni tańczą.”', ' „Sztuka nie może być spętana zdrowym rozsądkiem.” ', '„Przysięgam, że każdy spektakl będzie tym ostatnim, ale za każdym razem kłamię.”', '„Moja praca byłaby łatwiejsza, gdyby krew miała więcej kolorów.”']

function zmianaCytatu(){
    let i = Math.floor(Math.random()*4);

    pict.innerHTML = '<img src="jhin' + i + '.jpg" alt="">'; 
    quote.innerHTML = '<p>' + img[i] + '</p>';
}

setInterval(zmianaCytatu, 4000);