// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendList = [];
function addFriend() {
    let inputElement = document.getElementById('amigo');
    let name = inputElement.value.trim();
    
    const nameRegex = /^[a-zA-Z\s]+$/;
    cleanErrorMessages();
    if (!name) {
        showError('Por favor, inserta un nombre');
        return;
    }

    if (!nameRegex.test(name)) {
        showError('El nombre no puede contener números ni símbolos');
        return;
    }

    if (friendList.includes(name)) {
        showError('El nombre ya se encuentra agregado');
        return;
    }

    friendList.push(name);
    console.log(friendList);
    updateFriendList();
    cleanField();
}
function cleanErrorMessages() {
    
    let errorMessageList = document.getElementById('errorMessage');
    errorMessageList.innerHTML = '';
}

function showError(message) {
    // Crear un nuevo li para el mensaje de error
    let errorMessageList = document.getElementById('errorMessage');
    let li = document.createElement('li');
    li.textContent = message;
    li.classList.add('error-message'); // Puedes agregar una clase CSS para estilizar el mensaje si lo deseas.
    errorMessageList.appendChild(li);
    // Mostrar alerta en el navegador
    alert(message);
}


function cleanField() {
    Field = document.querySelector('input');
    Field.value = '';
}

// atualizar list de friendList 
function updateFriendList() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = ''

    for (let i = 0; i < friendList.length; i++) {
        const li = document.createElement('li')
        li.textContent = friendList[i]
        list.appendChild(li)
    }
}

// draw friendList 
function drawFriend() {
    if (friendList == [] || friendList.length == 0) {
        alert('Por favor, adicione un nombre antes de sortear')
    } else {
        const index = Math.floor(Math.random() * friendList.length)
        const secretFriend = friendList[index]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `El nombre de su amigo secreto es: ${secretFriend}`
        ul.appendChild(li)
        cleanErrorMessages();
        shootConfetti();
        friendList = [];
        updateFriendList();
    }
}

function shootConfetti() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Evita el comportamiento por defecto de Enter (por ejemplo, el salto de línea en un campo de texto)
        addFriend();  // Llama a la función para agregar el amigo
    }
});