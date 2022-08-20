// TODO: Declare any global variables we need
let numTailsFlipped = 0;
let numHeadsFlipped = 0;

document.addEventListener('DOMContentLoaded', function () {
    let imgEl = document.querySelector('#penny');
    let flipBtn = document.querySelector('#flip');
    let clearBtn = document.querySelector('#clear');
    let msgDiv = document.querySelector('#message');
    let numHeadsCell = document.querySelector('#heads');
    let perHeadsCell = document.querySelector('#heads-percent');
    let numTailsCell = document.querySelector('#tails');
    let perTailsCell = document.querySelector('#tails-percent');

    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools


    // TODO: Add event listener and handler for flip and clear buttons
    flipBtn.addEventListener('click', handleFlip)

    function handleFlip () {
        let toss = Math.random();
        if (toss < 0.5) {
            //heads stuff
            // console.log('head flip!');
            imgEl.src = './assets/images/penny-heads.jpg';
            imgEl.alt = 'penny heads';
            msgDiv.textContent = 'You flipped HEADS!';

            numHeadsFlipped++;
        } else {
            //tails stuff
            // console.log('tail flip!')
            imgEl.src = './assets/images/penny-tails.jpg';
            imgEl.alt = 'penny tails';
            msgDiv.textContent = 'You flipped tails !!';

            numTailsFlipped++;
        }
        let totalFlips = numHeadsFlipped + numTailsFlipped;
        let percentageHeads = numHeadsFlipped / totalFlips * 100;
        let percentageTails = numTailsFlipped / totalFlips * 100;

        numHeadsCell.textContent = numHeadsFlipped;
        numTailsCell.textContent = numTailsFlipped;
        perHeadsCell.textContent = Math.round(percentageHeads) + '%';
        perTailsCell.textContent = Math.round(percentageTails) + '%';
    }
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        clearBtn.addEventListener('click', function () {
            msgDiv.textContent = "Let's get rolling!"
            numHeadsCell.textContent = 0;
            numTailsCell.textContent = 0;
            perHeadsCell.textContent = '0%';
            perTailsCell.textContent = '0%';
    
            numTailsFlipped = 0;
            numHeadsFlipped = 0;
    });
})