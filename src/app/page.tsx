export default function Home() {
  const myHeaders = new Headers();
  const naverClientId = process.env.NAVER_CLIENT_ID as string;
  const naverClientSecret = process.env.NAVER_CLIENT_SECRET as string;
  myHeaders.append("X-Naver-Client-Id", naverClientId);
  myHeaders.append("X-Naver-Client-Secret", naverClientSecret);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as RequestRedirect
  };

  fetch("https://openapi.naver.com/v1/search/shop.json?query=강아지&display=10", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  return (
    <>
      home
    </>
  );
}
