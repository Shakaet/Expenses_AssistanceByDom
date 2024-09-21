
let count =0;
document.getElementById("calculate-btn").addEventListener("click",function(){

    count=count+1;

    document.getElementById("results-summery").classList.remove("hidden")


   let income= document.getElementById("income-text").value
   let software= document.getElementById("software-text").value
   let courses= document.getElementById("courses-text").value
   let internet= document.getElementById("Internet-text").value


   let income_N=Number(income)
   let software_N=Number(software)
   let courses_N=Number(courses)
   let internet_N=Number(internet)


   let total_expenses= software_N+courses_N+internet_N

   if(income>=total_expenses){

    let balance=income-total_expenses;

    document.getElementById("t-ex").innerText=total_expenses
    document.getElementById("bal").innerText=balance





    let container=document.getElementById("Expenses-history")

    let div= document.createElement("div")

    div.className= "bg-white p-3 rounded md border-1-2 border-indigo-500"

    div.innerHTML= `      
          <p > Serial Number ${count} </p>
          <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
           <p class="text-xs text-gray-500">$${income_N.toFixed(2)}</p>
            <p class="text-xs text-gray-500">$${total_expenses.toFixed(2)}</p>
            <p class="text-xs text-gray-500">$${balance.toFixed(2)}</p>

    
    `

    container.appendChild(div)

    //  container.insertBefore(div,container.firstChild)


   }
   else{

    alert("you have no balances")
   }

 




    




})

document.getElementById("sav-btn").addEventListener("click",function(){

    let income= document.getElementById("income-text").value
    let software= document.getElementById("software-text").value
    let courses= document.getElementById("courses-text").value
    let internet= document.getElementById("Internet-text").value
 
 
    let income_N=Number(income)
    let software_N=Number(software)
    let courses_N=Number(courses)
    let internet_N=Number(internet)
 
 
    let total_expenses= software_N+courses_N+internet_N
 
    if(income>=total_expenses){
 
     let balance=income-total_expenses;


     let savings=document.getElementById("sav-text").value
    let savings_N=Number(savings)
    let save= balance*savings_N/100

    let rem_bal=balance-save

    document.getElementById("save").innerText= save
    document.getElementById("rem_bal").innerText= rem_bal
 
 
    }
    else{
 
     alert("you have no balances")
    }

    





})

document.getElementById("assistant tab").addEventListener("click",function(){

    document.getElementById("assistant tab").classList.add("bg-primary")
    document.getElementById("history-tab").classList.remove("bg-primary")


    document.getElementById("assistance-section").classList.remove("hidden")
    document.getElementById("history-section").classList.add("hidden")
})

document.getElementById("history-tab").addEventListener("click",function(){

    document.getElementById("assistant tab").classList.remove("bg-primary")
    document.getElementById("history-tab").classList.add("bg-primary")

    document.getElementById("assistance-section").classList.add("hidden")
    document.getElementById("history-section").classList.remove("hidden")


    let income= document.getElementById("income-text").value
    let software= document.getElementById("software-text").value
    let courses= document.getElementById("courses-text").value
    let internet= document.getElementById("Internet-text").value
 
 
    let income_N=Number(income)
    let software_N=Number(software)
    let courses_N=Number(courses)
    let internet_N=Number(internet)
 
 
    let total_expenses= software_N+courses_N+internet_N
 
    if(income>=total_expenses){
 
     let balance=income-total_expenses;

     document.getElementById("t-ex-h").innerText=total_expenses
     document.getElementById("bal-h").innerText=balance


     let savings=document.getElementById("sav-text").value
    let savings_N=Number(savings)
    let save= balance*savings_N/100

    let rem_bal=balance-save

    document.getElementById("save-h").innerText= save
    document.getElementById("rem_bal-h").innerText= rem_bal
 
 
    }
    else{
 
     alert("you have no balances")
    }
})


