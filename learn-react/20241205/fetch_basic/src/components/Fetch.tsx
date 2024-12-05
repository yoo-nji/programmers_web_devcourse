import useFetch from "../hooks/useFetch";

export default function Fetch() {
  const { data, error, loading } = useFetch("http://localhost:3001/posts");
  const {
    data: profile, //이름 변경
    error: errorProfile,
    loading: loadingProfile,
  } = useFetch("http://localhost:3001/profile");

  // 로딩처리
  if (loading) <p>Loading...</p>;
  //에러처리
  if (error) <p>Error: {error}</p>;

  //✅ 두번째 데이터
  // 로딩처리
  if (loadingProfile) <p>Profile Loading...</p>;

  //에러처리
  if (loadingProfile) <p>Profile Error: {errorProfile}</p>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
}
