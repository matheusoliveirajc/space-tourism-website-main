fetch("documents/data.json")
    .then(response => response.json())
    .then(data => {
        const technology = data.technology;
        console.log(technology);
    }).catch(error => console.log("Ops! Parece que houve um erro: ", error));