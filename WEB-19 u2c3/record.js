// fill in javascript code here

document.querySelector("form").addEventListener("submit",hellofunction)
function hellofunction(event){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var employeeId=document.querySelector("#employeeID").value;
    var department=document.querySelector("#department").value;
    var exp=document.querySelector("#exp").value;
    var email=document.querySelector("#email").value;
    var mbl=document.querySelector("#mbl").value;
    var role=document.querySelector("#role").value;


    var tr =document.createElement("tr")
   
    var td1=document.createElement("td")
    td1.innerText=name
   
    var td2=document.createElement("td")
    td2.innerText=employeeId
    var td3=document.createElement("td")
    td3.innerText=department
    var td4=document.createElement("td")
    td4.innerText=exp
    
    var td5=document.createElement("td")
    td5.innerText=email
    var td6=document.createElement("td")
    td6.innerText=mbl
    var td7=document.createElement("td")
    if(Number(exp)>5){
        td7.innerText="Senior"
    } else if(Number(exp)>=2 && Number(exp)<=5){
        td7.innerText="Junior"
    }else{
        td7.innerText="Fresher"
    }

    
   
    var td8=document.createElement("td")
    td8.addEventListener("click",hellofunction1)
    td8.innerText="Delete"

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr);

}

function hellofunction1(){
    event.target.parentNode.remove()
}