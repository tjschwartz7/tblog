import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Left from '../components/leftbox'
import Right from '../components/rightbox'
import styles from '../styles/Home.module.css'
import json from '../public/blogs.json'
import { getSortedBlogsData } from '../lib/Blogs'



export default function Blogs(props){
const { getSortedBlogsData } = props;
var suffix = '.json';

  return(<>
    <Head>
      <title>TBlog</title>
      <meta name='keywords' content='Computer Science, programming, projects'/>
    </Head>
    <Nav></Nav>

<div style={{width:"100%", display:"flex", "background-color":"DarkSlateBlue"}}>
<Left></Left>
<div style={{width:"50%",height:"100vh", backgroundColor:"white",border:"3px solid black", "id":"links", marginTop:"2vh", marginBottom:"2vh"}}>
<h1 style={{textAlign:"center"}}>TBlogs</h1>
<h2 style={{textAlign:"center"}}>Links</h2>
<div className={styles.grid}>
{props.allBlogData.map(({ id, title, data }) => (
  <div key={id} className={styles.card}>
  <Link href={"/blogs/"+id}>
  <h2 style={{marginLeft:"2vw"}}>{title}</h2>
  </Link>
  </div>

))}
</div>
</div>
<Right></Right>

</div>

    </>


  )
}


export async function getStaticProps() {
  const allBlogData = getSortedBlogsData();
  return {
    props: {
      allBlogData
    }
  }
}
