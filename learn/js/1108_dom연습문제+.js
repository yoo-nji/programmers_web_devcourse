// DOM 연습문제 +
// dom_1108.html

//2. 문제: 비동기 데이터 로딩
//   ** 설명 **: 버튼 클릭 시 JSON 데이터를 비동기적으로 가져와서 제목을 화면에 표시합니다.
// ** API **: https://jsonplaceholder.typicode.com/posts/1
{
  // const $button = document.querySelector('#loadDataButton');
  // const $dataContainer = document.querySelector('#dataContainer');

  // const title = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //     if (!response.ok) throw new Error("error");
  //     const data = await response.json();
  //     // console.log(data);

  //     $dataContainer.textContent = `${data.title}`;

  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // $button.addEventListener('click', title);
}

// 3. 문제: 탭 기능 개선 (내용 동적 추가)
// ** 설명 **: 탭 클릭 시 내용을 동적으로 추가합니다.;
{
  // const $tabs = document.querySelectorAll('.tab');
  // // console.log($tabs);
  // //탭이 눌렸을 때 이벤트
  // $tabs.forEach(() => {
  //   addEventListener('click', function (e) {
  //     //누른 탭의 data-target 이름 가져오기
  //     const tabname = e.target.getAttribute('data-target');

  //     document.querySelectorAll('.tab-content').forEach((v) => (v.style.display = 'none'));

  //     const $content = document.querySelector(`#${tabname}`);

  //     $content.style.display = 'block';
  //     $content.textContent = `내용이 추가된 ${tabname}`;
  //   });
  // });
}

//4. 문제: 키보드 입력 감지
// ** 설명 **: Enter 키를 눌렀을 때 경고 메시지를 표시합니다.;
{
  // const inputEl = document.querySelector('#inputField');
  // // console.log($input);
  // inputEl.addEventListener('keydown', (e) => {
  //   //키코드로
  //   if (e.keyCode === 13) {
  //     alert('Enter 키가 눌렸습니다.');
  //   }
  // });
}


//??5. 문제: 다중 선택 드롭다운 구현
// ** 설명 **: 여러 항목을 선택할 수 있는 드롭다운 메뉴를 구현합니다.
// 힌트: selectedOptions 속성 사용하기;
{


}


//6. 문제: 이미지 슬라이더
// ** 설명 **: 여러 이미지를 순차적으로 보여주는 슬라이더를 구현합니다.;
{
  //이미지 주소 배열
  // imgArr = ["1.jpg", "2.jpg", "3.jpg"];
  // //인덱스 번호 초기화
  // let imgIndex = 0;

  // //이미지 주소 바꾸는 함수
  // const changeImage = () => {
  //   const imgEl = document.querySelector('#slider img');

  //   //배열 길이보다 커지거나 같으면 0으로 초기화
  //   imgIndex += 1;
  //   if (imgIndex >= imgArr.length) {
  //     imgIndex = 0;
  //   }
  //   imgEl.setAttribute('src', `/learn/media/${imgArr[imgIndex]}`);
  // };
  // //버튼 클릭
  // const btnEl = document.querySelector('#nextButton');
  // btnEl.addEventListener('click', changeImage);
};

//7. 문제: 폼 유효성 검사
// ** 설명 **: 입력된 이메일 주소의 형식이 유효한지 검사합니다.
{
  // const formEl = document.querySelector('#emailForm');
  // const emailMessageCon = document.querySelector('#emailMessage');

  // //이메일 정규식
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // formEl.addEventListener('submit', function (e) {
  //   e.preventDefault();
  //   const inputValue = document.querySelector('#emailInput').value;
  //   //!! 정규식 활용
  //   if (emailRegex.test(inputValue)) emailMessageCon.textContent = "유효한 이메일입니다.";
  //   else emailMessageCon.textContent = "유효하지 않은 이메일입니다.";
  // });
}

// 8. 문제: 알림 시스템 구현
// ** 설명 **: 사용자가 버튼을 클릭하면 알림 메시지를 보여주는 시스템을 구현합니다.;
{
  const message = () => {
    notificationContainer.style.height = "20px";
    notificationContainer.style.backgroundColor = 'skyblue';
    notificationContainer.style.color = '#000';
    notificationContainer.style.fontWeight = "bold";
    notificationContainer.textContent = "새로운 알림!";
    // 일정 시간 후에 알림 사라지게 하기 (3초 후)
    setTimeout(() => {
      notificationContainer.style.height = "0";
      notificationContainer.style.backgroundColor = '';
      notificationContainer.style.color = '';
      notificationContainer.style.fontWeight = "";
      notificationContainer.textContent = "";
    }, 2000);
  };

  notifyButton.addEventListener("click", message);
}

//9. 문제: 캘린더 구현
// ** 설명 **: 현재 날짜를 기반으로 간단한 캘린더를 표시합니다.
// 힌트: innerHTML, 테이블 태그를 문자열로 조합해서 만들면됨;
{

}