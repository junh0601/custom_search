const search = document.querySelector("#search-bar");
const google = document.querySelector("#google");
const naver = document.querySelector("#naver");
const erase = document.querySelector("#erase");
const required = document.querySelector("#required");


function openUrl(link) {
    if (search.value == ""){
        search.placeholder="검색어를 입력하세요"
    }else{
        location.href = link;
    }
}

function handleNaver(event) {
    event.preventDefault();
    const searchLink = `https://search.naver.com/search.naver?ie=UTF-8&query=${search.value}`;
    openUrl(searchLink);
}

function handleGoogle(event) {
    event.preventDefault();
    const searchLink = `https://www.google.com/search?q=${search.value}`;
    openUrl(searchLink);
}

function handleErase() {
    search.value = "";
}



erase.addEventListener("click", handleErase);
google.addEventListener("click", handleGoogle);
naver.addEventListener("click", handleNaver);