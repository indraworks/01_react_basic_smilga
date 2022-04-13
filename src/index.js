//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

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
        return <Book key={item.Id} {...item} />
      })}
    </section>
  )
}

const Book = ({ Title, Image, Author }) => {
  //reference dluar retrun/ jsx dan panggil namanya
  const alertHai = () => {
    return alert("hai ini reference")
  }

  const myInvoke = (props) => {
    alert(`hai ini invoke function ${props}`)
  }

  return (
    <article className='book'>
      <img src={Image} alt='bookFavorite01' />

      <h1
        className='mytitle'
        // onMouseOver={() => alert("ini langsung direct inline function choi!")}
      >
        {Title}{" "}
      </h1>

      <h4 className='myauthor'> {Author}</h4>
      <button onClick={alertHai}>this reference</button>
      <div>
        <button onClick={() => myInvoke(Title)}>click Invoke</button>
      </div>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"))

/*
syarat utk sbuah event adalah :
1 adanya atribute ,eventHandler
2.pnggunaan camelcase utk functionya
3.//kita pakai contoh onClick , onMouseOver
bedanya apa function sebgai reference dan inline direct
10 kalau functio sebgai reference  maka
 functionya itu ada dluar jsx bisa dbuat di atas return(){}
 jadi diluar jsx ,sbb js ada dlm kalang return
 nah nnti tinggal panggil nama functionyanya contoh 
 kita buat button di jsx
 <Button onClick={doAlert}  > reference </Button>
 jadi jika sbgai reference hamya tnggal panggi nama unction diluar js
 const doAlert =()=> {
   alert("hello saya reference nich")
 }

//nah ada jug ayg inline langusng yaitu fucntionya tak renference
/tigernya degan anomius function
onMouseOver={()=>alert("ini langsung function choi")}



//INVOKE FUNCTION !yaitu funtion dengan passing paramter !
1.si function di tulis di luar jsx 
2.di invoke artinya si functiondipanggil dgn inline dan ditulis paramternya !
//nah ada jug ayg denga melwatkan parameter ATAU DENGAN PASS ARUGMENT
SYARATNYA APA??
nah mesti diketahui harus denga tanda krung {} calibrace dan harus dgn inline function 
gak boleh dgn reference saja jadi inline ya!!dan di pass argumentnya di function inlien ini!
contoh saya mau kluarkan props author jadi speicif percard kalau dgn refernce bahaya smuanya dikluarkan 
nilai2 taddi bukan tempat atau index sicard ini jadi skelalig lagi syaratnya 
harus dgn inline function dan paramternya ditulis !! 
dan jangan lupa boleh ditulis itu isifunctionya didalam inline tadi atau diluar 

contoh: ini ditulis di atas return 
  const passingProps =(Author)=> {
    alert( `hello ini passing ${Author}`)
  }

ini tulis dgn inline yg artinya invoke!
<Button onClick={()=>passingProps(Author)}
 



*/
