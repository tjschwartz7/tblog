import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../../components/Nav'
import Left from '../../components/leftbox'
import Center from '../../components/centerbox'
import Right from '../../components/rightbox'
import styles from '../../styles/Home.module.css'
import json from '../../public/blogs.json'
import { getSortedBlogsData } from '../../lib/Blogs'

export default function Blogs(props){
const { getSortedBlogsData } = props;
var prefix = 'http://localhost:3000/blogs/';
var suffix = '.json';

  return(<>
    <Head>
      <title>TBlog</title>
      <meta name='keywords' content='Computer Science, programming, projects'/>
    </Head>
    <Nav></Nav>

<div style={{width:"100%", display:"flex", "background-color":"DarkSlateBlue"}}>
<Left></Left>
<div style={{width:"50%",height:"100vh", "background-color":"white","border":"3px solid black", "id":"links", "margin-top":"2vh", "margin-bottom":"2vh"}}>
<h1 style={{"text-align":"center"}}>TBlogs</h1>
<h2 style={{"text-align":"center"}}>Links</h2>
<div className={styles.grid}>
{props.allBlogData.map(({ id, title, data }) => (
  <a href={prefix+id} className={styles.card}>
    <h2 style={{"margin-left":"2vw"}}>{title}</h2>
    <p>{data}</p>
  </a>

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
