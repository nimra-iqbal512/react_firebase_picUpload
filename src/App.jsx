import { useState, useEffect } from "react";
import { storage } from "./config";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

const App = () => {
  const [img, setImg] = useState('')
  const [imgUrl, setImgUrl] = useState([])

  const handleClick = ()=>{
    const imgRef = ref(storage, `UniLogoFiles/${v4()}`)
    uploadBytes(imgRef, img)
  }

  useEffect(() => {
    listAll(ref(storage, "UniLogoFiles")).then(imgs => {
      console.log(imgs);
      imgs.items.forEach(val => {
        getDownloadURL(val).then(url => {
          setImgUrl(data=>[...data, url])
        })
      })
    })
  }, []);

  

  return <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
      <br />
      {
        imgUrl.map(dataVal=><div>
          <img src={dataVal} height="200px" width="200px" />
          <br />
        </div>)
      }
    </div>;
};
export default App;
