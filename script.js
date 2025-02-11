document.getElementById('proceedBtn').addEventListener('click', function() {
    document.getElementById('proceedSection').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('responseText').innerText = 'Thank you bebe, see you in bed hihihihihi 💖';
    document.getElementById('response').style.display = 'block';
});

document.getElementById('yesBtn2').addEventListener('click', function() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('responseText').innerText = 'Thank you bebe, see you in bed hihihihihi 💖';
    document.getElementById('response').style.display = 'block';
});

document.getElementById('retryBtn').addEventListener('click', function() {
    document.getElementById('response').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
});