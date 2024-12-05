export default function FetchMethod() {
  //HTTP Method: POST
  //✅ 데이터 추가할 때
  const postHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "5",
          title: " title",
          views: 300,
        }),
      });
      if (!response.ok) throw new Error("Failed to Post");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ DELETE -> 리소스 삭제
  const deleteHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/5", {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to Post");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ PUT -> 모든 리소스 수정(식별할 수 있는 id 제외)
  const putHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/4", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: " new title",
          views: 50,
        }),
      });
      if (!response.ok) throw new Error("Failed to Post");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //✅ PATCH -> 일부 리소스 수정(식별할 수 있는 id 제외)
  const patchHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/4", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: " A new patch title",
          views: 150,
        }),
      });
      if (!response.ok) throw new Error("Failed to Post");
      const data = await response.json();
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
