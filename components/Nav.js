import { useRouter } from 'next/router'


const Nav = () => {
  const router = useRouter()
  return (
    <div style={{display:"flex",width:"100vw", 'background-color':"black"}}>
    <div style = {{width:"auto", "margin-left":"20px"}}><p style = {{color:"white"}}><a href={'tblog.vercel.app'}>Home</a></p></div>
    <div style = {{width:"auto", "margin-left":"20px"}}><p><a  href={'tblog.vercel.app'} style = {{color:"white"}}>Blogs</a></p></div>
    </div>
  )
}

export default Nav
