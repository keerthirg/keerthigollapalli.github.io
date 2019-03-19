---
layout: page
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
                <option value="bookkeeping-chap1.json">Book Keeping - Chapter 1</option>
                <option value="bookkeeping-chap2.json">Book Keeping - Chapter 2</option>
                <option value="bookkeeping-chap3.json">Book Keeping - Chapter 3</option>
                <option value="bookkeeping-trans.json">Book Keeping - Transactions</option>
                <option value="ifrs.json">IFRS</option>
            </select>
            &nbsp;
            <input type='button' id='btnLoad' value='Load' onclick='loadFile();'>
        </div>
        Don't Shuffle Questions for Book Keeping - Transactions !!!
        <div id="dynamiccontent"></div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>    
<script type="text/javascript" src="/static/js/main.js"></script>
