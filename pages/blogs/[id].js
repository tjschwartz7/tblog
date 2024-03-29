import { useRouter } from 'next/router'

import Head from 'next/head'
import Nav from '../../components/Nav'
import Left from '../../components/leftbox'
import Right from '../../components/rightbox'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

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
  //const req = await fetch('http://tblog.vercel.app/'+params.id);
  //`http://tblog.vercel.app/ ${params.id}`

  let data = [];
  let error = "";
  try {
    const res = await fetch(
      `${process.env['PUBLIC_URL']}/${params.id}.json`,
      {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
          Accept: "application/json; charset=UTF-8",
        },
      }
    );

    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);

    data = await res.json();

    if (isEmpty(data)) throw String("No data was found!");

  } catch (e) {
    error = e.toString();
  }

  return{
    props: {blog: data},
  }
}

export async function getStaticPaths(){
  //const req = await fetch('http://tblog.vercel.app/blogs');
  let thing = process.env['PUBLIC_URL'];
  let data = [];
  let error = "";
  try {
      const res = await fetch(
        `${thing}/blogs.json`,
        //'http://localhost:3000/blogs',
        {
          method: "GET",
          headers: {
            // update with your user-agent
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
            Accept: "application/json; charset=UTF-8",
          },
        }
      );

      if (res.status !== 200)
        throw String(`Invalid server response: ${res.status} ${res.statusText}`);

      data = await res.json();

      if (isEmpty(data)) throw String("No data was found!");

    } catch (e) {
      error = e.toString();
    }
  console.log(69);
  console.log(`${thing}/blogs.json`);
  console.log(5);
  console.log(data);
  const paths = data.id.map(blog => {
    return { params: { id: blog.toString() } }
  })

  return {
    paths,
    fallback: false
  }
}
