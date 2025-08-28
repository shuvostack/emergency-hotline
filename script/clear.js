
// clear button functionality
document.getElementById('clear-btn')
        .addEventListener('click', function(){
            historyData.length = 0; // from call.js
            const clearContainer = document.getElementById('history-container');            

            clearContainer.innerHTML = '';
        })