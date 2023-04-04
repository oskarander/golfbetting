
  document.addEventListener('DOMContentLoaded', function () {
    // Select all participant elements
    const participants = document.querySelectorAll('.participant');
    const errorMessage = document.getElementById('error-message');

    // Add click event listener to each participant
    participants.forEach(function (participant) {
      participant.addEventListener('click', function () {
        // Check if the clicked participant has the "active-participant" class
        if (!participant.classList.contains('active-participant')) {
          // If not active, show the error message
          errorMessage.innerHTML = 'Error: Participants have to choose in the right order';
          errorMessage.style.display = 'block';
        } else {
          // If active, hide the error message
          errorMessage.innerHTML = '';
          errorMessage.style.display = 'none';
        }
      });
    });
  });



const participants = [
    'Oskar',
    'Hanna',
    'Peter',
    'Martin',
    'Helena',
    'Per',
    'Tor',
    'Karl',
    'Oscar',
    'Sandra'
  ];
  
  const golfPlayers = [
    'Scottie Scheffler',
    'Rory McIlroy',
    'Cameron Smith',
    'Shane Lowry',
    'Collin Morikawa',
    'Will Zalatoris',
    'Corey Conners',
    'Justin Thomas',
    'Sungjae Im',
    'Cameron Champ',
    'Charl Schwartzel',
    'Dustin Johnson',
    'Danny Willett',
    'Talor Gooch',
    'Jason Kokrak',
    'Tommy Fleetwood',
    'Hideki Matsuyama',
    'Matthew Fitzpatrick',
    'Lee Westwood',
    'Harry Higgs',
    'Min Woo Lee',
    'Kevin Na',
    'Robert MacIntyre',
    'Harold Varner III',
    'Sergio Garcia',
    'J.J. Spaun',
    'Viktor Hovland',
    'Jon Rahm',
    'Seamus Power',
    'Sepp Straka',
    'Russell Henley',
    'Hudson Swafford',
    'Marc Leishman',
    'Lucas Glover',
    'Joaquin Niemann',
    'Tony Finau',
    'Patrick Reed',
    'Webb Simpson',
    'Si Woo Kim',
    'Bubba Watson',
    'Patrick Cantlay',
    'Tom Hoge',
    'Billy Horschel',
    'Christiaan Bezuidenhout',
    'Kevin Kisner',
    'Cameron Davis',
    'Tiger Woods',
    'Adam Scott',
    'Max Homa',
    'Mackenzie Hughes',
    'Daniel Berger',
    'Tyrrell Hatton',
    'Takumi Kanaya',
    'Sam Burns',
    'Padraig Harrington',
    'K.H. Lee',
    'Brian Harman',
    'Zach Johnson',
    'Lucas Herbert',
    'Jordan Spieth',
    'Brooks Koepka',
    'Mike Weir',
    'Ryan Palmer',
    'Keita Nakajima',
    'Abraham Ancer',
    'Xander Schauffele',
    'Austin Greaser',
    'Stewart Cink',
    'Erik van Rooyen',
    'Bernhard Langer',
    'Gary Woodland',
    // Add more golf players as needed
  ];
  
  const participantDiv = document.getElementById('participants');
  const golfPlayerList = document.getElementById('golfPlayers');
  
  let currentPlayer = 0;
  let currentRound = 1;
  
  participants.forEach((participant, index) => {
    const participantDivEl = document.createElement('div');
    participantDivEl.classList.add('participant');
    participantDivEl.dataset.index = index;
  
    const participantName = document.createElement('h3');
    participantName.textContent = participant;
  
    const playerPicks = document.createElement('ul');
    playerPicks.classList.add('player-picks');
  
    for (let i = 0; i < 5; i++) {
      const playerPick = document.createElement('li');
      playerPick.classList.add('player-pick');
      playerPicks.appendChild(playerPick);
    }
  
    participantDivEl.appendChild(participantName);
    participantDivEl.appendChild(playerPicks);
    participantDiv.appendChild(participantDivEl);
  });
  
  golfPlayers.forEach((golfPlayer) => {
    const listItem = document.createElement('li');
    listItem.textContent = golfPlayer;
    listItem.addEventListener('click', function () {
      pickGolfPlayer(this);
    });
    golfPlayerList.appendChild(listItem);
  });
  
  function pickGolfPlayer(listItem) {
    const participantDivEl = document.querySelectorAll('.participant')[currentPlayer];
    const playerPicks = participantDivEl.querySelector('.player-picks');
    const playerPick = playerPicks.children[currentRound - 1];
  
    if (!playerPick.textContent) {
      playerPick.textContent = listItem.textContent;
      listItem.remove();
  
      currentPlayer = (currentPlayer + 1) % participants.length;
  
      if (currentPlayer === 0) {
        currentRound++;
      }
    }
  }
  // ... (previous code)
  
  function pickGolfPlayer(listItem) {
    const participantDivEl = document.querySelectorAll('.participant')[currentPlayer];
    const playerPicks = participantDivEl.querySelector('.player-picks');
    const playerPick = playerPicks.children[currentRound - 1];
  
    if (!playerPick.textContent) {
      playerPick.textContent = listItem.textContent;
      listItem.remove();
  
      // Remove active class from the current participant
      participantDivEl.classList.remove('active-participant');
  
      currentPlayer = (currentPlayer + 1) % participants.length;
  
      if (currentPlayer === 0) {
        currentRound++;
      }
  
      // Add active class to the next participant
      const nextParticipantDivEl = document.querySelectorAll('.participant')[currentPlayer];
      nextParticipantDivEl.classList.add('active-participant');
    }
  }
  
  // Set the active class for the first participant initially
  document.querySelector('.participant').classList.add('active-participant');
  
  function pickGolfPlayer(listItem) {
    const participantDivEl = document.querySelectorAll('.participant')[currentPlayer];
    const playerPicks = participantDivEl.querySelector('.player-picks');
    const playerPick = playerPicks.children[currentRound - 1];
  
    if (!playerPick.textContent) {
      playerPick.textContent = listItem.textContent;
      listItem.remove();
  
      // Remove active class from the current participant
      participantDivEl.classList.remove('active-participant');
  
      currentPlayer = (currentPlayer + 1) % participants.length;
  
      if (currentPlayer === 0) {
        currentRound++;
      }
  
      // Add active class to the next participant
      const nextParticipantDivEl = document.querySelectorAll('.participant')[currentPlayer];
      nextParticipantDivEl.classList.add('active-participant');
  
      // Send data to Zapier webhook
      const participantName = participantDivEl.querySelector('h3').textContent;
      const golfPlayerName = listItem.textContent;
  
      const data = {
        participantName,
        golfPlayerName
      };
  
      fetch('https://webhooks.eu.workato.com/webhooks/rest/70119d7f-c28b-4d53-84d1-02efc16dbd94/receive-player-choice', {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(response => {
        console.log('Data sent to Zapier webhook');
      }).catch(error => {
        console.error('Error sending data to Zapier webhook:', error);
      });
    }
  }
  