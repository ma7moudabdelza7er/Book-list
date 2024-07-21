
let btn = document.querySelector(".btn");

let title = document.getElementById("title");

let author = document.getElementById("author");

let year = document.getElementById("year");

let container = document.querySelector(".container"); 

let bookList = document.querySelector("#book-list");

btn.addEventListener("click",function(e){

    e.preventDefault();

    if(title.value == "" && author.value == "" && year.value== ""){

        alert("please fill the form")

    }else{
        // creating section
    createSection = document.createElement("section");
    createSection.classList.add("book-list")
    // creating div to title
    createTitle = document.createElement("div")
    createTitle.innerHTML = title.value;
    console.log(title.value)
    createSection.appendChild(createTitle);
    // creating div to author
    createAuthor = document.createElement("div")
    createAuthor.innerHTML = author.value;
    createSection.appendChild(createAuthor);
    // creating div to year
    createYear = document.createElement("div")
    createYear.innerHTML = year.value;
    createSection.appendChild(createYear);
    container.appendChild(createSection);
    // reset input
    title.value = "";
    author.value = "";
    year.value="";
    }
    
})