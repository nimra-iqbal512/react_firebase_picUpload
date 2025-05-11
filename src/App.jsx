import { useState } from "react";
import { storage } from "./config";
import {ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

const App = () => {
  const [img, setImg] = useState('')

  const handleClick = ()=>{
    const imgRef = ref(storage, `UniLogoFiles/${v4()}`)
    uploadBytes(imgRef, img)
  }

  return <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
    </div>;
};
export default App;
