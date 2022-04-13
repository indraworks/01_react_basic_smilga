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
    Id: 1,
    Title: "Mrah Putih Indonesia",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg",
    Author: "Cindy Patikasari",
  },
  {
    Id: 2,
    Title: "Penjual Jamu",
    Image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg",
    Author: "BronxBronx",
  },
  {
    Id: 3,
    Title: "Minyak goreng langka ",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    Author: "Indra Suryawan ",
  },
]

const Booklist = () => {
  return (
    <section className='booklist'>
      {/* memasukan BookDAta
       */}

      {bookdata.map((item) => {
        //const { Title, Image, Author } = item
        return (
          // <Book title={book.Title} image={book.Image} author={book.Author} />
          //<Book key={item.Id} book={item} />
          <Book key={item.Id} {...item} />
        )
      })}
    </section>
  )
}

const Book = ({ Title, Image, Author }) => {
  //const { Title, Image, Author } = props.book
  //nama book di props.book berasal dari variable params book dari: book={item} harus sama ini namanya!

  return (
    <article className='book'>
      <img src={Image} alt='bookFavorite01' />

      <h1 className='mytitle'>{Title}</h1>

      <h4 className='myauthor'> {Author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"))

/*Pencarahan utk spread operator  dan propsnya d Book function
nah diaas kita masukan props pada <Book /> compoent dgn 
 <Book key={item.Id} book={item} /> dengan Object nah ini  book ={item} kita ganti saja
 kita spread isi array diatas jadi 1 item kan isinya {id:1,Title:'bla',Author:'bla',Image:'bla}
 nah daripada saya tulis satu2 jadi object saya bisalangsung kluarkan dari object dgn peritnah 
  book={item} saya ganti jadi {...item }
  nah di bawah di Book Function propsnya nama mesti saama
  const Book =({Title,Author,Image})=> {

  }
//dan saaya udah gak perlu lagi pake destruction 
//const {Title,Author,Image} = props.item udah gake perlu lagi

lengkap linknya disini baik utk objec dan araray oeprasi spread operator:
https://www.w3schools.com/react/react_es6_spread.asp
jadi 


*/

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
nah ini dia pointnya karena prop itu meupaka objecc dgn element  props = {element} bookdata data
utk sekarang kita tahu props ={title,img,author } 

const Booklist = () => {
  return (
    <section className='booklist'>
      
      {bookdata.map((book) => {
        return (
          <Book title={book.Title} image={book.Image} author={book.Author} />
        )
      })}
    </section>
  )
}

nah hasilnya akan tampak speti yg seblumnya ada card cardnya ada 2 card 
dan cara isi insert propnya ke Book kita jalamka dgn isikan element2 object property kedalam 
paramter diatas ..
 <Book title={book.Title} image={book.Image} author={book.Author} />
 nah kita gak perlu tulis semua seperti diatas title={book.Title} image={book.Image} author={book.Author}
 nahkita bisa refactor kode diatas yatu diwakil dgn 1variable obhject 
 mis:
 <Book book= {book } <--nah book dikurung kurwal ini adalah object


*/

/*
latihan 4:
nah sekarang kita akan pakai desctruction jadi kan kita tahu bawah 
element obejct yg masuk prop sebelumnya nulis 1 1 sperti dibawah ini :
kita pasing paramter ke function Box dengan inject props melalui params
 title,image,author 
 nah mauna kit adalah cukup dng 1 buath variable yg mewakili  3 element object title,image,author
  old :    
<Book title={book.Title} image={book.Image} author={book.Author} />
  baru: <Book book={item}  /> nah kita tahu element item itu mewakili per index dari bookdata  per-index 
  yg mana di looping dikalang map bisa liat kodenya diatas
  yaitu :bookdata.map(item => {
    return <Book book={item}
  })
  item sendiri isinya :[{element},{element }]
  item[0]=  {
    Title: "Mrah Putih Indonesia",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL127_SR127,127_.jpg",
    Author: "Cindy Patikasari",
  }

  item[1] ={
    Title: "Penjual Jamu",
    Image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg",
    Author: "BronxBronx",
  }
jadi diaas item adalah paramter yg pasing ke map function 
nah supaya match dgn Book yg merupakan functoon yg mana nilai Title,Image,Author masuk ke paramya 
/props yg merupakan object utk itu kita kenalkan pada func Book ini 
nasepei kita ketahu yg namaya props adalah objec dimasna dala case ini element 
yg masuk param pada function Book adalah {Title,Image,Authot}
nah disini kita buat desctuctionya di fucntion Book tiga element object diatas 
akan diwakili dgn variable destructon bernama book 
const {Title,Image,Author } = props.book 

nah kita samakan sesua dgn ygada di booklist parameter yg  masuk kepropsnya bernama book 
<Book book={item} />   //liat book yg sebelah kiri  nah dia itu 
equal sama dgn yg ada di Book fucntion yaitu :

const {Title,Image,Author } = props.book  ~ jadi harus sama dng  book yg di loop map : <Book book={item>}
semoga ini bisa mencrahkan !
*/
