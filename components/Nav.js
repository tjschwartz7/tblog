
const Nav = () => {
  return (
    <div style={{display:"flex",width:"100vw", 'background-color':"black"}}>
    <div style = {{width:"auto", "margin-left":"20px"}}><p style = {{color:"white"}}><a href="http://localhost:3000/home/">Home</a></p></div>
    <div style = {{width:"auto", "margin-left":"20px"}}><p><a  href="http://localhost:3000/blogs/" style = {{color:"white"}}>Blogs</a></p></div>
    </div>
  )
}

export default Nav
