let form=document.getElementById("form")



let button=document.getElementById("btn")


function clickhandler(e) {
   
   

    e.preventDefault()
    let expensename=document.getElementById("expensename").value
    let amount=document.getElementById("amount").value
    let expensecategory=document.getElementById("expensecategory").value

    let obj={
      name:expensename,
      amt:amount,
      cat:expensecategory,

    }
    localStorage.setItem(expensename,JSON.stringify(obj))


   let ul=document.getElementById("ul")
   let li=document.createElement("li")

   ul.appendChild(li)

  
   var del=document.createElement("button")
   del.innerHTML="Delete"

   var edit=document.createElement("button")
   edit.innerHTML="Edit"
   //li.append(del,edit)

   li.append(`${expensename}-${expensecategory}-${amount}  `,del,edit)

   function delhandler() {
    li.remove()
    localStorage.removeItem(expensename)
   }
   del.addEventListener("click",delhandler)

   function edithandler() {
    document.getElementById("expensename").value=obj.name
    document.getElementById("amount").value=obj.amt
    document.getElementById("expensecategory").value=obj.cat
    delhandler()
  }
  edit.addEventListener("click",edithandler)



}

button.addEventListener("click",clickhandler)


