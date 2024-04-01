fetch('documents/data.json')
    .then(response => response.json())
    .then(data => {
        const destination = data.destination;
        const destination_info = document.querySelector('.destination-info');
        const destination_img = document.querySelector('.destination-img > img');
        const destination_item = document.querySelectorAll('.destination-item');
        function selectDestination(value){
            destination_item[0].classList.add('destination-selected');
            destination_img.src = `${destination[value].images.png}`;
            destination_img.classList.remove('fade-in');
            destination_info.classList.remove('fade-in');
            void destination_img.offsetWidth;
            void destination_info.offsetWidth;
            destination_info.innerHTML = `<h1 class="destination-name">${destination[value].name}</h1>
            <p class="destination-description">${destination[value].description}</p>
            <div class="distance-travel-conteiner">
            <p class="distance"><span class="distance-travel-legend">avg. distance</span><span class="distance-travel-val">${destination[value].distance}</span></p>
            <p class="travel"><span class="distance-travel-legend">est. travel time</span><span class="distance-travel-val">${destination[value].travel}</span></p>
            </div>`;
            destination_img.classList.add('fade-in');
            destination_info.classList.add('fade-in');
        }
        selectDestination(0);
        destination_item.forEach((item, index) =>{
            item.addEventListener('click', function(){
                selectDestination(index);
                destination_item.forEach(otherItem =>{
                    otherItem.classList.remove('destination-selected');
                });
                this.classList.add('destination-selected');
            });
        });
    })
    .catch(error => console.error("Ops!, houve um erro, recarregue a página ou tente mais tarde.", error));