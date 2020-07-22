
const Nightmare = require('nightmare');

// Set "show" to "false" to run this headless with no GUI displayed.
const nightmare = Nightmare({ show: true });

nightmare
    // Open a web page.
    .goto('https://duckduckgo.com')

    // Type some text.
    .type('#search_form_input_homepage', 'github nightmare')

    // Click a button.
    .click('#search_button_homepage')

    // Wait for the requested selector to appear in the DOM.
    .wait('#r1-0 a.result__a')

    // Evaluate some JavaScript code in the browser.
    .evaluate(() => document.querySelector('#r1-0 a.result__a').href)

    // Take a screenshot.
    .screenshot("./output.png")

    // Finish up.
    .end()
    .then(() => {
        console.log("Screen was captured to output.png.");
    })
    .catch(error => {
        console.error("An error occurred.");
    });