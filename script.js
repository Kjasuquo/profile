function sendMail(){
    const subject = document.getElementById('subject'.value);
    const name = document.getElementById('name').value;
    const subject = document.getElementById('message').value;
    window.open('mailto:okoasuquo@gmail.com?subject=${subject}&body=${body}');
}