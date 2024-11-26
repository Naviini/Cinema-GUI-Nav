// // Reference to the unordered list (ul) container
//   const seatsList = document.getElementById('seats-list');

// // Loop to create and append 20 <li> elements with values 1 to 20
//   for (let i = 1; i <= 20; i++) {
//     const li = document.createElement('li');
//     li.className = 'seat'; // Set class if needed
//     li.textContent = i; // Set the text content to a value
//     seatsList.appendChild(li); // Append to the ul element
//   }

// let url: string = window.href;
// // console.log(url);
// let url_segment: string[] = url.split('?');
// console.log(url_segment[1]);

// let play_btn : HTMLElement | null = document.getElementById('play');
// let video : HTMLElement | null = document.getElementById('video');

// play_btn?.addEventListener('click', () : void => {
//     if (video.pushed){
//         video.play();
//         video,stylle.display = 'unset';
//         play_btn.classList.remove('bi bi-play-fill');
//         play_btn.classList.add('bi bi-pause');
//     } else {
//         (video.pushed);
//             video.play();
//             video,stylle.display = 'unset';
//             play_btn.classList.remove('bi bi-play-fill');
//             play_btn.classList.add('bi bi-pause'); 
//     }
// })

// video.

// let url = window.href;
// // console.log(url);
// let url_segment = url.split('?');
// console.log(url_segment[1]);

// let play_btn = document.getElementById('play');
// let video = document.getElementById('video');

// play_btn.addEventListener('click', () => {
//     if (video.pushed){
//         video.play();
//         video,stylle.display = 'unset';
//         play_btn.classList.remove('bi bi-play-fill');
//         play_btn.classList.add('bi bi-pause');
//     } else {
//         (video.pushed);
//             video.play();
//             video,stylle.display = 'unset';
//             play_btn.classList.remove('bi bi-play-fill');
//             play_btn.classList.add('bi bi-pause'); 
//     }
// })

// video.


document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play");
    const video = document.getElementById("video");
    const seats = document.querySelectorAll(".seat:not(.booked)");
    const details = document.getElementById("det");
    let selectedSeats = [];
  
    // Play/Pause Trailer
    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playButton.classList.replace("bi-play-fill", "bi-pause-fill");
      } else {
        video.pause();
        playButton.classList.replace("bi-pause-fill", "bi-play-fill");
      }
    });
  
    // Seat Selection and Reservation
    seats.forEach((seat) => {
      seat.addEventListener("click", () => {
        const seatId = seat.textContent;
        if (seat.classList.contains("selected")) {
          seat.classList.remove("selected");
          selectedSeats = selectedSeats.filter((id) => id !== seatId);
        } else {
          seat.classList.add("selected");
          selectedSeats.push(seatId);
        }
        updateDetails();
      });
    });
  
    // Update Details
    function updateDetails() {
      details.innerHTML = `
        <div class="details_chair">
          <li>Selected Seats: ${selectedSeats.join(", ") || "None"}</li>
        </div>`;
    }
  
    // Cancel Reservation
    document.getElementById("cancel-reservation").addEventListener("click", () => {
      selectedSeats.forEach((seatId) => {
        const seat = Array.from(seats).find((s) => s.textContent === seatId);
        seat.classList.remove("selected");
      });
      selectedSeats = [];
      updateDetails();
    });
  });
  