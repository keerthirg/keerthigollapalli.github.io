var q_obj = [];
var s_obj = [];

function loadFile() {

    $('#dynamiccontent').empty();
    $('#test-progress').empty();
        
    var selectObj = document.getElementById('chaptername');
    var filename = selectObj.options[selectObj.selectedIndex].value;

    readTextFile("/static/data/" + filename, function(resp) {

        var firstObj = JSON.parse(resp);
        // console.log(firstObj);

        var ctr = 0;
        var htmlText = '';

        var shuffleQuestions = document.getElementById('shuffle_questions').checked;

        var jsonObj = firstObj;

        if (shuffleQuestions) {
            jsonObj = shuffle(firstObj);
        }

        jsonObj.forEach(function(obj) {
            // console.log(obj.solution);
            ctr++;

            // adding the values to q_obj
            q_obj[ctr] = obj.solution[0];

            htmlText += '<br>';
            htmlText += '<fieldset class="f_container"><div class="d_' + ctr + '">';
            htmlText += '<legend> Question ' + ctr + ' of ' + jsonObj.length + ' </legend>';
            htmlText += '<p class="question">' + obj.question + '</p>';
            var loopVar = 0;

            var shuffleOptions = document.getElementById('shuffle_options').checked;

            var jsonOptions = obj.options;

            if (shuffleOptions) {
                jsonOptions = shuffle(obj.options);    
            }
            
            jsonOptions.forEach(function(option) {
                loopVar++;
                var opt_text = option.substring(2);
                var val = option.substring(0, 2).trim();
                if (obj.solution.includes(option.substring(0, 2).trim())) {
                    htmlText += '<div class="options_container">';
                    htmlText += '<div class="div_' + ctr + '" id="' + ctr + '_crt' + '"><label class="option">';
                    htmlText += '<input type="radio" id="' + ctr + '_' + loopVar + '" name="' + ctr + '" value="' + val + '"> ' + opt_text + '</label></div>';
                    htmlText += '</div>';
                } else {
                    htmlText += '<div class="options_container">';
                    htmlText += '<div class="div_' + ctr + '" id="opt_' + ctr + '_' + loopVar + '"><label class="option">';
                    htmlText += '<input type="radio" id="' + ctr + '_' + loopVar + '" name="' + ctr + '" value="' + val + '"> ' + opt_text + '</label></div>';
                    htmlText += '</div>';
                }
            })
            htmlText += '</div></fieldset>';
        });
        // $('body').append(htmlText);
        $('#dynamiccontent').append(htmlText);
        $(document).ready(function() {
            $('input[type=radio]').on('change', function(event) {
                var test = event.target.id.split("_", 2);
                $(".div_" + test[0]).css("border", "0px");
                if ($("#opt_" + event.target.id)) {
                    $("#opt_" + event.target.id).css("color", "red");
                    $("#opt_" + event.target.id).css("border", "solid 2px");
                }
                $("#" + test[0] + "_crt").css("color", "green");
                $("#" + test[0] + "_crt").css("border", "solid 2px");

                $('.d_' + test[0] + ' input:radio').attr("disabled", true);

                // adding values to s_obj
                var value = $("#" + event.target.id).val();
                s_obj[test[0]] = value;
                // console.log(value);
                // console.log(q_obj);
                // console.log(s_obj);
                var attempt = s_obj.length - 1;
                var total = q_obj.length - 1;
                var success = 0;
                for (var key in s_obj) {
                    // console.log(s_obj[key] + "  " + q_obj[key]);
                    if (s_obj[key] === q_obj[key]) {
                        success++;
                    }
                }
                $('#test-progress').empty();
                var html_progress = '';
                html_progress += '<span class="total">Total Questions : ' + total + ' </span>';
                html_progress += '<span class="attempted">Attempted : ' + attempt + ' </span>';
                html_progress += '<span class="success">Correct : ' + success + ' </span>';
                $('#test-progress').append(html_progress);
            });
        });
    });
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}