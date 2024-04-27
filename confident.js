//angry.js
document.addEventListener('DOMContentLoaded', function() {
  const songs = [
    { title: 'sideways', artist: 'JT', albumCover: 'images/jt.jpeg' },
    { title: 'get it sexyy', artist: 'Sexyy Redd', albumCover: 'images/get.png' },
    { title: 'Pull Over', artist: 'Trina', albumCover: 'images/trina.jpeg' },
    { title: 'Spend Sum Cash', artist: 'LightSkin Keisha', albumCover: 'images/light.jpeg' },

    // Add more songs as needed { title: '', artist: '', albumCover: 'images/.png' },
  ];

  const songContainer = document.getElementById('song-container');
  const playlist = document.getElementById('playlist');
  const likedSongs = []; // Array to store liked songs
  let currentSongIndex = 0;

  // Retrieve the allLikedSongs array from sessionStorage or initialize a new array
  let allLikedSongs = JSON.parse(sessionStorage.getItem('allLikedSongs')) || [];

  function renderNextSong() {
    if (currentSongIndex < songs.length) {
      const song = songs[currentSongIndex];
      const songElement = createSongElement(song);
      songContainer.innerHTML = '';
      songContainer.appendChild(songElement);
      currentSongIndex++;
    } else {
      // Store liked songs in sessionStorage
      sessionStorage.setItem('likedSongs', JSON.stringify(likedSongs));
      // Redirect to the playlist complete page
      window.location.href = 'nomoresongs.html';
    }
  }

  function createSongElement(song) {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    songElement.innerHTML = `
      <img src="${song.albumCover}" alt="Album Cover">
      <h3>Song: ${song.title}</h3>
      <h3>Artist: ${song.artist}</h3>
      <button class="like-btn">&#x2665;</button> <!-- Unicode character for heart -->
      <button class="dislike-btn">&#x2718;</button> <!-- Unicode character for crossed-out symbol (✘) -->
    `;
    return songElement;
  }

  function moveSongToPlaylist(song) {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    playlist.appendChild(li);
    likedSongs.push(song); // Add liked song to the array
    allLikedSongs.push(song); // Add liked song to the allLikedSongs array
  }

  // Load the first song
  renderNextSong();

  // Event listener for like button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
      const song = songs[currentSongIndex - 1];
      likedSongs.push(song); // Add liked song to the array
      allLikedSongs.push(song); // Add liked song to the allLikedSongs array
      renderNextSong();
    }
  });

  // Event listener for dislike button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dislike-btn')) {
      // Store the allLikedSongs array in sessionStorage or localStorage
      sessionStorage.setItem('allLikedSongs', JSON.stringify(allLikedSongs));
      renderNextSong();
    }
  });

  // Additional logic to handle user selection of another mood
  const yesButton = document.getElementById('yesBtn');
  if (yesButton) {
    yesButton.addEventListener('click', function() {
      // Logic to add more songs when user selects "Yes"
      const newSongs = [
        { title: 'New Song 1', artist: 'Artist 1', albumCover: 'images/new1.jpg' },
        { title: 'New Song 2', artist: 'Artist 2', albumCover: 'images/new2.jpg' }
        // Add more new songs as needed
      ];
      addSongs(newSongs);
    });
  }
});