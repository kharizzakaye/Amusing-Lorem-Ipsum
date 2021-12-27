// lorem text
const text = [
    `werwerwerwerwwer`,
    `fsdfgdgdfgdfgdfgdf`,
    `hfghyjfghjfghfghdf`,
    `ptorpoprhoprthrphor`,
    `yurtytwyetryweerwr`,
    `osrjjgisdfjgifjgid`,
    `grgoergoregreogejgojer`,
    `irutiertiertuirerter`,
    `rtheritertbretvre`,
    `dgasdsgadcsagcdasga`,
    `yrteytyertyreytyeyt`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e){
    e.preventDefault(); // prevents default behavior of the form
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    // empty
    // less than 0
    // more than 11
    if(isNaN(value) || value < 0 || value > 11)
    {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else
    {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML = tempText;
    }
});