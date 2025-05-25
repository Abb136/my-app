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
 {x.movie}</>
}   