import React from "react"


const App =() =>{
  const handleGet=() =>{
    //今回fetchを使ってHTTP通信を行う。
    //fetch(url)　=> GETのリクエストを行っている
    fetch("/api")
    // .thenでGETのリクエストに対するレスポンスが返ってくる
    .then(res=>res.json())　//レスポンスの形式をjson形式にしている（js形式で書ける）
    //.then(res=>{return res.json()})↑と同じ意味
    .then(res=>{
      //レスポンスに対する処理を書く
      console.log(res.msg)
    })
    //エラー処理.catch
    .catch(err=>{
      if (err) console.error(err)
    }) 
  } 
  const handlePost=() =>{

  }
  
  return(
    <>
      <button onClick={handleGet}>GET</button>
      <button onClick={handlePost}>POST</button>
    </>
  )
}

export default App