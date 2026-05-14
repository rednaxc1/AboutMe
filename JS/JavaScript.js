function scrollCarousel(direction) {
    const track = document.getElementById('projectTrack');
    
    if (!track) {
        console.error("Error: Could not find element with ID 'projectTrack'");
        return;
    }

    // Use offsetWidth to get the visible width of the container
    const widthToScroll = track.offsetWidth;
    
    console.log("Scrolling direction:", direction);
    console.log("Width being scrolled:", widthToScroll);

    track.scrollBy({
        left: direction * widthToScroll,
        behavior: 'smooth'
    });
}

function scrollCarousel(direction, trackId) {
    const track = document.getElementById(trackId);
    if (track) {
        const amount = track.offsetWidth; 
        track.scrollBy({
            left: direction * amount,
            behavior: 'smooth'
        });
    }
}