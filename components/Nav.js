import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {
  const router = useRouter()
  return (
    <div style={{display:"flex",width:"100vw", backgroundColor:"black"}}>
    <div style = {{width:"auto", marginLeft:"20px"}}><p style = {{color:"white"}}><Link href="/"><a>Home</a></Link></p></div>
    <div style = {{width:"auto", marginLeft:"20px"}}><p style = {{color:"white"}}><Link href="/"><a>Blogs</a></Link></p></div>
    </div>
  )
}

export default Nav
