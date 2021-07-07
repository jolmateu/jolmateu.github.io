const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })

      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++ ){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4')
            let image = document.createElement('img');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            h3.textContent = prophets[i].birthdate + ' - ' + prophets[i].death;
            h4.innerHTML = prophets[i].birthplace + '<br>';
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
            
            card.appendChild(h2).appendChild(h3).appendChild(h4).appendChild(image);
            document.querySelector('div.cards').appendChild(card);
          }
      });

      