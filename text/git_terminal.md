## git 터미널 명령어 정리

### checkout
```java
git checkout {커밋 고유값} // 
git checkout main //main 브랜치로 이동
git checkout {특정 브랜치 이름} //특정 브랜치 이름으로 이동
git checkout -b {브랜치} //브랜치 생성
```

### push
```java
git push origin {브랜치} //브랜치를 origin에 푸시
git push origin {브랜치} --delete //origin에 브랜치 지우기
git push origin {브랜치} --force //내 컴퓨터에 있는 브랜치 상태를 강제로 푸시하기 
```
### branch
```java
git branch //branch 목록 보기, 현재 branch에 *표시
git branch -d {브랜치} //브랜치 삭제
```

### git sys
```java
git status //상태 확인 unstage/stage 확인 
git log //깃허브 로그
git remote -v //remote현황 (fetch서버, push서버)
```



