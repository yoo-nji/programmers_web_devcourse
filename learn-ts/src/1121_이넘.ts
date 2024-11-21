//이넘 enum
//고정된 값들의 집합을 정의하는데 사용되는 타입
//문자열 열거형
//숫자형 열거형
//const enum
//선언 병합

{
  //enum 사용 방법
  //1. 숫자 열거형 형태
  enum Direction {
    UP, //0
    DOWN, //1
    LEFT, //2
    RIGHT, //3
  }

  console.log(Direction.DOWN); //식별자.으로 값에 접근 가능
}
{
  //숫자 열거형 특징
  //할당연산자 사용해서 초기값 지정할 경우 LEFT, RIGHT의 값도 바뀐다
  //자동으로 1씩 증가함
  enum Direction {
    UP,
    DOWN = 20,
    LEFT,
    RIGHT,
  }

  console.log(Direction.DOWN); //20
  console.log(Direction.LEFT); //21
  console.log(Direction.RIGHT); //22
}
{
  // 🤔 이 열거형을 왜 사용하는가?
  function move(direction: string) {
    switch (direction) {
      case "UP":
        console.log("위로 한 칸 이동");
        break;
      case "DOWN":
        console.log("아래로 한 칸 이동");
        break;
      case "LEFT":
        console.log("왼쪽으로 한 칸 이동");
        break;
      case "RIGHT":
        console.log("오른쪽으로 한 칸 이동");
        break;
      default:
        console.log("해당 값이 없습니다");
    }
  }
  move("UP"); //여기서 up 이렇게 소문자로 쓰거나 오타가 난 상태로 전달하면  출력이 안 된다 => 실수를 유발할 수 있는 코드가 된다

  //✅ 코드 개선
  //개발자에게 미리 선택지를 주면서 실수를 방지할 수 있음
  enum Direction {
    UP, //0
    DOWN, //1
    LEFT, //2
    RIGHT, //3
  }
  function move2(direction: Direction) {
    switch (direction) {
      case Direction.UP:
        console.log("위로 한 칸 이동");
        break;
      case Direction.DOWN:
        console.log("아래로 한 칸 이동");
        break;
      case Direction.LEFT:
        console.log("왼쪽으로 한 칸 이동");
        break;
      case Direction.RIGHT:
        console.log("오른쪽으로 한 칸 이동");
        break;
      default:
        console.log("해당 값이 없습니다");
    }
  }
  move2(Direction.UP);
}
{
  //2. 문자열 열거형 방식
  //문자 할당도 가능
  // 속성에 어떤 값이 들어가있는지보다 >>열거<<한다는 게 중요함
  //하지만 숫자열보다 문자열이 선호됨. 의미있고 출력값이 직관적이기 때문(할당 안 하면 기본값이 숫자이기 때문에)
  enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
  }

  console.log(Direction.UP); //UP
  console.log(Direction.DOWN); //DOWN
  console.log(Direction.LEFT); //LEFT
  console.log(Direction.RIGHT); //RIGHT
}

{
  //활용
  enum Gender {
    Male = "Male",
    Female = "Female",
  }
  type User = {
    name: string;
    gender: Gender;
  };

  //💡 강사님 선호: enum보단 리터럴
  //단 같은 값이 여러번 다른 타입으로 지정되어야 하는 경우라면 enum이 더 유용할 수 있음
  //혹은 enum 대신이렇게 써 줄 수도있음
  // type User = {
  //   name: string;
  //   gender: "male" | "female";
  // };

  //객체 정의시 실수 방지
  const user: User = {
    name: "Alice",
    gender: Gender.Male,
  };
}

{
  //문자열 열겨형 선언 병합
  //값이 중복되지 않는다의 전제조건하에 병합 가능
  enum Gender {
    Male = "Male",
  }
  enum Gender {
    Female = "Female",
  }
  console.log(Gender.Male);
  console.log(Gender.Female);

  //단 숫자 열거형에선 병합이 안 됨
  //  enum Gender2 {
  //    Male //❌ 0
  //  }
  //  enum Gender2 {
  //    Female //❌ 0
  //  }

  //🚨 이유: 둘 다 값이 자동으로 0으로 지정되기 때문에 값이 같아서 병합이 안 됨 이슈

  //enum 특징
  enum test {
    hi,
  }
  //키값 추적하기
  console.log(test[0]); //hi
}
