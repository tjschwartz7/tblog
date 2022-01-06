
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `http:/localhost:3000/${src}?w=${width}&q=${quality || 75}`
}


const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="image2.jpg"
      alt="Background"
      width={500}
      height={500}
    />
  )
}

const Left = () => {
  const myStyle={
        width:'25%',
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
  return (
<div style={myStyle}></div>
  )
}

export default Left
