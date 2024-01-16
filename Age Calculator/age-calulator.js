const inputbtn = document.querySelector(".dob-input")
const calculatebtn = document.querySelector(".calculate-btn")
const ageresult = document.querySelector(".age-result")

calculatebtn.addEventListener("click",() =>{
    if(inputbtn.value === ""){
        alert("Please enter your date of Birth");
    }else{
        console.log(inputbtn.value);
        const dob = new Date(inputbtn.value);
        console.log("Input Date:",dob);
        const dob_year = dob.getFullYear();
        console.log("Input Year",dob_year)

     // Current Year
        const now = new Date();
        console.log("Today's Date:",now);
        const now_year = now.getFullYear();
        console.log("Today's Year",now_year)

    // Final Calculation
        const age = now_year - dob_year;
        console.log("Age:",age);
        ageresult.innerHTML = `Your Age is :${age}`
    }
});