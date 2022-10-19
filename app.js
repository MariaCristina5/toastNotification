const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
})

//aici se creeaza un div pentru o notificare
function createNotification () {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif)
    notif.innerText = 'This challenge is crazy!';
   
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}