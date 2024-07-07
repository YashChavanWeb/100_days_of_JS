const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const goalsText = document.querySelector('#goalsText')

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    first: {
        name: '',
        completed: false
    },
    second: {
        name: '',
        completed: false
    },
    third: {
        name: '',
        completed: false
    }
}

let noOfGoalsCompleted = Object.values(allGoals).filter((goal) => goal.completed).length
// Object.values gives the values inside the object in the form of array
// filter method filters the array based on the condition
progressValue.style.width = `${noOfGoalsCompleted / 3 * 100}%`



checkBoxList.forEach((checkbox) => {

    checkbox.addEventListener('click', (e) => {
        const allGoalsAdded = [...inputFields].every(function (input) {
            return input.value
        })

        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed')

            // to add the completed checkbox value to the allGoals Object
            const inputID = checkbox.nextElementSibling.id;
            allGoals[inputID].completed = !allGoals[inputID].completed
            localStorage.setItem('allGoals', JSON.stringify(allGoals))

            // updating the value of the completed goals variable
            noOfGoalsCompleted = Object.values(allGoals).filter((goal) => goal.completed).length
            progressValue.style.width = `${noOfGoalsCompleted / 3 * 100}%`
            progressValue.firstElementChild.innerText = `${noOfGoalsCompleted}/3 completed`


            if (noOfGoalsCompleted === 1 || noOfGoalsCompleted === 2) {
                goalsText.innerText = 'Well begun is half done'
            } else if (noOfGoalsCompleted === 3) {
                goalsText.innerText = 'Whoa! You just completed all the goals, time for chill :D'
            } else {
                goalsText.innerText = 'Raise the bar by completing your goals!'
            }


        } else {
            progressBar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input) => {

    input.value = allGoals[input.id].name

    // css to strike through the goal once it is checked
    if (allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
    }


    // when the user types something then remove the error class for that input
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })


    // create a array of the object of the input
    input.addEventListener('input', (e) => {


        // logic so that we cannot write anything after checking
        if (allGoals[input.id].completed) {
            input.value = allGoals[input.id].name
            return
        }


        // logic to add the name of the goal into the object array
        allGoals[e.target.id].name = e.target.value

        // when we type something store it in local storage
        // localStorage.setItem('e.target.id', 'e.target.value')   // this is completely wrong
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})