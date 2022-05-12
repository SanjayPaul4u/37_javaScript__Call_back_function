console.log("Call back function");

//pretend that it is come from server.
const students = [
    { "name": "rohon", "subject": "python" },
    { "name": "sanjay", "subject": "javaScript" }
];


function studentEnrollment(studentObj, callBack) {
    setTimeout(function () {//SET_TIME_OUT could be SYNCHORONOUS AND ASYNCHORONOUS ALSO for his time📍
        students.push(studentObj);
        console.log("New student is success fully enrolled");

        callBack();
    }, 5000);
}

function getStudent() {
    setTimeout(function () {
        let html = "";
        students.forEach(function (element) {
            html += `<li>Name of student is : ${element.name}</li>`
        })
        let list = document.getElementById("list");
        list.innerHTML = html;
        console.log("Students are success fully fetched");
    }, 1000);
}


let newStudent = { "name": "mou", "subject": "java" };
studentEnrollment(newStudent, getStudent);
