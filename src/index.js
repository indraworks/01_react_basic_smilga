//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
/*
jadi kita buat buku list img source dari amazon 
nah utk masukan css kita buat file tersendiri 
utk css itu nama filenya harsu lengkap dengan eaxtensionnya 

*/

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <ImageBook />
      <Title />

      <Author />
    </article>
  )
}

const Title = () => <h1>This is very good book</h1>
const ImageBook = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg'
      alt='bookFavorite01'
    />
  )
}
const Author = () => <h4> Mr.Cooker</h4>

ReactDOM.render(<Booklist />, document.getElementById("root"))
