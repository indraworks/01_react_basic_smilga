//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
/*
kita buat jadi 1 dan kita mengerti apa itu props 
yaitu sama dgn parameter tapi props itu bentu dirinya sebgai paramerer object
nnti kita lihat nah skgn kita refactor ini jadi 1 masing2
Book utk semua function component dibawah nah 
nah perlu diiingaar jadi catatan utk 
tanya bagaimana menulis java script di bagian jsx?
atau bagaimana mmbuat variable dlm jsx 
nah gini keynya kuncinya haris berada dalam tanda brace /kurung kurawal
{ }
nah misalkan yg dalam kururn adalah operasi asignment variable maka dia harus [unya nilai bali 
conto :
 return ( 
    {const nil ="2" 
     console.log(nil)
    return nil }

 )


*/

const Booklist = () => {
  var r = ""
  const mystatement = "hello good morning"
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      {(r = 2)}
      {2 + 2}
      {console.log(r)}
      <h1>{mystatement}</h1>
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
