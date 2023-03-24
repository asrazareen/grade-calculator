const english = document.getElementById('english')
const physics = document.getElementById('physics')
const maths = document.getElementById('maths')
const chemistry = document.getElementById('chemistry')
const computer = document.getElementById('computer')
const submit = document.getElementById("button")
const totalScore = document.getElementById("totalScore")
const average = document.getElementById("average")
const grade = document.getElementById("grade")

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    if(english.value > 100 || english.value<0 
        ||physics.value > 100 || physics.value<0
        ||maths.value > 100 || maths.value<0 
        ||chemistry.value > 100 || chemistry.value<0 
        ||computer.value > 100 || computer.value<0  
        ){
        alert("Please enter marks in range of 0 to 100")
        english.value=""
        physics.value=""
        maths.value = ""
        chemistry.value=""
        computer.value=""
        return;
    }
    let grades
    if(english.value <35 || maths.value < 35 
        || physics.value<35 || chemistry.value < 35 
        || computer.value<35){
             grades = "F"
        }

       if(!english.value){
        english.value = 0
       }
       if(!physics.value){
        physics.value = 0
       }
       if(!maths.value){
        maths.value = 0
       }
       if(!computer.value){
        computer.value = 0
       }
       if(!chemistry.value){
        chemistry.value = 0
       }

       const totalMarks = parseInt(english.value) + parseInt(physics.value)
       +parseInt(maths.value) + parseInt(computer.value) + parseInt(chemistry.value)
       console.log(totalMarks)
       totalScore.innerHTML = `<div> Total Marks: ${totalMarks} </div>`

       const averageMarks = (totalMarks / 500).toFixed(2)*100
       average.innerHTML = `<div> Your Average Marks are ${averageMarks} </div>`

       if(averageMarks > 90 && !grades ){
        grade.innerHTML = `<div> You Got A Grade  </div>`
       }
       else if(averageMarks < 90 && averageMarks > 80 && !grades ){
        grade.innerHTML = `<div> You Got B Grade  </div>`
       }
       else if(averageMarks < 80 && averageMarks > 70 && !grades ){
        grade.innerHTML = `<div> You Got C Grade  </div>`
       }
       else if(averageMarks < 70 && averageMarks > 60 && !grades ){
        grade.innerHTML = `<div> You Got D Grade  </div>`
       }
       else if(averageMarks < 60  && !grades ){
        grade.innerHTML = `<div> You Got F Grade  </div>`
       }
       else{
        grade.innerHTML = `<div> You Got F Grade </div>`
       }



})


