// checkboxes

const goal1 = document.querySelector('#goal1');
const goal2 = document.querySelector('#goal2');
const goal3 = document.querySelector('#goal3');
let progressBar = document.querySelector('.progress');

// progress bar
progressBar.style.width = '0%';

// Function to update progress bar
function updateProgress() {
    let completedGoals = 0;

    if (goal1.checked) completedGoals++;
    if (goal2.checked) completedGoals++;
    if (goal3.checked) completedGoals++;

    let progressPercentage = (completedGoals / 3) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Change color based on progress
    if (progressPercentage > 0) {
        progressBar.style.backgroundColor = '#37ff3d'; // Green when there's progress
    }
}

// Add event listeners for checkboxes
goal1.addEventListener('change', updateProgress);
goal2.addEventListener('change', updateProgress);
goal3.addEventListener('change', updateProgress);

// Call updateProgress initially
updateProgress();

// Function to enable checkbox when text is entered
function enableCheckbox(input, checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.disabled = !input.value.trim(); // Disable checkbox if input is empty
}


