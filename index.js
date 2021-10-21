document.addEventListener('DOMContentLoaded', function() {
    getStatus();
})

const endpoint = "http://dedwards.duckdns.org:1234/";

function getStatus() {
    const url = endpoint.concat('state');
    document.getElementById('status').innerHTML = 'getStatus function ran';
    fetch(url)
    .then(response => console.log(response));
}

function toggle() {
    const url = endpoint.concat('toggle');
    fetch(url);
    getStatus();
}
