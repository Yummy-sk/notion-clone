https://user-images.githubusercontent.com/60822846/164151734-ccdc6c72-69d8-4bab-97bb-4e4362c0233d.mov

## Summary

### 기본 구현 사항

- [x] Document 생성
- [x] Documnet 삭제
- [x] Document 수정
  - [x] 편집기 지속적으로 서버에 저장
- [x] history API로 SPA 라우팅

### 보너스 구현 사항

- [x] 하위 Document 표시
- [ ] 편집기에서 다른 Document 링크 **( 미완료 )**
- [ ] Rich Editor **( 미완료 )**

## 폴더 구조

```
FEDC2-4_Project_Notion_VanillaJS
 ┃
 ┣  src
 ┃ ┣  api
 ┃ ┃ ┣  api.js
 ┃ ┃ ┗  documentApi.js
 ┃ ┣  components
 ┃ ┃ ┣  DocumentAdd
 ┃ ┃ ┃ ┗  DocumentAdd.js
 ┃ ┃ ┣  DocumentEdit
 ┃ ┃ ┃ ┗  DocumentEdit.js
 ┃ ┃ ┣  DocumentList
 ┃ ┃ ┃ ┗  DocumentList.js
 ┃ ┃ ┣  DocumentRoot
 ┃ ┃ ┃ ┗  DocumentRoot.js
 ┃ ┃ ┣  Editor
 ┃ ┃ ┃ ┗  Editor.js
 ┃ ┃ ┣  NotFound
 ┃ ┃ ┃ ┗  NotFound.js
 ┃ ┃ ┗  index.js
 ┃ ┣  pages
 ┃ ┃ ┣  DocumentPage
 ┃ ┃ ┃ ┗  DocumentPage.js
 ┃ ┃ ┣  SideBar
 ┃ ┃ ┃ ┗  SideBar.js
 ┃ ┃ ┗  index.js
 ┃ ┣  public
 ┃ ┃ ┗  images
 ┃ ┃ ┃ ┣  document.png
 ┃ ┃ ┃ ┣  fabicon.ico
 ┃ ┃ ┃ ┣  greeting.png
 ┃ ┃ ┃ ┣  plus.svg
 ┃ ┃ ┃ ┗  trash.svg
 ┃ ┣  styles
 ┃ ┃ ┣  DocumentPage
 ┃ ┃ ┃ ┗  DocumentPage.css
 ┃ ┃ ┣  SideBar
 ┃ ┃ ┃ ┗  SideBar.css
 ┃ ┃ ┣ index.css
 ┃ ┃ ┗  reset.css
 ┃ ┣ util
 ┃ ┃ ┣  createDomeElem.js
 ┃ ┃ ┣  debounce.js
 ┃ ┃ ┣  index.js
 ┃ ┃ ┣  localStorage.js
 ┃ ┃ ┗  querySelector.js
 ┃ ┣  App.js
 ┃ ┣  Main.js
 ┃ ┗  router.js
 ┣  .prettierrc
 ┣  README.md
 ┗  index.html
```

## Flow

![IMG_66AD3EFDD119-1](https://user-images.githubusercontent.com/60822846/164153083-54d30f39-b5fc-4a6b-b6dd-fe27a180f26e.JPEG)

흐름은 위와 같고, API 호출과 대부분의 상태들은 최상위인 App.js에서 관리 하도록 노력하였습니다.

## 후기

음.. 개인적으로 많이 부족함을 느끼게 되었고 외롭지 않았던 것 같습니다.

간간히 원인 모를 에러나 문제가 발생하였을 때 팀원들이 있었기 때문에 조금씩 해결해 나간 것 같습니다.

앞으로의 계획은 현재 미비한 Rich Editor를 추가해, 여러분들께 보여줄 수 있는 퀄리티로 배포를 하고 싶습니다.

제 코드에 문제점이나 느낀점 그리고 수정했으면 좋겠다 싶으면 지체없이 리뷰남겨주세요!

하루 하루 성장하는 개발자가 되도록 노력하겠습니다!!

감사합니다 ☺️
