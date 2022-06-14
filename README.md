> 프로그래머스 데브코스에서 진행한 노션 클로닝 프로젝트

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

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

## 앞으로 남은 일정

- [x] contenteditable을 사용하여, 실제 Notion과 같은 markdown 에디터를 구현
- [x] notion과 같이 `/`를 하면, 바로 하위 문서를 구성하도록 구현

## 후기

항상 같은 음식만 먹으면 이 음식이 얼마나 편리하고 맛있는지 모를겁니다. 즉, React로만 프로젝트를 진행하다보니, 왜 React가 나오게 되었고 사람들이 많이 사용하는지 절실히 알게 되었던 계기 였습니다.

따라서, 그렇게 느낄 수록 기본에 충실해야할 때인것 같아 vanilla js에 더욱 집중해야겠다는 반성을 하게 해준 프로젝트였습니다.

최종목표는 앞서 써놓은 기능 추가하고 오픈소스로도 기여해보는 것이 최종 목표입니다.
