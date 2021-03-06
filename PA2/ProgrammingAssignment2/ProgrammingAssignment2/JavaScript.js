﻿function SearchTrie() {
    var text = $("#text").val();
    if (text == "")
        $('.suggestions').hide();
    else
    {
        $.ajax({
            type: "POST",
            url: "WebService1.asmx/querySuggestions",
            data: '{word:"' + text + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var idx;
                var template = $('.template');
                var suggestions = $('.suggestions');
                suggestions.empty();
                var results = JSON.parse(data["d"]);
                if (results == 0) {
                    instance = template.clone();
                    instance.find('.result').html("Sorry, No Suggestions Were Found");
                    instance.removeClass('template');
                    suggestions.fadeIn(500).append(instance);
                }
                for (idx = 0; idx < results.length; ++idx) {
                    instance = template.clone();
                    instance.find('.result').html(results[idx]);
                    instance.removeClass('template');
                    suggestions.fadeIn(500).append(instance);
                }
            },
            error: function (data) {
                $('.suggestions').empty();
            }
        });
        $('.suggestions').show();
    } 
}
$(function () {
    
}); //doc ready()
