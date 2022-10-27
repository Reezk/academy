require('uikit/dist/js/uikit');

window.$ = window.jQuery = require('jquery');
jQuery(document).ready(function ( $ ){

    let $languageSwitcherForm = $('#language_switcher');
    let $languageSelect = $('#language');
    $languageSelect.on('change',function(){
        $languageSwitcherForm.submit();
    });

    //alert('jquery working');
});
