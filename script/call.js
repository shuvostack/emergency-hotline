
// ------- call button functionality ------------
 

 const historyData = [];

// call button 1 
document.getElementById("call-btn-1").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling National Emergency Service 999...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "জাতীয় জরুরি সেবা",
      number: "999",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});





// call button 2
document.getElementById("call-btn-2").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling পুলিশ 999...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "পুলিশ",
      number: "999",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 3
document.getElementById("call-btn-3").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling ফায়ার সার্ভিস 999...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "ফায়ার সার্ভিস",
      number: "999",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});



// call button 4
document.getElementById("call-btn-4").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling অ্যাম্বুলেন্স 1994-999999...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "অ্যাম্বুলেন্স",
      number: "1994-999999",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 5
document.getElementById("call-btn-5").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling নারী ও শিশু সহায়তা 109...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "নারী ও শিশু সহায়তা",
      number: "109",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 6
document.getElementById("call-btn-6").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling দুদক 106...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "দুদক",
      number: "106",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 7
document.getElementById("call-btn-7").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling বিদ্যুৎ বিভ্রাট 16216...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "বিদ্যুৎ বিভ্রাট",
      number: "16216",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 8
document.getElementById("call-btn-8").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling ব্র্যাক 16445...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "ব্র্যাক",
      number: "16445",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});




// call button 9
document.getElementById("call-btn-9").addEventListener("click", function () {
  const availableCoin = document.getElementById("available-coin");
  let availableCoinNumber = Number(availableCoin.innerText);
 
  const historyContainer = document.getElementById("history-container");
  

  if (availableCoinNumber >= 20) {
    alert("📞 Calling বাংলাদেশ রেলওয়ে 163...");
    availableCoinNumber = availableCoinNumber - 20;
    availableCoin.innerText = availableCoinNumber;


    // for history
      const history = {
      name: "বাংলাদেশ রেলওয়ে",
      number: "163",
      date: new Date().toLocaleTimeString()
    };

    historyData.push(history);

    historyContainer.innerHTML = "";

    for (const h of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between mb-2 items-center bg-[#F2F2F2] min-w-[100px] h-[65px] px-3 rounded-lg">
              <div>
                <h2 class="text-lg">${h.name}</h2>
                <p>${h.number}</p>
              </div>

              <div class="text-sm">
                ${h.date}
              </div>
            </div>
                    `;
                    historyContainer.appendChild(div);
    }
  } else {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
});


