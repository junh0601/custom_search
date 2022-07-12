/* templete 추가하기
    site : 버튼에 표시되는 이름
    url : 검색 쿼리를 맨 마지막에 둔 검색 url
    isShortcut : 쿼리 검색이 필요없는 단순 링크 버튼일 경우 true

    {
        site : "", 
        url : "",
        isShortcut : true or false,
    },

*/

export const query = [
    {
        site : "구글",
        url : "https://www.google.com/search?q=",
        isShortcut : false,
    },
    {
        site : "네이버",
        url : "https://search.naver.com/search.naver?ie=UTF-8&query=",
        isShortcut : false,
    },
    {
        site : "사전",
        url : "https://m.search.naver.com/search.naver?where=m_ldic&sm=mtb_jum&query=",
        isShortcut : false,
    },
    {
        site : "이미지", 
        url : "https://www.google.com/search?tbm=isch&q=",
        isShortcut : false,
    }, 
    {
        site : "앱스토어", 
        url : "itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term={query}itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=",
        isShortcut : false,
    },
    {
        site : "카카오맵", 
        url : "https://map.kakao.com/?q=",
        isShortcut : false,
    },
    {
        site : "날씨", 
        url : "https://weather.naver.com",
        isShortcut : true,
    },
]