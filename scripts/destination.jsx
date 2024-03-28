fetch('documents/data.json')
    .then(response => response.json())
    .then(data => {
        const destinations = data.destinations;
        console.log(destinations);
    })
    .catch(error => console.error('Erro:', error));