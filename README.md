# Crossword Layout Generator - Open Source
A crossword consists of clues, answers, and a layout:
- The answers are the hidden words that the player is trying to guess.
- Each answer has exactly one clue.  This clue is a sentence or phrase that helps the player to guess the associated answer.
- The **crossword layout** describes where the answers are located in a two dimensional grid.

This crossword layout generator takes in a list of answers and outputs a crossword layout.  Our program **does not** generate the answers or the clues.

# Input and Output Format

An input is a list of answers in a json format.  The clues can optionally be included with the input.

Here is an example input:

`[{"clue":"that which is established as a rule or model by authority, custom, or general consent","answer":"standard"},{"clue":"a machine that computes","answer":"computer"},{"clue":"the collective designation of items for a particular purpose","answer":"equipment"},{"clue":"an opening or entrance to an inclosed place","answer":"port"},{"clue":"a point where two things can connect and interact","answer":"interface"}]`

The output is a crossword layout.  That is, we associate a position, startx, starty, and orientation with each answer.

Here is an example output:

`[{"clue":"the collective designation of items for a particular purpose","answer":"equipment","startx":1,"starty":4,"position":1,"orientation":"across"},{"clue":"an opening or entrance to an inclosed place","answer":"port","startx":5,"starty":4,"position":2,"orientation":"down"},{"clue":"that which is established as a rule or model by authority, custom, or general consent","answer":"standard","startx":8,"starty":1,"position":3,"orientation":"down"},{"clue":"a machine that computes","answer":"computer","startx":3,"starty":2,"position":4,"orientation":"across"},{"clue":"a point where two things can connect and interact","answer":"interface","startx":1,"starty":1,"position":5,"orientation":"down"}]`

One can visualize the ouput as follows:

![Example Output](https://github.com/MichaelWehar/Crossword-Layout-Generator/blob/master/example_images/crossword1_filled.png)

# Getting Started

**Step 1:** Add the following line to the head of your html document:

`<script src="layout_generator.js"></script>`

**Step 2:** In the body of your html document, you can add the following JavaScript:

```
<script>
...
    var layout = generateLayout(input_json);
    var output_json = layout.result;
...
</script>
```

# License
- MIT

# Credits
- Michael Wehar
- Itay Livni
