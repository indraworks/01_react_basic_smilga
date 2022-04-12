//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

/*Tentang Props
kita buat jadi 1 dan kita mengerti apa itu props 
yaitu sama dgn parameter tapi props itu bentu dirinya sebgai paramerer object
nnti kita lihat nah skgn kita refactor ini jadi 1 masing2
jadi kalau pada books function itu parameter props di print atau di console.log
maka hasilnya adalah sbuah object { }
nah sekarang compinent book ini akan kita buat atau isidari Booklis 
masing2 kita lewatkan paraneter sbb:
jika kita isi salah 1  <Book title =
 )

*/

const Booklist = () => {
  const Title = "Hello Indra"
  const Image =
    "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg"
  const Author = "Cindy Patikasari"

  return (
    <section className='booklist'>
      <Book title={Title} image={Image} author={Author} />
    </section>
  )
}

//props imi adalah parameter yg bertype data object
//isi element obejctnya terserah bisa aray,bisa variable biasa etc!
const Book = (props) => {
  console.log(props)
  /*
    hasil console.log(props)
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

  return (
    <article className='book'>
      <img src={props.image} alt='bookFavorite01' />
      <h1>{props.title}</h1>
      <h4> {props.author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"))
