interface Props{
    children:React.ReactNode
}
export default function Layout({children}:Props) {
return <>{children}
<br></br>
 <a href='/'>test</a>
 </>
}