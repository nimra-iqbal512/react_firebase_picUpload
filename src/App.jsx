import { useState, useEffect } from "react";
import { storage } from "./config";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

const App = () => {
  const [img, setImg] = useState('')
  const [imgUrl, setImgUrl] = useState([])

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(storage, `UniLogoFiles/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        
        getDownloadURL(value.ref).then(url => {
          setImgUrl(data => [...data, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(ref(storage, "UniLogoFiles")).then(imgs => {
      const promises = imgs.items.map(val => getDownloadURL(val));
      Promise.all(promises).then(urls => {
        setImgUrl(urls); // Set all URLs at once — no duplicates
      });
    });
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
