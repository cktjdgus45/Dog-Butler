import { client } from '@/service/sanity';

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

  fetch("https://openapi.naver.com/v1/search/shop.json?query=강아지&display=100", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      result.items.forEach((item: { title: any; link: any; image: any; lprice: string; hprice: string; mallName: any; productId: any; productType: any; brand: any; maker: any; category1: any; category2: any; category3: any; category4: any; }) => {
        const product = {
          _type: 'product', // this should match your schema type
          title: item.title.replace(/<b>|<\/b>/g, ' '),
          link: item.link,
          image: item.image,
          lprice: parseInt(item.lprice),
          hprice: parseInt(item.hprice),
          mallName: item.mallName,
          productId: item.productId,
          productType: item.productType,
          brand: item.brand,
          maker: item.maker,
          category1: item.category1,
          category2: item.category2,
          category3: item.category3,
          category4: item.category4,
        }

        client.create(product).then(res => {
          console.log(`Product was created, document ID is ${res._id}`)
        }).catch(err => {
          console.error('Oh no, error occured: ', err.message)
        })
      })
    })
    .catch((error) => console.error(error));

  return (
    <>
      home
    </>
  );
}
