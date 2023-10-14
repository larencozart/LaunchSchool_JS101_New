/*
P
===
Create a console-based Rock, Paper, Scissor game/program that allows
the user to play against the computer in a best out of 5 match.

E
===
EXPLICIT
- add lizard spock
- User can input abbreviation for choice (r,p,sc,sp,)
- Game should be a best out of 5 match (3 wins end the game)
IMPLICIT
- Explain rock paper scissor lizard spock rules
- create 1 data structure to hold valid choices & winning moves
- extract messages to a JSON file
- make user input case-insensitive
- clear screen for user

D
===
Input: user choice(s) at each round
Output: computer choice, round score, round winner, game winner
Data Structures: object containing possible moves with values of
  abreviations and winning combos.

A
===
HIGH-LEVEL:
  - Hold all possible input choices & combinations in a
  connected data structure
  - Ask user for their choice, randomize a computer choie and
  compare the choices with the data structure to determine who wins
  - Play a certain amount of rounds until one side wins: display user
  and coputer moves and score for each round
  - Display winner and allow for repeat play

LOW-LEVEL:

- SET var to 'possible moves' = object containing combination of
  possible moves unabbreviated with values of abreviations and winning
  combos

- FUNC get user choice on amount of rounds (best of 3 or 5)
  - validate input
  - SET var 'winningscore'
    - IF input is '3' => winningscore = 2;
    - IF input is '5' => winningscore = 3;
  - RETURN var 'winningscore'

- FUNC get user choice
  - LOOP to validate user choice

- FUNC transform user choice if abreviated to full word choice **

- FUNC get computer choice
  - random choice operation on possible options from properties of
    obj 'possible choices'

- FUNC get round winner compare user choice to computer choice **
    - SET var 'winner'
    - IF user beats computer, 'winner' = 'user'
    - ELSE IF computer beats user, 'winner' = 'computer'
    - ELSE 'winner' = 'tie'
    - RETURN 'user', 'computer', or 'tie'

- FUNC update current score from current round winner
  - SET var 'userScore' to 0;
  - SET var 'computerScore' to 0;
  - IF roundWinner = 'use' => increment 'userScore'
  - ELSE IF roundWinner = 'computer' => increment 'computerScore'
  - RETURN {"userScore" : userscore,
            "computerScore" : computerscore} // object?

- FUNC display a rps game round
  - GET user choice *
  - GET computer choice *
  - GET round winner *
  - UPDATE current score *

  - PRINT user choice and computer choice
  - PRINT current score

- FUNC get if user wants to exit game or play again (y/n)
  - LOOP to validate input
  - return true or false

- FUNC display game
  - LOOP while true
      - CLEAR console
      - PRINT welcome
      - PRINT rules
      - SET var 'winningscore' = FUNC get user amount of rounds;
      - FUNC display rounds
      - IF FUNC 'score' obj.userscore is 'winningscore'
          => PRINT winner
      - ELSE IF FUNCT 'score' obj.computerscore is 'winningscore'
          => PRINT losing message
      - IF FUNC exit game is true
        => BREAK from loop

  - PRINT goodbye


*/