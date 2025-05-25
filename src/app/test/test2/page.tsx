import Image from "next/image"

interface Props {
    params:Promise<any>
    searchParams:Promise<{movie:string}>
}

export default async function Page({searchParams}:Props) {
    const x =  await searchParams    
    console.log(x)
return <>hello world,

<h1>Hadoken</h1>
<Image alt="tttt" src={'https://raw.githubusercontent.com/pmndrs/zustand/HEAD/docs/bear.jpg'} width={250} height={250}/>
<Image alt="ttt" src={'https://pohcdn.com/sites/default/files/styles/paragraph__text_gallery__tg_image_2/public/text_gallery/Kuwait-city-3.jpg'} width={350} height={350}/>
 {x.movie}
 </>
}   