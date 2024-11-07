//promise then 연습문제 (jsonplaceholder)
// 문제 1
//** 설명 **: 랜덤한 게시물의 제목을 가져와 출력하는 `getRandomPostTitle` 함수를 작성하세요.;

{
  function getRandomPostTitle() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        //예외처리 중요!
        if (!response.ok) throw new Error("error"); return response.json();
      })
      .then((data) => {
        //랜덤 뽑기
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(`Random Post Title: ${data[randomIndex].title}`);
      })
      .catch(console.error);
  }

  getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}

//문제 2
//** 설명 **: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 `getUserInfo` 함수를 작성하세요.;
{
  function getUserInfo(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("error");
        return response.json();
      })
      .then((user) => {
        console.log(` Name: ${user.name}, Email: ${user.email}`);
      })
      .catch(console.error);

  }
  getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}

// 문제 3
//** 설명 **: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 `getPostDetails` 함수를 작성하세요.;
{
  function getPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json());
    // .then(console.log);
  }

  getPostDetails(1); // 출력 예상 결과는 아래에
}

// 문제 4
//** 설명 **: 모든 사용자의 이름과 이메일을 출력하는 `getAllUsers` 함수를 작성하세요.;
{
  function getAllUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        data.forEach(data => {
          // console.log(`name ${data.name}, Email ${data.email}`);
        });
      });
  }

  getAllUsers();
}

// 문제 5
//설명: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.;
{
  function getPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // data.forEach(data => console.log(data.body));
      });
  }

  getPostComments(1);
}

// 문제 6
//** 설명 **: 모든 댓글의 내용을 가져와 출력하는 `getAllCommentBodies` 함수를 작성하세요.;
{
  function getAllCommentBodies() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(data => {
        // data.forEach(data => console.log(`Comment: ${data.body}`));
      });
  }

  getAllCommentBodies();
}

//문제 7 🔥
//설명: 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
{
  function getSortedPostTitles() {
    fetch(`https://jsonplaceholder.typicode.com/posts`) //
      .then((response) => {
        if (!response.ok) throw new Error("error");
        return response.json();
      })
      .then((posts) => {
        //제목으로 정렬하기
        const newPosts = posts.map((post) => post.title).sort();
        newPosts.forEach((title) => {
          console.log(title);
        });
      })
      .catch(console.error);
  }
  getSortedPostTitles();
}

// 문제 8 🔥
//설명: 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
{
  //방법 1
  function getAllUserAddresses() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(data => {
          const address = data.address;
          // console.log(`Address of ${data.name}, ${address.suite}, ${address.street}, ${address.city}}, ${address.zipcode}`);
        });
      });
  }

  //방법 2
  function getAllUserAddresses() {
    fetch(`https://jsonplaceholder.typicode.com/users`) //
      .then((response) => {
        if (!response.ok) throw new Error("error");
        return response.json();
      })
      .then((users) => {
        users.forEach((user) => {
          //!!구조분해할당
          const { street, suite, city, zipcode, geo } = user.address;
          console.log(street, suite, city, zipcode, geo);
        });
      })
      .catch(console.error);
  }

  getAllUserAddresses();

}

//문제 9
//** 설명 **: 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 `getUserPostTitles` 함수를 작성하세요.;
{
  function getUserPostTitles(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        data.forEach(data => console.log(`Post Title: ${data.title}`));
      });
  }

  getUserPostTitles(1);

}
