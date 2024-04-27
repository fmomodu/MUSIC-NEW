document.addEventListener('DOMContentLoaded', function() {
    // Example playlist data
    const playlist = [
        { title: 'Chanel', artist: 'Frank Ocean', albumCover: 'images/chanel.jpeg' },
        { title: 'Can You Feel My Heart', artist: 'Bring Me The Horizon', albumCover: 'images/cyfmh.jpg' },
        { title: 'Hiss', artist: 'Megan The Stallion' , albumCover: 'images/hiss.jpg' },
        { title: 'Washing Machine Heart', artist: 'Mitski' , albumCover: 'images/wmh.png' },
        { title: 'Supermassive Black Hole', artist: 'Muse' , albumCover: 'images/sbh.png' },
        { title: 'Plan B', artist: 'Megan The Stallion' , albumCover: 'images/planb.png' },
        { title: 'IFHY', artist: 'Tyler The Creator' , albumCover: 'images/ifhy.png' },
        // Add more songs as needed
    ];

    // Create the card elements based on the playlist
    playlist.forEach((song, index) => {
        // Dynamically create card elements
        const card = document.createElement('div');
        card.classList.add('card');

        // Create an img element for the album cover
        const img = document.createElement('img');
        img.src = song.albumCover;
        img.alt = song.title;

        // Append the img to the card
        card.appendChild(img);

        // Append the card to the card container
        document.querySelector('.card-container').appendChild(card);
    });
});
