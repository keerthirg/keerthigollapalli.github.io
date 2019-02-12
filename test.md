---
layout: testpage
title: Mock Test
permalink: /test/
---

<form id="jsonFile" name="jsonFile" enctype="multipart/form-data" method="post">
<div id="selector">
    <div id="toggles">
        <label class="checkbox-inline">
            <input type="checkbox" id="shuffle_questions" checked data-toggle="toggle"> Shuffle Questions
        </label>
        &nbsp;
        <label class="checkbox-inline">
            <input type="checkbox" id="shuffle_options" checked data-toggle="toggle"> Shuffle Options
        </label>
    </div>
    <br>
    Select a Test (and click Load) : 
    <select id="chaptername">
        <option value="bookkeeping-chap1.json">Bookkeeping - Chapter 1</option>
        <option value="bookkeeping-chap2.json">Bookkeeping - Chapter 2</option>
        <option value="bookkeeping-chap3.json">Bookkeeping - Chapter 3</option>
        <option value="bookkeeping-chap4.json">Bookkeeping - Chapter 4</option>
        <option value="bookkeeping-chap5.json">Bookkeeping - Chapter 5</option>
        <option value="bookkeeping-chap6.json">Bookkeeping - Chapter 6</option>
        <option value="bookkeeping-chap7.json">Bookkeeping - Chapter 7</option>
        <option value="bookkeeping-chap8.json">Bookkeeping - Chapter 8</option>
    </select>
    &nbsp;
    <input type='button' id='btnLoad' value='Load' onclick='loadFile();'>
</div>
<div id="dynamiccontent"></div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>    
<script type="text/javascript" src="/static/js/main.js"></script>
