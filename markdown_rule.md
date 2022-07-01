각종 문법 문서는 여기 참고
- [깃허브 마크다운](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)




깃허브 문법 무시는 \이용

> \## h1 

주석은 \<!--이것을 이용합니다 --> 
<!--저는 안보입니다.-->

개행은 비어있는 한줄을 만들어야함 (엔터 두번)

**bold** 
# h1
## h2
### h3
#### h4 
##### h5
###### h6
####### h7은 없음

1. 1번째
2. 2번째
3. 3번째
1. 4번째
1. 5번째

- 목록
- 목록
- 목록
* 목록
* 목록
+ 목록
+ 목록
  
1. 섞어서
- 여러개
  1. 쓰기
  2. 안녕하세요
     - 섞어서 씁니다.

_이탤릭_

*이탤릭*

__볼드__ 

**볼드**

___이탤릭볼드___

***이탤릭볼드***

**이렇게 _할수도_**

~~취소선~~

<U>밑줄</U> 은 원래 기본적으로 안됨

- [ ] task list

이모지 
- 깃헙에서는 이런식 >> :blue_heart:
- 기본적으론 이런식 >> &#8986; &#뒤에 이모지 [decimal 코드](https://www.w3schools.com/charsets/ref_emoji.asp) 입력
- 그냥 붙여 넣어도 됨 >> 😊

[이모지 링크](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#table-of-contents)




동영상은 
https://youtu.be/aKTH0o8AEtQ

주석은[^1].

[^1] : 이것은 깃허브에서 표시됩니다.


코드라인 추가
```javascript
    여기에 코드추가
    const name = (req,res) => res.send("this is code line"); 
```

| First Header  | Second Header | left | center | right|
| ------------- | ------------- | :--- | :---: | ---: |
| 첫줄 하이픈은 최소 3개| |왼쪽 정렬됨 | 가운데 정렬 됨  | 오른쪽 정렬됨 |
| Content Cell  | Content Cell  | 1111|1111 |1111 |
| `inline code block`  | Content Cell  | 파이프 넣기는 | 백틱 추가 --> | \| |


<details>
<summary>누르면 세부정보</summary>

- summary 안에 제목 넣기
- details 입니다. s 붙여주세요

</details> 
#
#

`$`구획문자를 사용해 인라인 수식 삽입 ->  $\sqrt{3x-1}+(1+x)^2$


mermaid 다이어그램 
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


geojson
```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
              [-90,35],
              [-90,30],
              [-85,30],
              [-85,35],
              [-90,35]
          ]
        ]
      }
    }
  ]
}
```

stl 3d 모델
```stl
solid cube_corner
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 1.0 0.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 1.0 0.0 0.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 1.0
      vertex 0.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.577 0.577 0.577
    outer loop
      vertex 1.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
endsolid
```


다크모드 전환 방법(연구중)
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>


![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

