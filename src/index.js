console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
    let allBreeds = [];
  
    // Challenge 1: Fetch and Display Dog Images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imgUrl => {
          const img = document.createElement('img');
          img.src = imgUrl;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Challenge 2: Fetch and Display Dog Breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    // Function to render breeds
    const renderBreeds = (breeds) => {
      breedList.innerHTML = '';
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedList.appendChild(li);
  
        // Challenge 3: Change Font Color on Click
        li.addEventListener('click', () => {
          li.style.color = 'blue';
        });
      });
    };
  
    // Challenge 4: Filter Breeds by Selected Letter
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  });
  
