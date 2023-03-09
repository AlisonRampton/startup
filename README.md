# startup
CS 260 start up application  

# The Pitch
Board games are a hobby of mine. One of my favorite games to play with larger groups is A Fake Artist Goes to New York, which is basically Pictionary meets Spyfall or Werewolf. Everyone takes turns drawing lines to form an image, but one player (the fake artist) doesn't know what the subject of the drawing is supposed to be. Rather than have one person sit out to provide the word secretly to the players, my project will distribute the word or inform the player that they are the fake artist. This system can be used for similar games like Spyfall or Chameleon. Players will join a group room on their phones, specify the category of words and how many fake artists or spies should be selected, and then the application will select at random the word and the players to leave in the dark. If time permits, I would like to implement ways for individuals to create their own custom libraries of words.

# Proposed Features:
- Personal rooms that all players can join together on their personal devices using a code
- Randomly selected words distributed to randomly selected players
- The ability to keep track of roles in case of disconnect (either tying to a player name or with cookies)
- A variety of general categories to select from
- The ability to create custom categories tied to a user account
- Dynamic layout for mobile functionality

# Sketch
![mockup of final application](https://github.com/AlisonRampton/startup/blob/main/IMG-0763.jpg?raw=true)

# AWS Info
Domain: www.fakeartist.click  
Public/Elastic IPv4 Address: 18.118.243.84  
SSH Command: ssh -i [key pair file] ubuntu@[ip address]  

# HTTPS
HTTPS stands for Secure Hypertext Transport Protocol. Data is encrypted using the TLS protocol. The curl command can be used to see the output of the HTTPS exchange. Let's Encrypt creates trusted web certificates for free, and Caddy used Let's Encrypt to generate the web certificate for this project.

# HTML (Hypertext Markup Language)
HTML provides the foundational content structure that all web applications build upon. HTML elements are represented with enclosing tags.
| Tags     | Description |
| -------- | ----------- |
| ```<p> </p>``` | A structural paragraph of text |
| ```<html> </html>``` | Represents the top level page structure |
| ```<head> </head>``` | Contains metadata about the page and page title |
| ```<title> </title>``` | Page title |
| ```<body> </body>``` | Represents the content structure |
| ```<main> </main>``` | Represents the main content structure |
