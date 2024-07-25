let inpName = document.getElementById("name")
let inpFName = document.getElementById("F.name")
let inpAge = document.getElementById("Age")
let inpEmail = document.getElementById("Email")
let inpCourse = document.getElementById("Course")
// ------------btn-----------
let btnSubmit = document.getElementById("btnsubmit")
let tblBody = document.getElementById("tblbody")


btnSubmit.addEventListener("click",()=>{
   if (inpName.value&&inpFName.value&&inpAge.value&&inpEmail.value&&inpCourse.value !== "") {
      let sriealNum = 1
      let rollNum = 1501
      let storestdData = []
      function Studentprotal(uName,uFname,uage,uEmail,uCourse) {
        this.userSrieal = sriealNum++,
        this.userRoll = rollNum++,
        this.userName = uName;
        this.userFname = uFname;
        this.userage = uage;
        this.userEmail = uEmail;
        this.userCourse = uCourse;
      }
      const studentData = new Studentprotal(inpName.value,inpFName.value,inpAge.value,inpEmail.value,inpCourse.value)
      let objstdData = {studentData}
      storestdData.push(objstdData)
      localStorage.setItem(`storestdData` ,JSON.stringify(storestdData))
      tblBody.innerHTML += `
         <tr>
         <td>${studentData.userSrieal}</td>
         <td>${studentData.userRoll}</td>
         <td>${studentData.userName}</td>
         <td>${studentData.userFname}</td>
         <td>${studentData.userage}</td>
         <td>${studentData.userEmail}</td>
         <td>${studentData.userCourse}</td>
         <td><button>Edit</button></td>
         <td><button>Delete</button></td>
         </tr>`
      console.log(objstdData);
      console.log(storestdData);
   }else{
   alert("input filled")
}
      inpName.value  = ''
      inpFName.value = ''
      inpAge.value   = ''
      inpEmail.value = ''
      inpCourse.value= ''
})

