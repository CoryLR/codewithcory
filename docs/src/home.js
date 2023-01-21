
/* Script for the home page */

function main() {
  try {
    addGitHubStarTargetMessage();
  } catch (err) {
    console.error(err);
  }
}

function addGitHubStarTargetMessage() {
  fetch('https://api.github.com/repos/corylr/codewithcory')
    .then(res => res.json())
    .then(data => {
      const starsCount = data.stargazers_count;
      const starsTarget = calculateGitHubStarsTarget(starsCount);
      const starsSpan = document.querySelector('[data-stars-message]');
      starsSpan.textContent = `We currently have ${starsCount} stars! Can you help us get to ${starsTarget}?`;
    }).catch(err => {
      throw new Error(err);
    });
}

function calculateGitHubStarsTarget(currentStars) {
  const magnitude = currentStars < 100 ? 10 : currentStars < 500 ? 50 : 100;
  const starsTarget = (Math.floor(currentStars / magnitude) * magnitude) + magnitude;
  return starsTarget;
}

function log(message) {
  document.querySelector('[data-debugging-output]').textContent+= `

${message}`;
}

/* Wait for the page to load before running the main function */
window.onload = main;
