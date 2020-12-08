function addRecord() {
    var newperson = {
        "ninumber": document.getElementById("addNI").value,
        "fullname": document.getElementById("addFullName").value,
        "phone": document.getElementById("addPhone").value,
        "address": document.getElementById("addAdd").value,
        "department": document.getElementById("addDep").value,
    }
    records.push(newperson);

    show(records);
    document.getElementById("employeetable").removeAttribute("hidden");
    document.getElementById("newPerson").setAttribute('hidden','hidden');
    document.getElementById("newPerson").reset()

}


function show(records) {

    console.log(records.length)	
    var table = document.getElementById("employeetable");
    var tbodynew = document.createElement("tbody");
    var tbodyold = table.children[1];

    tbodyold.parentNode.replaceChild(tbodynew,tbodyold)
    var tbody = table.children[1];
    
    for (var i = 0; i <records.length; i++){
        var tr = document.createElement("tr");   
        var td1 = document.createElement("td");
        td1.innerHTML = records[i].ninumber;
        var td2 = document.createElement("td");
        td2.innerHTML = records[i].fullname;
        var td3 = document.createElement("td");
        td3.innerHTML = records[i].phone;
        var td4 = document.createElement("td");
        td4.innerHTML = records[i].address;
        var td5 = document.createElement("td");
        td5.innerHTML = records[i].department;
 
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        deleteButton = document.createElement("input");
        deleteButton.type="button";
        deleteButton.id = "a" + i;
        deleteButton.dataset.index=i;
        deleteButton.className = "delete";
        deleteButton.value = "Del";
        deleteButton.style.visibility = "visible";
        deleteButton.onclick = function () {
            deleteRecord(this);
    };
    let tabCell = tr.insertCell(-1);  
    tabCell.appendChild(deleteButton);
  

  editButton = document.createElement("input");
  editButton.type="button";
  editButton.id = records[i].ninumber;
  editButton.className = "delete";
  editButton.value = "Edit";
  editButton.style.visibility="visible";
  editButton.onclick = function () {
    editrecord(this);
  };
    tabCell.appendChild(editButton);

    tbody.appendChild(tr);
    }   
}

function displayFilteredData() {
    var filter = document.getElementById('filter').value;
    var filtertable = [];

    if (filter == "All") {
        show(records);
    }else
    {
        for(let i =0; i <records.length; i++)
        {
            if(records[i].department == filter)
            {
                filtertable.push(records[i])
            } 
        }
        show(filtertable);
    }
}

function deleteRecord(button) {

    var buttonIndex = parseInt(button.dataset.index);

    let choice = confirm("do you want to delete this record?");
    if (choice == true) {
        for (let index = 0; index < records.length; index++) {
            if (index == buttonIndex) {
                records.splice(index, 1);

            }

        }

        show(records);
    }

}
function showNewPerson(){
    document.getElementById("employeetable").setAttribute('hidden', 'hidden');
    document.getElementById("newPerson").removeAttribute('hidden');
}

function save() {

    document.getElementById("newPersonBtn").removeAttribute('hidden');
    document.getElementById("employeetable").removeAttribute('hidden');
    document.getElementById("editperson").setAttribute("hidden", "hidden");

    var person = document.getElementById("editNI").value; //get the ninumber here, after edit button pressed

    for (var i = 0; i < records.length; i++) { //trying to find this person within the records


        if (records[i].ninumber == person) { //here the find occurs
            records[i].ninumber = document.getElementById("editNI").value;
            records[i].fullname = document.getElementById("editName").value;
            records[i].phone = document.getElementById("editPhone").value;
            records[i].address = document.getElementById("editAddress").value;
            records[i].department = document.getElementById("editDept").value;

            show(records)

            return;
        }
    }

}
function editrecord(button) {
    document.getElementById("newPerson").setAttribute('hidden', 'hidden');
    document.getElementById("employeetable").setAttribute('hidden', 'hidden');
    document.getElementById("editperson").removeAttribute('hidden');
    document.getElementById("newPersonBtn").setAttribute('hidden', 'hidden')


    for (var i = 0; i < records.length; i++) {

        if (records[i].ninumber == button.id) {
            document.getElementById("editNI").value = records[i].ninumber;
            document.getElementById("editName").value = records[i].fullname;
            document.getElementById("editPhone").value = records[i].phone;
            document.getElementById("editAddress").value = records[i].address;
            document.getElementById("editDept").value = records[i].department;

            return;
        }
    }
}

function cancel() {
    document.getElementById("editperson").setAttribute("hidden", "hidden");
    document.getElementById("newPersonBtn").setAttribute('hidden')
    document.getElementById("employeetable").setAttribute('hidden');

}

function confirmEdit(id) {

    records.push(

        {
            "ninumber": document.getElementById("addNI").value,
            "fullname": document.getElementById("addFullName").value,
            "phone": document.getElementById("addPhone").value,
            "address": document.getElementById("addAdd").value,
            "department": document.getElementById("addDep").value
        });

    records.splice(id, 1);
    show(records);

    document.getElementById("addNI").style.visibility = "hidden";
    document.getElementById("addFullName").style.visibility = "hidden";
    document.getElementById("addPhone").style.visibility = "hidden";
    document.getElementById("addAdd").style.visibility = "hidden";
    document.getElementById("addDep").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
}

    
//delete record, to find which button I pressed, 
//find that person on the array
//remove person from array
//rebuild table 




