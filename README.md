# Crossword Layout Generator - Open Source
## Introduction
A crossword consists of clues, answers, and a layout:
- The answers are the hidden words that the player is trying to guess.
- Each answer has a clue which is a sentence or phrase that helps the player to guess the associated answer.
- The **crossword layout** describes where the answers are located in a two-dimensional grid.

This crossword layout generator takes in a list of answers and outputs a crossword layout.  Our program **does not** generate the answers or the clues.

## Input and Output Format

An input is a list of answers in a JSON format.  The clues can optionally be included with the input.

Here is an example input:

`[{"clue":"that which is established as a rule or model by authority, custom, or general consent","answer":"standard"},{"clue":"a machine that computes","answer":"computer"},{"clue":"the collective designation of items for a particular purpose","answer":"equipment"},{"clue":"an opening or entrance to an inclosed place","answer":"port"},{"clue":"a point where two things can connect and interact","answer":"interface"}]`

The output is a crossword layout.  That is, we associate a position, startx, starty, and orientation with each answer.

Here is an example output:

`[{"clue":"the collective designation of items for a particular purpose","answer":"equipment","startx":1,"starty":4,"position":1,"orientation":"across"},{"clue":"an opening or entrance to an inclosed place","answer":"port","startx":5,"starty":4,"position":2,"orientation":"down"},{"clue":"that which is established as a rule or model by authority, custom, or general consent","answer":"standard","startx":8,"starty":1,"position":3,"orientation":"down"},{"clue":"a machine that computes","answer":"computer","startx":3,"starty":2,"position":4,"orientation":"across"},{"clue":"a point where two things can connect and interact","answer":"interface","startx":1,"starty":1,"position":5,"orientation":"down"}]`

One can visualize the output as follows:

![Example Output](https://github.com/MichaelWehar/Crossword-Layout-Generator/blob/master/example_images/crossword1_filled.png)

## Getting Started

**Step 1:** Install package using npm:

```sh
npm install crossword-layout-generator
```

**Step 2:** You can add the following to your JavaScript application's code:

```js
...
var clg = require("crossword-layout-generator");
var layout = clg.generateLayout(input_json);
var rows = layout.rows;
var cols = layout.cols;
var table = layout.table; // table as two-dimensional array
var output_html = layout.table_string; // table as plain text (with HTML line breaks)
var output_json = layout.result; // words along with orientation, position, startx, and starty
...
```

## Demo Website

The demo website's source code can be found in `index.html`.

The demo website shows:

- how to generate the crossword layout in a JSON format

- how to generate the crossword layout in a plain text grid format (using HTML line breaks).

- how to turn your crossword layout into a **word search puzzle** with horizontal and vertical answers.

**Demo:** http://michaelwehar.com/crosswords

**Short Article:** https://projectboard.engineering.com/project/crossword-layout-generator---open-source

## Information for Advanced Users

- The generated layouts don't always contain all of the input words.  If a word does not appear in the layout, then its orientation attribute will be set to "none".

- The generated crossword layouts are not always connected.  Occasionally, there will be islands of disconnected words.

- The program is efficient on small word lists, but it runs noticably slower when the list contains more than 100 words.

- We are still exploring potential ways to evaluate the quality of the generated crossword layouts.  See [Issue #2](https://github.com/MichaelWehar/Crossword-Layout-Generator/issues/2).

## License
- MIT

## Credits
- Michael Wehar
- Itay Livni
- Michael Blättler

## External Projects That Use Our Library

- [WoordSchaap](https://github.com/erasche/woordschaap)

- [Collaboration with TapNotion at PyCon 2018](https://pycon-archive.python.org/2018/schedule/presentation/179/)
