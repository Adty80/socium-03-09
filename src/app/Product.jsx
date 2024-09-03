import React from 'react'
import ThreeSixty from 'react-360-view';


const Product = () => {
  return (
    <div className='' style={{width:'40%' ,height:'80%', border:'1px solid black',position:'relative'}}>
<ThreeSixty
    amount={36}
    imagePath="./i-2.webp"
    fileName="chair_{index}.jpg?v1"
/>
</div>
  )
}

export default Product