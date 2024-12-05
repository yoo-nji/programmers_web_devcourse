import axios from "axios";

export default function AxiosMethod() {
  //HTTP Method: POST
  //✅ 데이터 추가할 때
  const postHandler = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/posts", {
        id: "3",
        title: " title",
        views: 300,
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ DELETE -> 리소스 삭제
  const deleteHandler = async () => {
    try {
      const { data } = await axios.delete("http://localhost:3001/posts/3", {});
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ PUT -> 모든 리소스 수정(식별할 수 있는 id 제외)
  const putHandler = async () => {
    try {
      const { data } = await axios.put("http://localhost:3001/posts/3", {
        title: " title",
        views: 300,
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ PATCH -> 일부 리소스 수정(식별할 수 있는 id 제외)
  const patchHandler = async () => {
    try {
      const { data } = await axios.put("http://localhost:3001/posts/3", {
        views: 300,
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex gap-2 underline">
      <button onClick={postHandler}>POST</button>
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={putHandler}>PUT</button>
      <button onClick={patchHandler}>PATCH</button>
    </div>
  );
}
