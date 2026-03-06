let leads = JSON.parse(localStorage.getItem("leads")) || [];

function addLead(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let source=document.getElementById("source").value;
let status=document.getElementById("status").value;
let notes=document.getElementById("notes").value;

let lead={name,email,source,status,notes};

leads.push(lead);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();
}

function displayLeads(){

let table=document.getElementById("leadTable");

table.innerHTML="";

let newCount=0;
let contactedCount=0;
let convertedCount=0;

leads.forEach((lead,index)=>{

if(lead.status==="New") newCount++;
if(lead.status==="Contacted") contactedCount++;
if(lead.status==="Converted") convertedCount++;

table.innerHTML+=`

<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>
<td class="status-${lead.status.toLowerCase()}">${lead.status}</td>
<td>${lead.notes}</td>

<td>

<button onclick="editLead(${index})">Edit</button>

<button class="delete-btn" onclick="deleteLead(${index})">Delete</button>

</td>

</tr>

`;

});

document.getElementById("totalLeads").innerText=leads.length;
document.getElementById("newLeads").innerText=newCount;
document.getElementById("contactedLeads").innerText=contactedCount;
document.getElementById("convertedLeads").innerText=convertedCount;

}

function deleteLead(index){

leads.splice(index,1);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();
}

displayLeads();
function searchLead(){

let input=document.getElementById("searchInput").value.toLowerCase();

let rows=document.querySelectorAll("#leadTable tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input) ? "" : "none";

});

}
function editLead(index){

let lead=leads[index];

document.getElementById("name").value=lead.name;
document.getElementById("email").value=lead.email;
document.getElementById("notes").value=lead.notes;

leads.splice(index,1);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();

}
// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

let filter = searchInput.value.toLowerCase();
let rows = document.querySelectorAll("#crmTable tbody tr");

rows.forEach(row => {

let text = row.innerText.toLowerCase();

if(text.includes(filter)){
row.style.display = "";
}else{
row.style.display = "none";
}

});

});
function editRow(button){

let row = button.parentElement.parentElement;

let name = row.cells[0].innerText;
let email = row.cells[1].innerText;
let order = row.cells[2].innerText;
let status = row.cells[3].innerText;

let newName = prompt("Update Name:", name);
let newEmail = prompt("Update Email:", email);
let newOrder = prompt("Update Order:", order);
let newStatus = prompt("Update Status:", status);

if(newName) row.cells[0].innerText = newName;
if(newEmail) row.cells[1].innerText = newEmail;
if(newOrder) row.cells[2].innerText = newOrder;
if(newStatus) row.cells[3].innerText = newStatus;

}