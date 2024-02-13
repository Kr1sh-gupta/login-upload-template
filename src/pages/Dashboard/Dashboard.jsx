import React from 'react'
import { useState } from 'react'

const Dashboard = () => {
  const [ file, setFile] = useState()

        function handleFile(event) {
            setFile(event.target.files[0])
                  // console.log(event.target.files[0])
        }
        function handleUpload(){
            const formData = new FormData()
            formData.append('file', file)
            fetch(
                  'url',
                  {
                    method: "POST", 
                    body: formData

                  }
            ).then((response) => response.json())
            .then(
                  (result) => {
                    console.log('success', result)
                  }
            )
        .catch(error =>{
              console.error("Error:", error)

        })
      }
  return (
    <div className="wrapper">
      <h1>Upload File in React Js</h1>
      <form onsubmit={handleUpload}>
          <input type="file" name="file" onChange={handleFile}/>
          <br />     <br />
          <button>Upload</button>

      </form>
      </div>
  )
}

export default Dashboard