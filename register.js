  let nameInput = document.querySelector("#nameInput")
    let nameAlert = document.querySelector("#nameAlert")
    let lNameInput = document.querySelector("#lNameInput")
    let lNameAlert = document.querySelector("#lNameAlert")
    let emailInput = document.querySelector("#emailInput")
    let emailAlert = document.querySelector("#emailAlert")
    let form = document.querySelector("form")
    let phoneInput = document.querySelector("#phoneInput")
    let phoneAlert = document.querySelector("#phoneAlert")
    let jobAlert = document.querySelector("#jobAlert")
    let job = document.querySelector("select")
    const phoneRegex = /^[0-9]+$/
    form.addEventListener("submit", (e) => {
        if (nameInput.value == "") {
            nameAlert.textContent = "نوم اضافه کړي"
            e.preventDefault()
        }
        else if (nameInput.value.length < 3) {
            nameAlert.textContent = "نوم باید تر ۳ تورو کم نه وي"
            e.preventDefault()
        } else {
            nameAlert.textContent = ""
        }

        if (lNameInput.value == "") {
            lNameAlert.textContent = "تخلص اضافه کړي"
        }
        else if (lNameInput.value.length < 3) {
            lNameAlert.textContent = "تخلص باید تر ۳ تورو کم نه وي "
            e.preventDefault()
        } else {
            lNameAlert.textContent = ""
           
        }

        if (emailInput.value == "") {
            emailAlert.textContent = "خپل ایمیل ادرس اضافه کړي"
        }
         else if (emailInput.value.search("@") == -1 ) {
            emailAlert.textContent = "ادرس صحي نه دی"
        }else if(emailInput.value.split("@")[1] != "gmail.com" ){
            emailAlert.textContent = "gmail.com باید په پای کی وی"
            e.preventDefault()
        }
        else{
            emailAlert.textContent=""
        }

        if(phoneInput.value == ""){
            phoneAlert.textContent = "نمبر داخل کړي" 
        }
        else if(!phoneRegex.test(phoneInput.value)){
            phoneAlert.textContent = "نمبر باید عددونه وي"
            e.preventDefault()
        }
        else if(phoneInput.value.length != 10){
            phoneAlert.textContent = "نمبر باید لس عدده وي"
            e.preventDefault()
        }else{
            phoneAlert.textContent = ""
            isPhoneInputValid = true
        }

        if(!job.value){
            console.log(job.value)
            jobAlert.textContent = "دنده انتخاب کړی"
            e.preventDefault()
        }else{
            console.log(job.value)
            jobAlert.textContent = ""
        }
    })
