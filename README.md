
# Wault-Master
A TailwindCSS based Javascript game in which the user must guess the completely random vault code in order to win.

<p align="center" style="text-align: center;">
 <img src='https://stiki.ir/projects/Wault-master/util/waultmaster.png'/>
</p>

## Features

- Fully Responsive (Cross-platform)
- Written in Tailwind and Pure JS.
- IOS-Like design.
- Dark mode. (no toggle, yet.)


## Demo

A Demo with latest version is available at [My Website](https://stiki.ir).

# Instructions

To play this game, keep the following in mind:

- You have four attempts to guess a four-digit code.
- For each 4-digit guess, you will get either No color, Blue, or Yellow.
- If the number you provided contains a yellow digit, this indicates that the yellow digit EXISTS in the vault code but is not in the correct location.
- On the other hand, if the number you supplied contains a blue digit, it signifies that the blue digit exists in the vault code and is in the correct location.
- A no-color digit indicates that the digit does not exist in the vault code.

## Known issues

It appears that a few "bugs" exist. Although I don't call them bugs because they are expected to occur, my instinct is to alter and correct this issue.

#### Issue no. 1

- Assume the vault code is 3578. If the user enters a number like 3243, the first digit (3) is colored blue, just as it should be, but the last digit (3) is colored yellow. Because there is no other '3' digit in the vault code other than the one that was finally guessed, the last digit should NOT be marked in yellow.

#### Issue no. 2

- This is essentially similar to Issue No. 1. Assume that the vault code is 2119. When a user inputs a number such as 9119, the last digit (9) is colored blue, as it should be, but the first digit (9) is also colored yellow. This should not be the case because we have previously guessed the single digit '9' in the vault code, yet we still get a yellow '9' digit as if there were another one.

#### Issue no. 3

- When the user clicks on the input on a smaller device screen, the keyboard pushes up the digit-guessing area, making it difficult to see what's going on.
## Contributing

Contributions are always welcome!

Feel free to open a pull request at any time.
