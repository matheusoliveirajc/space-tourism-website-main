fetch('documents/data.json')
    .then(response => response.json())
    .then(data =>{
        const crew = data.crew;
    }).catch(error => console.error("Ops! Houve um erro, recarregue a página ou volte mais tarde.", error));