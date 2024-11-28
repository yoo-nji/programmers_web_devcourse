//IIFE: 즉시실행함수

//표현식 if는 JSX 외부에서 한다
export default function IIFE() {
  const isLoggedIn = true;
  return (
    <>
      {/* 변종코드 */}
      {/* 표현식 안에서 if문에 따른 조건처리를 할 수 있다 */}
      {/* 방법: if문을 바로 사용하지 못해서 소괄호로 한번 감싸고 즉시실행시킨다. 
      
      근데 이럴 거면 그냥 표현식에서 사용 안 하고 밖으로 빼는 게 좋긴 함
      💡 하지만 표현식에서 우회로 if문이 가능하긴 하다!!  불가능은 아니라는 게 >>포인트<< */}
      {(() => {
        if (isLoggedIn) {
          return <h2>로그인 되었습니다</h2>;
        } else {
          return <h2>로그인이 필요합니다</h2>;
        }
      })()}
    </>
  );
}
