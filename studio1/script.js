(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector('#madLib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;
        const adj4 = document.querySelector('#adj4').value;
        const adj5 = document.querySelector('#adj5').value;
        const adj6 = document.querySelector('#adj6').value;
        const adj7 = document.querySelector('#adj7').value;
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;
        const verb1 = document.querySelector('#verb1').value;
        const verb2 = document.querySelector('#verb2').value;
        const num = document.querySelector('#num').value;
        const animal = document.querySelector('#animal').value;
        const fam = document.querySelector('#fam').value;

    
        let myText = '';
    

        if(adj1 == ''){
            myText = "Please provide a noun"
            document.querySelector('#adj1').focus();
        } else if(adj2 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj2').focus();
        } else if(adj3 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj3').focus();
        } else if(adj4 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj4').focus();
        } else if(adj5 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj5').focus();
        } else if(adj6 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj6').focus();
        } else if(adj7 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj7').focus();
        } else if(noun1 == ''){
            myText = "Please provide another noun"
            document.querySelector('#noun1').focus();
        } else if(noun2 == ''){
            myText = "Please provide another noun"
            document.querySelector('#noun2').focus();
        } else if(noun3 == ''){
            myText = "Please provide another noun"
            document.querySelector('#noun3').focus();
        } else if(verb1 == ''){
            myText = "Please provide another noun"
            document.querySelector('#verb1').focus();
        } else if(verb2 == ''){
            myText = "Please provide another noun"
            document.querySelector('#verb2').focus();
        } else if(num == ''){
            myText = "Please provide another noun"
            document.querySelector('#num').focus();
        } else if(animal == ''){
            myText = "Please provide another noun"
            document.querySelector('#animal').focus();
        } else if(fam == ''){
            myText = "Please provide another noun"
            document.querySelector('#fam').focus();
        } else {
            myText = `<p>One spooky <strong>${adj1}</strong> night, I was walking through a <strong>${adj2}</strong> forest. Suddenly, I heard a <strong>${adj3}</strong> sound. I turned around and saw a <strong>${adj4} ${noun1}</strong>, standing right behind me!</p>

            <p>It had <strong>${num} ${noun3}</strong> and a big <strong>${adj5} ${noun2}</strong>. It <strong>${verb2}</strong> at me and then started to <strong>${verb1}</strong>. I was so scared that I ran all the way home.</p>
            
            <p>When I got home, I told my <strong>${fam}</strong> about the <strong>${adj6}</strong> creature. They laughed and said it was probably just a <strong>${animal}</strong>. But I know what I saw, and I'll never forget that <strong>${adj7}</strong> Halloween night.</p>`;
        }

        console.log(myText)
    
        madLib.innerHTML = myText;

        document.getElementById('overlay').className = 'showing';
    });
    
    

    // slide 10
    // let myP = document.querySelector('#cheese');
    // myP.innerHTML = "I really love <b>cheese</b>."
    

    
})();




// add a on click event handler to that element id for that div the skeleton

// pumpkin, when you click on this, go into these fields, pick a random word from array 
// for loop and go through array. 