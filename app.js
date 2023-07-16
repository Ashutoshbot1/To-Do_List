const item=document.getElementById("item");
const toDoBox=document.getElementById("to-do-box");


const saveToDo = ()=>{
    const liList=document.querySelectorAll("li");
    // console.log(toDos);

    toDoList=[];

    liList.forEach(
        (toDo)=>{
            toDoList.push(toDo.innerText);
        }
    )

    // console.log(toDoList);

    localStorage.setItem("toDos",JSON.stringify(toDoList));
}

item.addEventListener("keyup",
function(event){
    if(event.key=="Enter"){

        if(this.value==="")return;
        else addToDo(this.value);
        console.log(this.value);
        this.value="";
    }
});

const addToDo=(item)=>{
    const listItem=document.createElement("li");
    // console.log(listItem);
    listItem.innerHTML=`
        <p id="para">
            ${item}
        </p>
        <i class="fas fa-times" style="text-decoration:none"></i>
    `;

    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
        // document.getElementById("para").classList.toggle("done");
        // document.querySelector(".fa-times").style.textDecoration="none";
    })

    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove();
        saveToDo();
    })

    toDoBox.appendChild(listItem);
    saveToDo();
}

(
    function(){
        const getToDos= JSON.parse(localStorage.getItem("toDos"));

        // if(!getToDos){
        //     localStorage.remove("toDos");
        //     // console.log("true");
        //     return;
        // }
        
        console.log(getToDos);

        getToDos.forEach(
            (data)=>{
                addToDo(data);
            }
        )
        
    }
)()

