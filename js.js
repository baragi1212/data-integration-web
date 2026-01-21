const container = document.getElementById('container');
const counter = document.getElementById('counter');
const tabs = document.querySelectorAll('.tab');
// [함수] 화면에 카드를 그리고 개수를 업데이트하는 로직
function renderCards(filterStatus){
    // 1. 데이터 필터링
  const filteredData = filterStatus === "전체"
  ? serverStudents
  : serverStudents.filter(student => student.status === filterStatus);
 // 2. 카운트 업데이트
  counter.textContent = `총 ${filteredData.length}개`;
  // 3. 컨테이너 초기화 후 카드 삽입
  container.innerHTML = '';
  filteredData.forEach(item => {
    const cardHtml = `
      <div class="card">
      <p class="userId">${item.id}</p>
      <p class="userName">${item.name}</p>
      <p class="userClassName">${item.className}</p>
      <p class="userStatus ${item.status}">${item.status}</p>
      </div>
    `;
    container.innerHTML += cardHtml;
  });
}
// [이벤트] 탭 버튼 클릭 이벤트 설정
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const status = tab.textContent;
    renderCards(status);
  });
});
// [초기화] 페이지 로드 시 처음 한 번 실행
renderCards('전체');
