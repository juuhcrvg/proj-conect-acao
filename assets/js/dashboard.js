// EVENTOS // 

function displayFeaturedEvents(events) {
    const featuredEventsContainer = document.querySelector('#featured-events .event-list-container');
    if (featuredEventsContainer) {
        featuredEventsContainer.innerHTML = ''; // Limpa a mensagem "Carregando eventos..."
        const featured = events.slice(0, 3); // Pega os 3 primeiros eventos

        featured.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card'); // Adicione uma classe para estilização

            const nameHeading = document.createElement('h4');
            nameHeading.textContent = event.name;

            const dateParagraph = document.createElement('p');
            dateParagraph.textContent = `Data: ${event.date}`;

            const locationParagraph = document.createElement('p');
            locationParagraph.textContent = `Local: ${event.location}`;

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Ver Detalhes';
            // Você pode adicionar um evento de clique para redirecionar para a página de detalhes do evento

            eventCard.appendChild(nameHeading);
            eventCard.appendChild(dateParagraph);
            eventCard.appendChild(locationParagraph);
            eventCard.appendChild(detailsButton);

            featuredEventsContainer.appendChild(eventCard);
        });
    }
}

// Carrega e exibe os eventos de destaque
const sampleEvents = getSampleEvents();
displayFeaturedEvents(sampleEvents);
;
function initializeEvents() {
    const events = getStoredData('events');
    if (events.length === 0) {
        const sampleEvents = getSampleEvents();
        storeData('events', sampleEvents);
    }
}


//RELATORIO
function handleEventSubmit(e) {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventDescription = document.getElementById('event-description').value;

    if (!eventName || !eventDate || !eventLocation || !eventDescription) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }



  //JUNTE -SE   
    const newEvent = {
        id: Date.now().toString(), // Simple unique ID
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        description: eventDescription,
        volunteersNeeded: parseInt(document.getElementById('event-volunteers-needed').value) || 0,
        status: 'Aberto'
    };
}
// Abre o modal com a imagem e legenda

function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImage.src = imageSrc;
    modalCaption.textContent = captionText;
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}



