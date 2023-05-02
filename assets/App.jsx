import { useState, useRef, useEffect } from 'react'
import './App.css'
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



let nums = [];
while (nums.length < 4) {
  const randomNum = parseInt(Math.random() * 10);
  if (!nums.includes(randomNum)) {
    nums.push(randomNum);
  }
}

console.log(nums);


let Sarr = nums.map(String);

let count = 0;
let indeX1 = 0;
let indeX2 = 1;
let indeX3 = 2;
let indeX4 = 3;


function App() {
  // console.log("Ans : ", Sarr);


  let [inputs, setInputs] = useState(["", "", "", ""]);
  let [data, setData] = useState([]);
  let [Posi, setPosi] = useState([]);
  let [Corect, setCorect] = useState([]);




  let handleInputChange = (index, event) => {
    let value = event.target.value;
    if (value.length > 1) {
      event.target.value = value.slice(0,1); // ตัดตัวอักษรที่เกินออก
      value = value.slice(0,1);
    }
    let values = [...inputs];
    values[index] = value;
    setInputs(values);
    console.log("var : ",values);
    let countinput = 0;
    for (let i = 0 ; i < 4; i++) {
      if (values[i] !== "") {
        countinput++;
      }
    }
    if (index < 3 && value !== "") {
      event.target.nextSibling.focus();
    }
  };


  
  let checkInputs = () => {
    return inputs.every((input) => input !== "");
  };

  function handleKeyPress(event) {
    event.preventDefault();
  }




  let handleSubmit = (event) => {
    event.preventDefault();
    let newData = [...data, ...inputs];
    setData(newData);
    setInputs(["", "", "", ""]);
    let firstInput = document.getElementById("input-0");
    firstInput.focus();
    console.log(newData);
    count++;
    let Guess = [newData[indeX1], newData[indeX2], newData[indeX3], newData[indeX4]];
    let numPosi = 0;
    let numCorect = 0;

    for (let i = 0; i < 4; i++) {
      if (Sarr.includes(Guess[i])) {
        numCorect++;
      }
      if (Sarr[i] === Guess[i]) {
        numPosi++;
      }
    }



    indeX1 = indeX1 + 4;
    indeX2 = indeX2 + 4;
    indeX3 = indeX3 + 4;
    indeX4 = indeX4 + 4;
    Corect.push(numCorect);
    Posi.push(numPosi);

    if (numPosi === 4 && numCorect === 4) {
      Swal.fire({
        title: 'You Win!',
        text: "The number is : " + Sarr.join(""),
        icon: 'success',
        confirmButtonColor: '#52B05F',
        confirmButtonText: 'New Game',
        allowOutsideClick: false, // ปิดการทำงานของปุ่มกดที่พื้นหลัง
        allowEscapeKey: false, // ปิดการทำงานของปุ่ม ESC
        showCloseButton: false, // ปิดการทำงานของปุ่ม X
        onBeforeOpen: () => {
          const title = Swal.getTitle();
          title.style.color = "#000"; // เปลี่ยนสีตัวอักษรใน Sarr เป็นสีดำ
          title.style.fontWeight = "bold"; // เปลี่ยนรูปแบบของตัวอักษรใน Sarr เป็นตัวหนา
        }
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });


    }
    else {
      if (count === 10) {
        Swal.fire({
          title: 'You Lose!',
          text: "The number is : " + Sarr.join(""),
          icon: 'error',
          confirmButtonColor: '#11A410',
          confirmButtonText: 'New Game',
          allowOutsideClick: false, // ปิดการทำงานของปุ่มกดที่พื้นหลัง
          allowEscapeKey: false, // ปิดการทำงานของปุ่ม ESC
          showCloseButton: false, // ปิดการทำงานของปุ่ม X
          onBeforeOpen: () => {
            const title = Swal.getTitle();
            title.style.color = "#000"; // เปลี่ยนสีตัวอักษรใน Sarr เป็นสีดำ
            title.style.fontWeight = "bold"; // เปลี่ยนรูปแบบของตัวอักษรใน Sarr เป็นตัวหนา
          }
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      }
    }

  };



  if (data[0]) {
    let elementToColor = document.getElementById('hide-box1');
    let elementToColor2 = document.getElementById('hide-box2');
    let elementToColor3 = document.getElementById('hide-box3');
    let elementToColor4 = document.getElementById('hide-box4');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[4]) {
    let elementToColor = document.getElementById('hide-box5');
    let elementToColor2 = document.getElementById('hide-box6');
    let elementToColor3 = document.getElementById('hide-box7');
    let elementToColor4 = document.getElementById('hide-box8');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[8]) {
    let elementToColor = document.getElementById('hide-box9');
    let elementToColor2 = document.getElementById('hide-box10');
    let elementToColor3 = document.getElementById('hide-box11');
    let elementToColor4 = document.getElementById('hide-box12');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[12]) {
    let elementToColor = document.getElementById('hide-box13');
    let elementToColor2 = document.getElementById('hide-box14');
    let elementToColor3 = document.getElementById('hide-box15');
    let elementToColor4 = document.getElementById('hide-box16');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[16]) {
    let elementToColor = document.getElementById('hide-box17');
    let elementToColor2 = document.getElementById('hide-box18');
    let elementToColor3 = document.getElementById('hide-box19');
    let elementToColor4 = document.getElementById('hide-box20');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[20]) {
    let elementToColor = document.getElementById('hide-box21');
    let elementToColor2 = document.getElementById('hide-box22');
    let elementToColor3 = document.getElementById('hide-box23');
    let elementToColor4 = document.getElementById('hide-box24');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[24]) {
    let elementToColor = document.getElementById('hide-box25');
    let elementToColor2 = document.getElementById('hide-box26');
    let elementToColor3 = document.getElementById('hide-box27');
    let elementToColor4 = document.getElementById('hide-box28');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[28]) {
    let elementToColor = document.getElementById('hide-box29');
    let elementToColor2 = document.getElementById('hide-box30');
    let elementToColor3 = document.getElementById('hide-box31');
    let elementToColor4 = document.getElementById('hide-box32');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[32]) {
    let elementToColor = document.getElementById('hide-box33');
    let elementToColor2 = document.getElementById('hide-box34');
    let elementToColor3 = document.getElementById('hide-box35');
    let elementToColor4 = document.getElementById('hide-box36');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';
  }

  if (data[36]) {
    let elementToColor = document.getElementById('hide-box37');
    let elementToColor2 = document.getElementById('hide-box38');
    let elementToColor3 = document.getElementById('hide-box39');
    let elementToColor4 = document.getElementById('hide-box40');
    elementToColor.style.backgroundColor = '#66CDAA';
    elementToColor2.style.backgroundColor = '#66CDAA';
    elementToColor3.style.backgroundColor = '#66CDAA';
    elementToColor4.style.backgroundColor = '#66CDAA';

  }
 
  

  return (

    <div>
      <div class="app">
        <div class="container">
          <div class="row justify-content-md-center head" align="center">
            <div class="col-1 round" align="center">Round</div>
            <div class="col-4 Guess" align="center">Guess Numbers</div>
            <div class="col-1 Numbers" align="center">Number</div>
            <div class="col-1 Position" align="center">Position</div>
          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="1" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box1" type="text" value={data[0]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box2" type="text" value={data[1]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box3" type="text" value={data[2]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box4" type="text" value={data[3]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[0]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[0]} onKeyPress={handleKeyPress} />

          </div>
          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="2" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box5" type="text" value={data[4]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box6" type="text" value={data[5]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box7" type="text" value={data[6]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box8" type="text" value={data[7]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[1]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[1]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="3" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box9" type="text" value={data[8]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box10" type="text" value={data[9]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box11" type="text" value={data[10]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box12" type="text" value={data[11]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[2]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[2]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="4" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box13" type="text" value={data[12]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box14" type="text" value={data[13]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box15" type="text" value={data[14]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box16" type="text" value={data[15]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[3]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[3]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="5" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box17" type="text" value={data[16]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box18" type="text" value={data[17]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box19" type="text" value={data[18]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box20" type="text" value={data[19]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[4]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[4]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="6" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box21" type="text" value={data[20]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box22" type="text" value={data[21]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box23" type="text" value={data[22]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box24" type="text" value={data[23]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[5]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[5]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="7" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box25" type="text" value={data[24]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box26" type="text" value={data[25]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box27" type="text" value={data[26]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box28" type="text" value={data[27]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[6]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[6]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="8" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box29" type="text" value={data[28]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box30" type="text" value={data[29]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box31" type="text" value={data[30]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box32" type="text" value={data[31]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[7]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[7]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="9" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box33" type="text" value={data[32]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box34" type="text" value={data[33]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box35" type="text" value={data[34]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box36" type="text" value={data[35]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[8]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[8]} onKeyPress={handleKeyPress} />

          </div>

          <div class="row justify-content-md-center">
          <input class="col-1 ans-box" type="text" value="10" onKeyPress={handleKeyPress} />
            <div class="col-4 mini">
              <input class="hide-box" id="hide-box37" type="text" value={data[36]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box38" type="text" value={data[37]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box39" type="text" value={data[38]} onKeyPress={handleKeyPress} />
              <input class="hide-box" id="hide-box40" type="text" value={data[39]} onKeyPress={handleKeyPress} />
            </div>
            <input class="col-1 ans-box" type="text" value={Corect[9]} onKeyPress={handleKeyPress} />
            <input class="col-1 ans-box" type="text" value={Posi[9]} onKeyPress={handleKeyPress} />

          </div>

        </div>
      </div>

      <div class="bottomnav">
        <nav class="bottom navbar-dark bg-dark Navbot" align="center">
          <div class="container">
            <form onSubmit={handleSubmit}>
              <div class="row justify-content-md-center inpuT" align="center">
<input pattern="[0-9]*" class="col-1 input-box" id="input-0" type="number" value={inputs[0]} maxLength={1} onChange={(e) => handleInputChange(0, e)}/>
<input pattern="[0-9]*" class="col-1 input-box" type="number" value={inputs[1]} maxLength={1} onChange={(e) => handleInputChange(1, e)}/>
<input pattern="[0-9]*" class="col-1 input-box" type="number" value={inputs[2]} maxLength={1} onChange={(e) => handleInputChange(2, e)}/>
<input pattern="[0-9]*" class="col-1 input-box" type="number" value={inputs[3]} maxLength={1} onChange={(e) => handleInputChange(3, e)}/>

              </div>
              <div class="row justify-content-md-center">
                <button class="Btn col-1" type="submit" id="submit" disabled={!checkInputs()}>Check</button>
              </div>
            </form>
            <div class="row justify-content-md-center">
              <div class='col-5'>
                <img class="pic" width="500px" height="500px" src='/assets/mypic.jpg'></img>
                <h1><strong>Worawiboon Mungmee</strong></h1>
              </div>
            </div>
            <div class="row justify-content-md-center">
              <div class="col icon">
                <a href="https://www.facebook.com/ohmmy.worawiboon56789/"><BsFacebook /></a>
              </div>
              <div class="col icon ig">
                <a href="https://www.instagram.com/ohm._.my/"><BsInstagram /></a>
              </div>
              <div class="col icon git">
                <a href="https://github.com/Ohmmy569"><BsGithub /></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App

