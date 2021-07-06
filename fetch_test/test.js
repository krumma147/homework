
function getAllUser() {
    let getListAPI = 'https://todonew412.herokuapp.com/api/list';
    fetch(getListAPI)
        .then((response) => response.json())
        .then((get) => {let output = get.map(e=>
                `<div>
                    <p>${e._id}</p>
                    <p>${e.name}</p>
                </div>

                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                `)
            document.getElementById("allID").innerHTML = output;
        })
}

function getUserByID() {
    let id = document.getElementById("inputID").value;
    //console.log(id);
    if(id == ""){
        alert("Chua nhap ID de tim");
    }else
    {
        let getUserAPI = 'https://todonew412.herokuapp.com/api/get/' + id;
        fetch(getUserAPI)
            .then((response) => response.json())
            .then((get) => {
                if(get.name != undefined){
                    let output =`${get._id}
                    ${get.name}`;
                }else{alert(`Khong ton tai user co ID:${id}`)}
                //console.log(`${get._id} ${get.name}`);
                document.getElementById("userByid").innerHTML=output;
            }) 
    }
}

function createUser() {
    let username = document.getElementById("username").value;
    console.log(username,2000)
    if(username == "")
    {alert("Vui long nhap ten")} 
    else
    {let createAPI = 'https://todonew412.herokuapp.com/api/create'
        fetch(createAPI,{
            method : 'POST',
            body: JSON.stringify({
                name:username,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((get) => {
            let output = ` <p>ID: ${get._id}</$> <p>Name: ${get.name}</p>`;
            document.getElementById("newUser").innerHTML = output;
        })
    }
}

function updateUser() {
    let fixedID = document.getElementById("fixedID").value;
    let fixedName = document.getElementById("fixedName").value;
    console.log(`${fixedID}, ${fixedName}`)
    const updateAPI = 'https://todonew412.herokuapp.com/api/update?id=' + fixedID;
    fetch(updateAPI, {
        method: 'POST',
        body: JSON.stringify({
            name:fixedName,
        }),
        headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function deleteUser() {
    let id = document.getElementById("deleteID").value;
    //console.log(id,100);
    let deleteAPI = 'https://todonew412.herokuapp.com/api/delete/' + id;
    fetch(deleteAPI,{method:'POST'})
        .then((response) => response.json())
        .then((json) => alert(`Da xoa thanh cong data co id = ${id}`));
}