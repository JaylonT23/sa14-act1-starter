const petFace = document.getElementById('petFace');
const moodText = document.getElementById('moodText');
const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const napBtn = document.getElementById('napBtn');

// Mood to change timer 
let moodTimer;

// Function to change the mood
function changeMood(face, mood) {
    petFace.textContent = face;
    moodText.textContent = `Mood: ${mood}`;
    
    // Clear the previous timer
    clearTimeout(moodTimer);
    
    // timer to revert to normal mood 
    moodTimer = setTimeout(() => {
        petFace.textContent = ':|';
        moodText.textContent = 'Mood: Normal';
    }, 5000);
}

// Event for each button
feedBtn.addEventListener('click', () => changeMood(':)', 'Happy'));
playBtn.addEventListener('click', () => changeMood(':D', 'Excited'));
napBtn.addEventListener('click', () => changeMood('-_-', 'Sleepy'));