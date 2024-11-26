import styled from "@emotion/styled";

// 버튼 스타일 정의
const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

// 카드 스타일 정의
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

// 카드 제목 스타일 정의
const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

// 카드 본문 스타일 정의
const CardBody = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Card>
        <CardTitle>Stylish Card</CardTitle>
        <CardBody>This is a simple, elegant card component styled with Styled Components.</CardBody>
        <Button>Click Me</Button>
      </Card>
    </div>
  );
};

export default App;
