import { useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'

let clickHandler = () => {
   Swal.fire({
    title: 'Are you sure?',
    text: "You want to give up?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#5B5B5B',
    cancelButtonColor: '#11A410',
    confirmButtonText: 'Yes, start a new game.',
    cancelButtonText: "No, I'll keep trying.",
    allowOutsideClick: false, // ปิดการทำงานของปุ่มกดที่พื้นหลัง
    allowEscapeKey: false, // ปิดการทำงานของปุ่ม ESC
    showCloseButton: false, 
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  })
}


function Nav() {
    let [num, setNum] = useState(0);
  return (
  

<nav class="navbar navbar-dark nv">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="/assets/logo1.png" alt="" width="50" height="50" class="d-inline-block align-text-top IMG">
        </img>
    <p class="TEXT-Brand"> &nbsp;Numbers Guessing</p>
    </a>
    <form class="d-flex">
    <span class="navbar-text">
      <a onClick={clickHandler}>
        New Game
        </a>
    </span>
    </form>
  </div>
</nav>
  );
}


export default Nav
