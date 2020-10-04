const discordIcon = document.getElementById('discord-icon');
const discordName = document.getElementById('discord-name');

discordIcon.onclick = function(e) {
    setTimeout(function () {
        discordName.className += ' blur-in'
    }, 50)
}