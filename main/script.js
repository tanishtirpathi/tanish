const clickonnike = document.querySelector("#nike");
let lightmode = document.querySelector(".light");
const body =   document.querySelector("body");
lightmode.addEventListener("click",()=>{
    console.log("lightmode clicked")
    alert("sorry some internal error to add light mode")
//   body.style.backgroundColor = 'rgb(200, 225, 203)';
})


clickonnike.addEventListener("click", () => {
    console.log("nike clicked")
    alert("sorry currently this is not working")    
})
// Function to handle button click
function handleButtonClick() {
    // Replace 'your-email@example.com' with your actual email address
    const emailAddress = 'tanishtirpathi0@gmail.com';

    // Create a mailto URL with the email address pre-filled
    const mailtoUrl = `mailto:${emailAddress}`;

    // Open the user's default email client with the pre-filled email address
    window.location.href = mailtoUrl;
}

// Add click event listener to the button
document.getElementById('contact').addEventListener('click', handleButtonClick);
