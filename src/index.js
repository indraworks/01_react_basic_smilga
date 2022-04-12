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

  return (
    <section className='booklist'>
      <Book
        title={firstBook.Title}
        image={firstBook.Image}
        author={firstBook.Author}
      />
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
const Book = ({ title, image, author }) => {
  //const { title, image, author } = props //descturcting utk jsx
  //bisa langsung diatas parameter ({prop})
  //console.log("props =", props)

  return (
    <article className='book'>
      <img src={image} alt='bookFavorite01' />

      <h1 className='mytitle'>{title}</h1>
      <h4 className='myauthor'> {author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"))

/*
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
