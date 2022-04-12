//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const Booklist = () => {
  //kita refacor data2 jadi nama book dgn object propertes didalamnya
  const firstBook = {
    Title: "Mrah Putih Indonesia",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg",
    Author: "Cindy Patikasari",
  }
  const secondBook = {
    Title: "Penjual Jamu",
    Image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg",
    Author: "BronxBronx",
  }

  //latihan pneggunaan props.children
  return (
    <section className='booklist'>
      <Book
        title={firstBook.Title}
        image={firstBook.Image}
        author={firstBook.Author}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
        voluptate!
      </Book>
      <Book
        title={secondBook.Title}
        image={secondBook.Image}
        author={secondBook.Author}
      />
    </section>
  )
}

//props imi adalah parameter yg bertype data object
//isi element obejctnya terserah bisa aray,bisa variable biasa etc!
//const Book = ({ title, image, author, children }) => {
const Book = (props) => {
  const { title, image, author, children } = props

  //const { title, image, author } = props //descturcting utk jsx
  //bisa langsung diatas parameter ({element dari object props})
  //console.log("props =", props)
  console.log("props =", props)
  return (
    <article className='book'>
      <img src={image} alt='bookFavorite01' />

      <h1 className='mytitle'>{title}</h1>
      <h6>{children}</h6>
      <h4 className='myauthor'> {author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"))

/*
props children apa ini ?? nah ini dia dia itu adalah merupakan 
sbuah property paramter yg berada di dalam tag2 yg akan dimasuki 
parameter di jsx componentn 
pada contoh diatas kita punya jxsx cmponent Book kita masukan
nilai param mis title,author,img kedalam jsx componet lewat props
nah ini kan dari external nah si children ini dia builtin ada dalam rpops

kalaiu kita mau masukan maka dia harus berada di tengah apit dari tag2 jsx componetn
contoh diatas mis <Book title={Title} author={Author} img={Image}> nah sichilden doinsi tempatnya!   </Book>
nah sichilder harus berada diapit 
kit amenpyebutnya props anak atau props children namanya builtin 
jadi bia dconsole.log jadi akan keluar 2 object 1 log,utk props parameter (title,img,author)
nahutk childrennya kita tulis sama namanya children 
<Book> hai children </Bok>

nah dari BookLis =()=> {
  <Book title={Title} author={Author} img={Image}> <p>Lorem</p><Book>
}

                                       | ini jangan lupa dimaskan sbgai param ( childrenya)
nah pada Book =({img,title,author,children})=> {return ()}
nah kalau yg biasa bisa juga ditulis



Book =(props)=> {
  
  return (

    {children}  <---janga lupa penulisanya harus tanda kurung kurawal 
    //krn dia berada dalam jsx terserah kalau penempatanya bebas saja 
    // didalam jsx mau diatas dibawah tengah kiri  kanan gak msalah terserah yg punya web!

  )}

  nah nulis chidlrennya terserah diwiayah jsx ,mau ditas di bawah ata u kiri kanan terserah 
  {{children}} atau {{props.children }}

  diatas sengaja pake destucto ug laa 
  const {} = props 
  nah diconsole.log(props) isinya pada console.log:
  author: "Cindy Patikasari"
children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, voluptate!"
image: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg"
title: "Mrah Putih Indonesia"
jadi si children ini builtini didalam props jadi dia parameter ini namany fix
dia mesti diapit oleh tag maka disebut props.children



*/

/*
note:
 const Book = (props) => {
  const { title, image, author } = props //descturcting utk jsx
  
  console.log("props =", props)
   hasil llog tetap sama jadi propnya berupa object dgn element2 ygpunya ilai 
   

*/

/*
2) stlah kita tahu bahwa props adalah property parameter yg berupa object
dimana ada banyak atau boleh element2 dibawahnya maka kita mau test kalau kita destructing  gimana 
diatas props berisi ketika dilwatkan ke Book 
 <Book title={Title} image={Image} author={Author} />
 maka props = { author: "Cindy Patikasari"
      image: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg"
      title: "Hello Indra" }
 nah kita panggil di dalam jsx  props.title maka hasil adalah "hello Indra" 
 nah kita mau skgn destucting tanpa mesti harus panggil props depanya di depan diaas retun kitaberi 
  key kita jadikan desctructing biar langsung panggil isinya 
 const {author,image,title} = props
      

*/

/*
   1) hasil console.log(props)
       {author: "Cindy Patikasari"
      image: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg"
      title: "Hello Indra" }
      jadi dari atas ini dinawah ini 
      <Book title={Title} image={Image} author={Author} />

      jadi title ,image,author  ini masuk melalui props parameter
       props = {author: "Cindy Patikasari"
      image: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg"
      title: "Hello Indra"}
      karena props meruplkan object param atau property param berbentuk object 
     
      jadi param props itu smacam object param nah elemet2 ini 
      yg maduk ke sana dan nnt dipangil utk dirender 
         props = {key1:value1,key2:value2 ..dst}
         nah kalau panggil isi key1 maka 
         props.key1 --->isinya adalah value1 
         props.key2 --->isinya adalah value2

     
      */
