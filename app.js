import {query} from "./url.js"

let q = "";
const search = document.querySelector("#search-bar");
const searchButton = document.querySelector("#searchButton");

query.forEach((item)=>{
    const span = document.createElement("span");
    const input = document.createElement("input");
    input.value = (item.isShortcut)? `🌐${item.site}` : item.site ;
    input.id = item.site;
    input.type = "button";
    input.classList.add("button");
    span.appendChild(input);
    searchButton.appendChild(span);
})

function searchUrl(item){
    query.forEach((q)=> {
        if(q.site===item.id){
            if(q.isShortcut){
                return location.href = q.url;
            }else if (search.value===""){
                return search.placeholder="검색어를 입력하세요";
            }
            const link = q.url+search.value
            location.href = link;
        }
    })
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((item) => {
    item.addEventListener("click", function(){searchUrl(item)})
});



