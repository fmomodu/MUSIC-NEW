//endplaylist.js
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the allLikedSongs array from sessionStorage or localStorage
  const allLikedSongs = JSON.parse(sessionStorage.getItem('allLikedSongs')) || [];

  if (allLikedSongs.length > 0) {
    const likedSongsContainer = document.getElementById('likedSongs');

    // Create HTML elements to display each liked song
    allLikedSongs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.innerHTML = `
        <p>Title: ${song.title}</p>
        <p>Artist: ${song.artist}</p>
        <img src="${song.albumCover}" alt="Album Cover">
      `;
      likedSongsContainer.appendChild(songElement);
    });
  }
});