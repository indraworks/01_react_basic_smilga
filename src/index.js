//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

//kita refactoryg tadi dari firstBook= {elementObject} secondBook ={elementObject}
/*
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
      {/* kita latian dgn array biasa 
        terlihat muncul dilayar karena lansung array bisa di tampilkan
      */}
      {Names.map((name) => {
        return <h1>{name}</h1>
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
