//로또 번호 생성기
// ## 구현
// 버튼을 클릭하면 1 ~45의 랜덤한 숫자가 6개 선택이 되도록 해주세요.;
function pickNumber() {
  // console.log("눌림");
  const liEls = document.querySelectorAll('#lucky-numbers > li');

  let randomNumber = () => Math.floor(Math.random() * 45) + 1;

  const lottoNumber = new Set();
  while (lottoNumber.size < 6) {
    lottoNumber.add(randomNumber());
  }
  const lottoNumberArr = [...lottoNumber];
  // console.log(lottoNumberArr);

  liEls.forEach((li) => {
    li.textContent = `${lottoNumberArr.pop()}`;
  });
}
