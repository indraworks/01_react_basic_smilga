//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

//kita refactoryg tadi dari firstBook= {elementObject} secondBook ={elementObject}
/* mejadi bookdata = [{eleemnt},{element}]
kita jadikan array list object artinya deretan arry yg didalamnya adalah object diaas
nah setlahnya kita akan masukan keprops lha tentu saja gak bisa kita beri contoh dulu 
jika array biasa kita masukan ke props dgn cara map 




*/
const Names = ["indra", "summy", "chica", "husnul"]
const bookdata = [
  {
    Title: "Mrah Putih Indonesia",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg",
    Author: "Cindy Patikasari",
  },
  {
    Title: "Penjual Jamu",
    Image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg",
    Author: "BronxBronx",
  },
]

const Booklist = () => {
  return (
    <section className='booklist'>
      {/* memasukan BookDAta
       */}
      {bookdata.map((book) => {
        return (
          <>
            <h1>{book.Title}</h1>
            <h1>{book.Author}</h1>
            <h1>{book.Image}</h1>
          </>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { title, image, author, children } = props

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

/* latihan 1 
pada contoh pertama saya merender utk smua isi dari array object yg ada di boookData
saya menampilkan hanya nama saja 
const Booklist = () => {
  return (
    <section className='booklist'>
    
      {bookdata.map((book) => {
        return <h1>{book.Title}</h1>
      })}
    </section>
  )
}
dan diatas return() code saya buat destructing utk  bookData jadi bisa
langusng panggil element value tanpa harus 

*/

/*
Latihan 2 :
disini say arender smua isi data  tersbut  
sehingga yg kluar adalah text2 yg ada di bookdata 
nah sblumnya saya punya component Book dimana 
meruakan jsx dimana  saya mau buat format saya dlayar individunya 
dimasukan ke dalam Book component property 
jadi saya harus pasing  props ke Book  nah bisa dilihat dilatihah 3
const Booklist = () => {
  return (
    <section className='booklist'>
     
      {bookdata.map((book) => {
        return (
          <>
            <h1>{book.Title}</h1>
            <h1>{book.Author}</h1>
            <h1>{book.Image}</h1>
          </>
        )
      })}
    </section>
  )
}


*/

/*
pada latiha3 saya mau pakai Book component utk render tampilan 
bookdata array object,
nah ini dia pointnya karena prop itu meupaka objecc dgn element  props = {element} 
utk sekarang kita tahu props ={title,img,author } 







*/
