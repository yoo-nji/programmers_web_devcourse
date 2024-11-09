//promise then 연습문제 (jsonplaceholder)
// 문제 1
//** 설명 **: 랜덤한 게시물의 제목을 가져와 출력하는 `getRandomPostTitle` 함수를 작성하세요.;

{
  async function getRandomPostTitle() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error("error");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      // console.log(`Random Post Title: ${data[randomIndex].title}`);
    }
    catch (error) {
      console.error(error);
    }
  }
  getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}

//문제 2
//** 설명 **: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 `getUserInfo` 함수를 작성하세요.;
{
  async function getUserInfo(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) throw new Error("error");
      const user = await response.json();
      // console.log(` Name: ${user.name}, Email: ${user.email}`);
    }
    catch (err) {
      console.error(err);
    }
  }
  getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}

// 문제 3
//** 설명 **: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 `getPostDetails` 함수를 작성하세요.;
{
  async function getPostDetails(postId) {

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) throw new Error("error");
      const post = await response.json();
      // console.log(post);
    }
    catch (err) {
      console.error(err);
    }

  }

  getPostDetails(1); // 출력 예상 결과는 아래에
}

// 문제 4
//** 설명 **: 모든 사용자의 이름과 이메일을 출력하는 `getAllUsers` 함수를 작성하세요.;
{
  async function getAllUsers() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json();
      data.forEach(data => {
        // console.log(`name ${data.name}, Email ${data.email}`);
      });
    }
    catch (error) {
      console.error(error);
    }
  }
  getAllUsers();
}

// 문제 5
//설명: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.;
{
  async function getPostComments(postId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();
      // data.forEach(data => console.log(data.body));
    }
    catch (err) {
      console.error(err);
    }
  }

  getPostComments(1);
}