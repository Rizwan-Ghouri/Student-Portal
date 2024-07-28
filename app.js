//* ------------btn-----------
let btnSubmit = document.getElementById("btnsubmit")
let tblBody = document.getElementById("tblbody")
let storestdData = []

btnSubmit.addEventListener("click",()=>{
   //* -----------Get ID----------
   let inpName = document.getElementById("name")
   let inpFName = document.getElementById("F.name")
   let inpAge = document.getElementById("Age")
   let inpEmail = document.getElementById("Email")
   let inpCourse = document.getElementById("Course")
      if (inpName.value&&inpFName.value&&inpAge.value&&inpEmail.value&&inpCourse.value != '') {
         var objstdData = {
         userSireal:storestdData.length +1,     //! Har Data par Id inceement hogi
         userRoll  :storestdData.length +1501,  //! Har Data par RollNumber inceement hogi
         userName  :inpName.value,
         userFname :inpFName.value,
         userAge   :inpAge.value,
         userEmail :inpEmail.value,
         userCourse:inpCourse.value
      }
      storestdData.push(objstdData)
      localStorage.setItem(`storeData`,JSON.stringify(storestdData))
      alert('Sucsses')
   }else{
      alert('input filled')
   }
   tblBody.innerHTML += `<tr id=tr">
              <td>${objstdData.userSireal}</td>
              <td>${objstdData.userRoll}</td>
              <td>${objstdData.userName}</td>
              <td>${objstdData.userFname}</td>
              <td>${objstdData.userAge}</td>
              <td>${objstdData.userEmail}</td>
              <td>${objstdData.userCourse}</td>
              <td><button class="btnEdit" id="btnEdit">Edit</button></td>
              <td><button class="btnDel" id="btnDel" >Delete</button></td>
            </tr>
      `      
      
      inpName.value  = ''
      inpFName.value = ''
      inpAge.value   = ''
      inpEmail.value = ''
      inpCourse.value= ''
   
      // console.log(objstdData);
      console.log(storestdData);
   })
