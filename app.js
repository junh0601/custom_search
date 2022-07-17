import {searchQ} from "./url.js"

let q = "";
const search = document.querySelector("#search-bar");
const searchButton = document.querySelector("#searchButton");
//쿼리 내에 아이템을 버튼으로 노출
searchQ.forEach((item)=>{
    const span = document.createElement("span");
    const input = document.createElement("input");
    input.value = (item.isShortcut)? `🌐${item.site}` : item.site ;
    input.id = item.site; //각 버튼의 id는 사이트의 이름으로 설정됨
    input.type = "button";
    input.classList.add("button");
    span.appendChild(input);
    searchButton.appendChild(span);
})

function searchUrl(item){
    searchQ.forEach((q)=> {
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

function defaultSearch(event){
    searchUrl(deafaultQ);
}




search.addEventListener("submit", defaultSearch); 

const buttons = document.querySelectorAll(".button");
const deafaultQ = document.querySelector("구글");


buttons.forEach((item) => {
    item.addEventListener("click", function(){searchUrl(item)})
});
