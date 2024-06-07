document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.piano .white, .piano .black');

  const keyMap = {
    'A': 'C',  // Do
    'W': 'C#', // C#
    'S': 'D',  // Re
    'E': 'D#', // D#
    'D': 'E',  // Mi
    'F': 'F',  // Fa
    'T': 'F#', // F#
    'G': 'G',  // Sol
    'Y': 'G#', // G#
    'H': 'A',  // La
    'U': 'A#', // A#
    'J': 'B',  // Si
  };

  function playSound(note) {
    const audio = document.querySelector(`audio[data-note="${note}"]`);
    if (audio) {
      audio.currentTime = 0; // Rewind to the start
      audio.play();
    }
  }

  function addActiveClass(element) {
    element.classList.add('active');
  }

  function removeActiveClass(element) {
    element.classList.remove('active');
  }

  keys.forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      playSound(note);
      addActiveClass(key);
      setTimeout(() => removeActiveClass(key), 200);
    });
  });

  window.addEventListener('keydown', (e) => {
    const note = keyMap[e.key.toUpperCase()];
    if (note) {
      const key = document.querySelector(`li[data-note="${note}"]`);
      if (key) {
        playSound(note);
        addActiveClass(key);
        setTimeout(() => removeActiveClass(key), 200);
      }
    }
  });
});


function notes() {
  const imageUrls = [
      '../Images/Notes-img1.svg',
      '../Images/Notes-img2.svg',
      '../Images/Notes-img3.svg',
      '../Images/Notes-img4.svg',
      '../Images/Notes-img5.svg',
      '../Images/Notes-img6.svg',
      '../Images/Notes-img7.svg',
      '../Images/Notes-img8.svg',
      '../Images/Notes-img9.svg',
      '../Images/Notes-img10.svg',
      '../Images/Notes-img11.svg',
      '../Images/Notes-img12.svg',
      '../Images/Notes-img13.svg',
      '../Images/Notes-img14.svg',
      '../Images/Notes-img15.svg',
      '../Images/Notes-img16.svg',
      '../Images/Notes-img17.svg',
      '../Images/Notes-img18.svg',
      '../Images/Notes-img19.svg',
      '../Images/Notes-img20.svg',
      '../Images/Notes-img21.svg',
      '../Images/Notes-img22.svg',
      '../Images/Notes-img23.svg',
      '../Images/Notes-img24.svg',
  ];

  const container = document.querySelector(".con2");
  let currentIndex = 0;

  function showImage(index) {
      container.innerHTML = ''; 
      const img = document.createElement('img');
      img.src = imageUrls[index];
      img.alt = `Image ${index + 1}`;
      img.className = "Notes-img";
      container.appendChild(img);
  }

  if(document.getElementById('audio1').addEventListener('click', handleAudioClick)){
      console.log()
  }

  // Initially display the first image
  showImage(currentIndex);
}

notes();