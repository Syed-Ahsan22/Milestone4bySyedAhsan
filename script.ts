document.getElementById("resumeForm")?.addEventListener('submit',function(event){
    event.preventDefault();


    const profilepictureinput = document .getElementById ('profilepic') as HTMLInputElement;
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const phoneElement = document.getElementById('phone')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const exprienceElement = document.getElementById('exprience')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;

   if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillsElement){
   
   const name =nameElement.value;
   const email =emailElement.value;
   const phone = phoneElement.value;
   const education = educationElement.value ;
   const exprience = exprienceElement. value ;
   const skills =skillsElement .value;
   
   const profilepicfile= profilepictureinput.files?.[0]
   const profilepicURL = profilepicfile ? URL. createObjectURL(profilepicfile):""

    const resumeOutput = `
    <h2>Resume</>
    ${ profilepicURL} ? '<img src="${profilepicURL}alt=Profile Picture"class="profilePicture">'|""
    <p><strong>Name</strong><spam" id="edit-name"class="editable"> ${name}</spam> </p>
    <p><strong>Email</strong><spam" id="edit-email"class="editable"> ${email}</spam> </p>
    <p><strong>Phone</strong><spam" id="edit-phone"class="editable"> ${phone}}</spam> </p>

    <h3>Education</h3>
    <p id="edit-education"class="editable">${education}</p>

    <h3>Exprience</h3>
    <p id="edit-exprience"class="editable">${exprience}</p>

    <h3>Skills</h3>
    <p id="edit-skills"class="editable">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById ('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement . innerHTML = resumeOutput
        makeEditable();
    }
    
   }else{
    console.error('oops one more output element are missing')
   }
})

function makeEditable(){
    const educationElement = document.querySelectorAll('.editable');
    educationElement .forEach (Element => {
        Element.addEventListener ('click' , function() {
            const currentElement = Element as HTMLElement;
            const currentValue = currentElement . textContent || '';

            if(currentElement.tagName=== "P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement ('input')
                input.type ='text'
                input.value = currentValue
                input.classList.add ('editing input')

                
                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display ='inline'
                    input.remove()
                })
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}

