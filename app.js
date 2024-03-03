

document.addEventListener('DOMContentLoaded', function(){
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event){
        event.preventDefault()

        //Get form elements
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const commentInput = document.getElementById("comment")


//Get values from the inputs and trim
const name = nameInput.value.trim()
const email= emailInput.value.trim()
const comment = commentInput.value.trim()




//Validation and breaking the process if any of the fields in not filled
if(!name || !email || !comment){
    alert('Please fill out all fields')
    return
    
}



//Collect the data variables into a single javascript object
const feedbackData = {
    name: name,
    email: email,
    comment: comment
}



//Cleaar fom fields after submission
nameInput.value = ''
emailInput.value = ''
commentInput.value = ''

//aler the collected data as JSON object
alert(JSON.stringify(feedbackData))
    }
    ) 
})






