import { useRouter } from 'next/router'

import Head from 'next/head'
import Nav from '../../components/Nav'
import Left from '../../components/leftbox'
import Right from '../../components/rightbox'
import styles from '../../styles/Home.module.css'

export default function Blog({ blog }){
  const router = useRouter()
  const { id } = router.query

  return (<>
    <Head>
      <title>{blog.title}</title>
    </Head>

<Nav></Nav>

<div style={{width:"100%", display:"flex", "background-color":"DarkSlateBlue"}}>
<Left></Left>
<div style={{width:"50%",height:"100vh", backgroundColor:"white",border:"3px solid black", "id":"links", marginTop:"2vh", marginBottom:"2vh"}}>
<h1 style={{textAlign:"center"}}>{blog.header}</h1>
<p style={{textAlign:"center"}}>{blog.text}</p>
</div>
<Right></Right>

</div>





  </>)
}

export async function getStaticProps({ params }){
  const req = await fetch('https://tblog-303bkwb0i-tjschwartz7.vercel.app/'+params.id+'.json');
  const data = await req.json();

  return{
    props: {blog: data},
  }
}

export async function getStaticPaths(){
  const req = await fetch('https://tblog-303bkwb0i-tjschwartz7.vercel.app/blogs.json');
  const data = await req.json();

  const paths = data.id.map(blog => {
    return { params: { id: blog.toString() } }
  })

  return {
    paths,
    fallback: false
  }
}
