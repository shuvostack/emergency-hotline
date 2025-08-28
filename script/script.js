

// function to get inner text
// function getElement(id) {
//     const element = document.getElementById(id);
//     const elementValue = element.innerText;
//     const elementValueNumber = Number(elementValue);

//     return elementValueNumber;
// }

// function getElement(id) {
//     const element = document.getElementById(id);
//     return element;


// --------- love button functionality ------------

// love btn 1
document.getElementById('love-btn-1')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 2
document.getElementById('love-btn-2')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 3
document.getElementById('love-btn-3')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 4
document.getElementById('love-btn-4')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 5
document.getElementById('love-btn-5')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 6
document.getElementById('love-btn-6')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 7
document.getElementById('love-btn-7')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 8
document.getElementById('love-btn-8')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++

            availableLove.innerText = availableLoveNumber;
})


// love btn 9
document.getElementById('love-btn-9')
        .addEventListener('click', function(){
            const availableLove = document.getElementById('available-love');
            let availableLoveNumber = Number(availableLove.innerText);
            // console.log(availableLoveNumber);

            availableLoveNumber++;

            availableLove.innerText = availableLoveNumber;
})



// call button functionality
document.getElementById('call-btn-1')
        .addEventListener('click', function(){
            const availableCoin = document.getElementById('available-coin');
            let availableCoinNumber = Number(availableCoin.innerText);

            if (availableCoinNumber >= 20) {
                alert('📞 Calling National Emergency Service 999...');
                availableCoinNumber = availableCoinNumber - 20;
                availableCoin.innerText = availableCoinNumber;

                
            }

            else {
                alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
            }

            
        })