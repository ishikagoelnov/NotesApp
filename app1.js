console.log("gui");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("hello");
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  // let notesObj=new Array;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj={
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value="";
//   console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  // let notesObj=new Array;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
                <div class="noteCard card mx-2 my-2" style= "width: 15rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                        <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                    </div> 
      `;
  });
  let notesElm=document.getElementById("notes");
  if(notesObj.length!==0){
      notesElm.innerHTML=html;
  }
  else{
      notesElm.innerHTML=`Nothimg to show!! Use "ADD NOTE" section above to add a note`;
  }
}

function deleteNote(index){
    // console.log("I am deleting the note",index);
    let notes = localStorage.getItem("notes");
    // let notesObj=new Array;
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let noteVal=search.value.toLowerCase();
    // console.log("Input event fired!!",noteVal);
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
      let cardTxt=element.getElementsByTagName("p")[0].innerText;
    //   console.log(cardTxt);
    if(cardTxt.includes(noteVal)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
    })
})

/*
1. Write all the comments to the code
2.Add Title
3.Mark a note as important
4. Separate notes by user
5. Sync and host to web server
*/
