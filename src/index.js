//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

//RULE JSC yg perlu diingat
//1 smua harus 1 kluraan div ,dan haay ada 1 kembalian  kalau banyak div atau kalang tag
//kembalianjika banya bisa dipakai React.Fragment atau cukup tulis <> </> sbgai kalang penutup

//utk cssnya didalam jsx maka dari class berubah dgn className="bla bla"
//utk atribute css penggunaanya camelClase
//pentup tag boleh sebarang div.article/section /Fragment sprti diatas
//utk format bisa begni
/*
 return <div> </div>  //ini harus ada diseblaj kana tag utk tag pmbuka 
                      //kalau tidak dia error
 atau return pakai kurung /parentheses
 return (
   <div> </div>
 )


*/

//ini component yg dikembalikan
function MyComponent() {
  return (
    <div>
      <h1>hello ini cara pakai React.createElement</h1>
    </div>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById("root"))
