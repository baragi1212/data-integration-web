# 12_화면구현

### 파일구성
- index.html 메인html
- style.css 스타일시트
- js.js 내부 처리 로직
- server-data.js 외부 학생 데이터
### 외부 시스템과 내부 시스템이 무엇인지 설명
- 외부시스템이란 다른 서버에서 운영되는 시스템의 데이터를 가져와 사용하는 것으로 이 예제에서의 외부시스템은  server-data.js이다
예를 들어 현재 이 예제는 학생의 출석 정보를 관리하는 서버인데 이 서버에 필요한 학생 데이터를 학생데이터를 관리하는 서버에서
script src="" 태그를 사용해서 가져와 사용하는 것이다
- 내부 시스템이란 현재 사용하는 서버의 데이터를 그대로 가져와 사용하는 것이다
### 연계에 사용된 데이터 항목 정리
- server-data 안에서 serverStudents의 id, name, className, status를 가져와서 사용했다
### 외부 서버 데이터가 웹 화면에 반영되는 흐름 설명
- server-data 를 script src=""태그를 사용해 html로 가져온다
- server-data 안의 serverStudents에서의 배열정보를 사용한다
- serverStudents안의 status의 종류는 출석, 지각, 결석 3가지이고 이 3가지에 해당하는 탭과 전체탭이 html에 존재하고 초기값은 '전체' 이다
- function renderCards(filterStatus) 라는 함수를 만든다
- filteredData라는 변수를 만들어서 filterStatus의 값이 '전체'이면
- serverStudents의 데이터를 그대로 사용하고
- 거짓이라면 serverStudents를 필터처리해서 status 값을 가져와  '출석', '지각' ,'결석' 해당 상태와 일치하는 학생 데이터만 골라 새로운 배열을 만든다
- 변경된 filteredData의 length 값을 가져와서 총 개수를 센다
- html 에 존재하는 container를 가지고와서 innerHTML에 "" 공백을 줘서 초기화한다
- 카드를 만드는 과정을 변수화한다
- filteredData를forEach 하여 각각의 값을 item으로 가져온다
- item.id, item.name, item.className, item.status 값을 가져와서 카드를 만든다
- 카드 변수를 container에 innerHTML로 삽입한다
- function 종료한다
- 탭들을 forEach 하고 forEach한 tab에 addEventListener(click)이벤트를 지정한다
- 클릭시 다른 모든 탭의 active가 사라지고 선택한 탭만 active된다
- 선택된 탭에 textContent 를 사용해서 값을 가져오고 그 값을 변수로 지정한다
- 지정한 변수를 카드를 만드는 function renderCards에 매개변수로 사용한다 tab에 textContent는 전체, 출석, 지각, 결석 이고 그 값에 맞는 카드들만 출력된다
- renderCards의 초기값은 '전체'로 설정한다
### 본 과제가 데이터 연계 구현 과제인 이유에 대한 설명
- 서로 다른 서버 시스템의 데이터를 하나로 만들어 하나의 시스템을 만들기 때문에
- 외부 시스템인 학생관리정보 데이터를 가져와서 내부 시스템으로 화면에 출력할수 있도록 기능을 넣어서 외부시스템의 접근하기 어려운 데이터를 내부시스템의 기능으로 가져와 사용자가 이해하기 쉬운 형태로 데이터를 출력할수 있기 때문에 각각의
시스템만 활용하면 정보에 접근하기 어렵지만 두개의 시스템을 연계하면 하나의 편리한 시스템이 완성될수있다
