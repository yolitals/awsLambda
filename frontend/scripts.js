const app = document.getElementById('root');


const logob = document.createElement('img');
logob.src = 'logo_b.png';
const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logob);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://tjswqadm08.execute-api.us-east-1.amazonaws.com/dev/movies', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.Items.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.Name;

       const date = document.createElement('p');
       date.textContent = `Release date: ${movie.ReleaseDate}`;
       
       const actors = document.createElement('p');
       actors.textContent = `Actors: ${movie.Actors}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(date);
      card.appendChild(actors);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();