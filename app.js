   const namee = document.querySelector("#name");
  const salary = document.querySelector("#salary");
  const addUserbtn = document.querySelector("button");
const doubleMoneybtn = document.querySelector("#double");
 const showBtn = document.querySelector("#show");
 const calculateBtn = document.querySelector("#calculate");
 const sortbyRichbtn = document.querySelector("#rich");
 const table = document.querySelector("table");
 const body=document.querySelector("body ") 
 

 let allperson = [];

 const addUser = () => {
   if (namee.value && salary.value) {
     table.innerHTML = " <th>Name</th><th>Salary</th>";
     const person = {
       name: namee.value,
       salary: salary.value,
     };
     allperson.push(person);

     allperson.forEach((p) => {
       const newTableRow = document.createElement("tr");
       newTableRow.innerHTML = ` <td>${p.name}</td><td>$${p.salary}</td>`;
       table.append(newTableRow);
     });
   }

   const doubleMoney = () => {
     allperson = allperson.map((p) => {
     return { ...p, salary: p.salary * 2 };
     });
     UpdateDOM();
   };
   const UpdateDOM = () => {
     table.innerHTML = " <th>Name</th><th>Salary</th>";
     allperson.forEach((p) => {
       const newTableRow = document.createElement("tr");

      newTableRow.innerHTML = ` <td>${p.name}</td><td>$${p.salary}</td>`;
       table.append(newTableRow);
     });
   };

   const SortbyRich = () => {
     allperson.sort((a , b) => b.salary - a.salary);
     UpdateDOM();
   };

    const showByfilter =()=>{
      allperson=allperson.filter((p)=> p.salary>=100)
      UpdateDOM();

    }
    const calculatesalary =()=>{
            let sum=0;
            allperson.forEach((p)=>{
              sum += + p.salary ; 
              
         
            }) ;  
           
         const result= document.createElement("h3") ;

            result.textContent = `$ ${sum}` ;
            body.append(result);
      };
     
   sortbyRichbtn.addEventListener("click", SortbyRich);
   doubleMoneybtn.addEventListener("click", doubleMoney);
    showBtn.addEventListener("click", showByfilter);
 calculateBtn.addEventListener("click", calculatesalary);
 };
 addUserbtn.addEventListener("click", addUser);
