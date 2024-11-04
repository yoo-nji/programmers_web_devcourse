//1. 현재 날짜 출력
//설명: 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
{
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padEnd(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const now = `${year}. ${month}. ${day} ${hour}:${minute}:${second}`;
  // console.log(now);
}

//2. 특정 날짜의 요일
//설명: 2024년 12월 25일이 무슨 요일인지 출력하세요.
{
  const specificDate = new Date(`2024-12-25`);
  // console.log(specificDate);
  const dayOfWeek = specificDate.getDay();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  console.log(daysOfWeek[dayOfWeek]);
}

//3. 월별 마지막 날짜
//설명: 2024년 10월의 마지막 날짜를 구하세요.
{
  const date = new Date(2024, 10, 0);

  console.log(date.getDate()); // 31
}

//4. 날짜 차이 계산
//설명: 2024년 1월 1일과 2024년 12월 31일 사이의 일수를 계산하세요.
{
  const startDate = new Date(`2024-1-1`);
  console.log(startDate);
  const endDate = new Date(`2024-12-31`);
  const diffDays = Math.floor((endDate - startDate)) / (1000 * 60 * 60 * 24);
  console.log(diffDays);
}

//5. 생일 계산
//설명: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
{
  const birthDate = new Date(`1990-5-15`);
  const now = new Date();
  // console.log(`나이: ${now.getFullYear() - birthDate.getFullYear()}`);
}

//6. 날짜 추가
//현재 날짜에 10일을 추가한 날짜를 출력하세요.
//예상 결과 **: 현재 날짜 + 10일;
{
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const formattedDate = `${date.getFullYear()}. ${String(date.getMonth() + 1).padStart(2, '0')}. ${String(date.getDate()).padStart(2, '0')}.`;
  console.log(formattedDate);
}

//7. 특정 날짜의 월과 연도
{
  const date = new Date('2024-10-30');
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  console.log(`${year}, ${month}`);
}

//8. 오늘의 시작 시간
//설명: 오늘 날짜의 시작 시간(00:00:00)으로 설정한 Date 객체를 출력하세요.;
{
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  console.log(formattedDate);
}

//??9. 월별 요일 출력
//설명: 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
{
  const date = new Date(2024, 10);

  console.log(date);
}

//10. 윤년 확인
//**설명**: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
{
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return `${year}: 윤년`;
    return `${year}: 평년`;
  }

  // console.log(isLeapYear(2024));
  // console.log(isLeapYear(2023));
}