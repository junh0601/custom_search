const search = document.querySelector("#search");
const google = document.querySelector("#google");
const erase = document.querySelector("#erase");
const required = document.querySelector("#required");

function handleGoogle(event) {
    event.preventDefault();
    const searchText = search.value;
    if (searchText == ""){
        search.placeholder="검색어를 입력하세요"
    }else{
        location.href = `https://www.google.com/search?q=${searchText}`
        console.log(`search ${searchText} with google`);
    }
}

function handleErase() {
    search.value = "";
}

erase.addEventListener("click",handleErase);
google.addEventListener("click", handleGoogle);
search.on