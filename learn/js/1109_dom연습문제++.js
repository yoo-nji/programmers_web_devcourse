//dom2_1109.html
//* DOM 연습문제 ++

//?? 1. 문제: 다중 이미지 업로드 미리보기
// ** 설명 **: 사용자가 여러 이미지를 업로드하고, 업로드한 이미지의 미리보기를 보여줍니다.
// 파일 정보는 input 요소의 files 속성을 통해 접근
{
  // const imageUploadEl = document.querySelector('#imageUpload');

  // imageUploadEl.addEventListener('change', (e) => {
  //   const files = e.target.files;
  //   console.log(files);
  //   // Array.form() 유사배열을 배열로 바꿔 줌
  //   Array.from(files).forEach(file => {
  //     console.log(file);

  //   });
  // });
}

// 2. 문제: 타이머 기능 구현
// ** 설명 **: 사용자가 버튼을 클릭하면 카운트다운 타이머가 시작됩니다. 10초가 지나면 알림을 표시합니다.
{
  // const btnEl = document.querySelector('#startTimerButton');
  // const timerEl = document.querySelector('#timerDisplay');
  // let copy = timerEl.textContent; // 초기값 저장
  // let count = timerEl.textContent; // 10


  // //타이머 함수
  // function timer() {
  //   if (count >= 0) { // count가 0보다 크거나 같을 때만 실행
  //     timerEl.textContent = count--;
  //     setTimeout(timer, 1000); // 1초 후에 timer 함수를 다시 호출
  //   }
  //   else {
  //     alert('타이머가 끝났습니다.');
  //     timerEl.textContent = copy; //초기화
  //   }
  // }
  // btnEl.addEventListener('click', timer);
}

//3. 문제: 복수 선택 가능한 체크박스
// ** 설명 **: 여러 체크박스를 만들어 사용자가 선택한 항목의 개수를 표시합니다.
{
  // const checkboxEls = document.querySelectorAll('.itemCheckbox');

  // function checkCount() {
  //   let checkCount = 0;
  //   checkboxEls.forEach((checkbox) => {
  //     if (checkbox.checked) checkCount += 1;
  //   });

  //   document.querySelector('#countDisplay').textContent = `선택된 항복 수: ${checkCount}`;
  // }

  // checkboxEls.forEach((checkbox) => {
  //   // console.log(checkbox);
  //   checkbox.addEventListener('click', checkCount);
  // });
}

// 4. 문제: 네비게이션 바에 활성화된 항목 표시
// ** 설명 **: 네비게이션 바에서 클릭된 항목에 '활성화' 클래스를 추가합니다.
{
  // const liEls = document.querySelectorAll('.nav-item');
  // liEls.forEach((li) => {

  //   li.addEventListener('click', (e) => {
  //     liEls.forEach((li) => { li.classList.remove('active'); });
  //     e.target.classList.add('active');
  //   });
  // });
}

// 5. 문제: 드롭다운 메뉴 구현
// ** 설명 **: 버튼 클릭 시 드롭다운 메뉴가 나타나고, 메뉴 항목을 클릭하면 선택된 항목을 표시합니다.;
{
  // //메뉴 열기
  // document.getElementById('dropdownButton').addEventListener('click', function () {
  //   document.getElementById('dropdownMenu').style.display = 'block';
  // });

  // //항목 선택
  // document.querySelectorAll('.menu-item').forEach((item) => {
  //   item.addEventListener('click', function () {
  //     const selectedItem = document.getElementById('selectedItem');
  //     selectedItem.textContent = `선택된 항목: ${item.textContent}`;
  //   });
  // });
}

// 6. 문제: JSON 데이터를 테이블로 표시
// ** 설명 **: JSON 데이터를 받아와서 테이블 형식으로 화면에 표시합니다.;
{
  // const makeUsersTable = async () => {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const users = await response.json();
  //   console.log(users);

  //   const dataTable = document.querySelector('#dataTable');

  //   let innerCon = `
  //   <tr>
  //     <th>이름</th>
  //     <th>이메일</th>
  //   </tr>
  //   `;

  //   users.forEach(user => {
  //     innerCon += `
  //     <tr>
  //       <td>${user.name}</td>
  //       <td>${user.email}</td>
  //     </tr> `;
  //   });

  //   dataTable.innerHTML = innerCon;
  // };
  // document.querySelector('#loadTableButton').addEventListener('click', makeUsersTable);
}

//### 7. 문제: 비밀번호 강도 검사
// ** 설명 **: 비밀번호 입력 시 강도를 체크하고 결과를 표시합니다.

//   공통: /[A-Z]/.test(password) && /[0-9]/;
// 중간: 패스워드가 8자 이상;
// 강함: 패스워드 8자 이상 + 공통 정규식 통과;
// 그외: 약함;
{
  // const passwordInput = document.querySelector('#passwordInput');
  // const strengthDisplay = document.querySelector('#strengthDisplay');

  // passwordInput.addEventListener('input', function () {
  //   let passwordValue = passwordInput.value;
  //   strengthDisplay.textContent = `강도: 약함`;
  //   if (passwordValue.split('').length >= 8) {
  //     strengthDisplay.textContent = `강도: 중간`;
  //     if (/[A-Z]/.test(passwordValue) && /[0-9]/) strengthDisplay.textContent = `강도: 강함`;
  //   }
  // });
}

//8. 문제: 다이나믹 폼 추가
// ** 설명 **: 버튼 클릭 시 사용자가 입력할 수 있는 새로운 폼 필드를 추가합니다.;
{
  // document.querySelector('#addFieldButton').addEventListener('click', function () {
  //   const formEl = document.querySelector('#formContainer');
  //   const inputEl = document.createElement('input');
  //   inputEl.type = 'text';
  //   inputEl.placeholder = '새로운 필드 입력';
  //   formEl.appendChild(inputEl);
  // });
}