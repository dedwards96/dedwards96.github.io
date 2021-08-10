document.addEventListener('DOMContentLoaded', function() {
    sayHello("Dan");
})

function sayHello(name) {
    const phrase = document.createElement('h4');
    phrase.innerHTML = `Hi ${name}, this text was added by js.`;
    document.querySelector('body').append(phrase);
}