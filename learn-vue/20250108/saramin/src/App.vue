<script>
export default {
  name: "App",
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    // 공백 포함 글자수
    inputLength() {
      return this.inputText.length;
    },
    // 공백 포함 바이트
    inputBytes() {
      // 바이트는 영어는 1바이트, 한글은 2바이트로 계산
      return this.inputText
        .split("")
        .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
    },
    // 공백 제거 글자수
    inputWithoutEmptyLength() {
      return this.inputText.replaceAll(" ", "").length;
    },
    //공백 제거 바이트
    inputWithoutEmptyBytes() {
      return this.inputText
        .replaceAll(" ", "")
        .split("")
        .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
    },
  },
  methods: {
    handleChange(event) {
      this.inputText = event.target.value;
    },
    copyText() {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(this.inputText)
          .then(() => {
            alert("복사되었습니다.");
          })
          .catch((err) => {
            alert("복사에 실패했습니다.", err);
          });
      } else {
        //!! 구형 브라우저
        const textArea = document.createElement("textarea");
        textArea.value = this.inputText;
        document.body.appendChild(textArea); // body에 추가
        textArea.select(); // 추가한 텍스트 영역 선택
        const successful = document.execCommand("copy"); // 복사
        document.body.removeChild(textArea); // body에서 제거

        if (successful) {
          alert("복사되었습니다.");
        } else {
          alert("복사에 실패했습니다.");
        }
      }
    },
    clear() {
      this.inputText = "";
    },
  },
};
</script>

<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          :value="inputText"
          @input="handleChange"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ inputLength }}</span> 자 |
          <span>{{ inputBytes }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ inputWithoutEmptyLength }}</span> 자 |
          <span>{{ inputWithoutEmptyBytes }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyText">전체복사</button>
        <button @click="clear">초기화</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.saramin {
  width: 564px;
  margin: 100px auto;
}

.saramin .box {
  border-top: 1px solid #676767;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-block: 1px solid #ddd;
}

.saramin h1 {
  font-size: 32px;
  margin-bottom: 50px;
  line-height: 1;
  font-weight: normal;
}

.saramin .string-length {
  padding: 30px;
}

.saramin .string-length textarea {
  width: 100%;
  height: 400px;
  border: none;
}

.saramin .str-info {
  border-top: 1px solid #ebebeb;
  padding: 0 22px;
  font-size: 14px;
  margin: 0px 8px;
}

.saramin .str-info span {
  font-size: 15px;
  color: #ff662f;
  font-weight: bold;
}

.saramin .btn-area {
  background-color: #fbfbfb;
  padding: 35px 0;
  text-align: center;
}

.saramin .btn-area button {
  background: transparent;
  border: 1px solid #d9d9d9;
  width: 160px;
  height: 40px;
  margin: 0 2px;
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>
