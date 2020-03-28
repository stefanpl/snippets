let ScriptLoader = (function() {

    // A unique part of the stylesheet's href to identify it
    let matchingString = '';
    let stylesheetElement = null;

    // Change the <link>'s href to initialize a reload
    let changeHref = function() {
        let newUrl;
        let oldUrl = stylesheetElement.attr('href');
        let reloadParameter = 'reload-counter=';
        let matchingRegex = new RegExp('('+reloadParameter+')([0-9]+)');
        let counterStringMatch = oldUrl.match(matchingRegex);

        if (!counterStringMatch) {
            // First time calling, create the appropriate string in the URL
            let connector = oldUrl.indexOf('?') === -1 ? '?' : '&';
            newUrl = oldUrl+connector+reloadParameter+'1';
        } else {
            // Increase the counter value, set the new url
            let newCounterValue = parseInt(counterStringMatch[2]) + 1; 
            newUrl = oldUrl.replace(matchingRegex, counterStringMatch[1]+newCounterValue);
        }
        stylesheetElement.attr('href', newUrl);
        console.log("Script href refreshed");
    }

    let ensureElementIsThere = function() {
        let match = $('link[href*="'+matchingString+'"]');
        if (match.length > 1) {
            throw new Error('Multiple link elements match the string \''+matchingString+'\'. Aborting.')
        }
        if (match.length == 0) {
            throw new Error('No link element matches the string \''+matchingString+'\'. Aborting.')
        }
        stylesheetElement = match;
    }

    let reloadScript = function() {
        if (!matchingString) {
            throw new Error('Please set a string to match the stylesheet first');
        }
        ensureElementIsThere();
        changeHref();
    }

    return {
        reloadScript: function(stylesheetHrefFragment) {
            if (stylesheetHrefFragment) {
                matchingString = stylesheetHrefFragment;
            }
            reloadScript();
        }
    }
})();

$(document).on('keyup', function(event) {
    if (event.keyCode == 69) {
        ScriptLoader.reloadScript('main');
    }
});