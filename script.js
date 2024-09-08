var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById('profilepic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var exprienceElement = document.getElementById('exprience');
    var skillsElement = document.getElementById('skills');
    if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var exprience = exprienceElement.value;
        var skills = skillsElement.value;
        var profilepicfile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepicURL = profilepicfile ? URL.createObjectURL(profilepicfile) : "";
        var resumeOutput = "\n    <h2>Resume</>\n    ".concat(profilepicURL, " ? '<img src=\"").concat(profilepicURL, "alt=Profile Picture\"class=\"profilePicture\">'|\"\"\n    <p><strong>Name</strong><spam\" id=\"edit-name\"class=\"editable\"> ").concat(name_1, "</spam> </p>\n    <p><strong>Email</strong><spam\" id=\"edit-email\"class=\"editable\"> ").concat(email, "</spam> </p>\n    <p><strong>Phone</strong><spam\" id=\"edit-phone\"class=\"editable\"> ").concat(phone, "}</spam> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\"class=\"editable\">").concat(education, "</p>\n\n    <h3>Exprience</h3>\n    <p id=\"edit-exprience\"class=\"editable\">").concat(exprience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\"class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('oops one more output element are missing');
    }
});
var educationElement = document.querySelectorAll('.editable');
educationElement.forEach(function (Element) {
    Element.addEventListener('click', function () {
        var _a;
        var currentElement = Element;
        var currentValue = currentElement.textContent || '';
        if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
            var input_1 = document.createElement('input');
            input_1.type = 'text';
            input_1.value = currentValue;
            input_1.classList.add('editing input');
            input_1.addEventListener('blur', function () {
                currentElement.textContent = input_1.value;
                currentElement.style.display = 'inline';
                input_1.remove();
            });
            currentElement.style.display = 'none';
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            input_1.focus();
        }
    });
});
