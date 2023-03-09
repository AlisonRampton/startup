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
| ```<p id="hello"> </p>``` | A structural paragraph of text with a unique id attribute|
| ```<html> </html>``` | Represents the top level page structure |
| ```<head> </head>``` | Contains metadata about the page and page title |
| ```<title> </title>``` | Page title |
| ```<body> </body>``` | Represents the content structure |
| ```<main> </main>``` | Represents the main content structure |
| ```<a href="https://byu.edu"> </a>``` | Anchor element with hyperlink reference attribute |

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

How to use otherwise reserved characters:  
| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |
  
Input element info:

HTML input elements:
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

Form element example:  
```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```
Input Input element types:
| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

Common input element attributes:
| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |
