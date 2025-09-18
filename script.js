function changeText() {
  const message = document.getElementById("message");
  message.textContent = "You clicked the button!";
}


async function fetchMeme() {
  const button = document.getElementById("meme-button");
  const img = document.getElementById("meme-image");

  // optionally disable the button to prevent multiple clicks while loading
  button.disabled = true;
  button.textContent = "Loading...";

  try {
    const response = await fetch("https://meme-api.com/gimme");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // data.url has the image URL
    img.src = data.url;
    img.alt = data.title || "Random Meme";
  } catch (error) {
    console.error("Error fetching meme:", error);
    img.alt = "Failed to load meme. Try again.";
  } finally {
    button.disabled = false;
    button.textContent = "Get a Meme";
  }
}

// attach event listener
document.addEventListener("DOMContentLoaded", function() {
  const memeBtn = document.getElementById("meme-button");
  memeBtn.addEventListener("click", fetchMeme);
});

