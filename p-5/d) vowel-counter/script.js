var btn = document.getElementById('Calculate');

btn.addEventListener('click', function () {

    var text = document.getElementById('txt').value;
    let text_length = text.length;
    let ch = '';
    let count = 0;

    for (let i = 0; i < text_length; i++) {
        ch = text.charAt(i);
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
            count++;
        }
    }
    alert(count);
});