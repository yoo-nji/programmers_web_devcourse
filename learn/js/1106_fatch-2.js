//promise 연습문제(jsonplaceholder++)

// 문제 1
//** 설명 **: 모든 사용자의 이메일을 가져온 후, 중복된 이메일을 제거하여 출력하는 `getUniqueEmails` 함수를 작성하세요.;

{
  function getUniqueEmails() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        if (!response.ok) throw new Error("error");
        return response.json();
      })
      .then(users => {
        // console.log(users);
        const emails = users.map(user => user.email);
        // console.log(emails);
      })
      .catch(console.error);
  }

  getUniqueEmails();
}

//문제2
//설명: 특정 사용자의 댓글을 가져와, 각 댓글의 작성자 이름과 이메일을 포함한 객체 배열로 반환하는 getUserCommentsWithEmails 함수를 작성하세요.
{
  function getUserCommentsWithEmails(userId) {
    let userarr = [];

    fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("error");
        return response.json();
      })
      .then(user => {
        // console.log(user);
        let obj = {};
        obj["comment"] = user.body;
        obj["userName"] = user.name;
        obj["userEmail"] = user.email;
        userarr.push(obj);
        console.log(userarr);
      })
      .catch(console.error);
  }

  getUserCommentsWithEmails(2);
}

//문제 3
//설명: 모든 게시물의 댓글 수를 세고, 댓글 수가 가장 많은 게시물의 제목과 댓글 수를 출력하는 getMostCommentedPost 함수를 작성하세요.
{
  function getMostCommentedPost() {
    // 여기에 코드를 작성하세요
  }

  getMostCommentedPost(); // Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit, Comment Count: 5

}
