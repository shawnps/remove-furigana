var furigana = document.getElementsByTagName("rt");

function removeFurigana () {
    for (i=0; i<furigana.length; i++) {
        d = furigana[i];
        d.innerHTML = '';
    }
}

removeFurigana();
