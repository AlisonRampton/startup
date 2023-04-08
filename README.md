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
We used EC2 for the server, and Route 53 to get the domain.

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

img, audio, and video elements use src attribute for source of content.

# CSS (Cascading Style Sheets)
Converts the structure and content of HTML to build responsive design and style. CSS defines 'rulesets' or 'rules', comprised of a 'selector' that selects the elements to apply the rule to, and one or more 'declarations' that represent the 'property' to style with the given 'property value'.  

Example rule applying to 'p' elements and using 4 declarations:
```css
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
You can define CSS rules within the HTML document by using the HTML 'style' element. Alternatively, you can create a hyperlink reference to an external css file.
```html
<link rel="stylesheet" href="styles.css" />
```
Rules cascade from highest to lowest nodes in DOM tree, and thus declaration properties defined at a lower level will override higher declarations.  

Selectors can be used widely for all elements of a certain type, or you can use combinators to specify necessary descendancy, like so:
```css
section h2 {
  color: #004400;
}
```

There are other types of combinators that you can use. These include the following.

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

You can also use selectors to specify classes of objects (objects with a class atribute).  
```css
.summary {
  font-weight: bold;
}
```

You can also combine the element name and class selectors to select all paragraphs with a class of summary.

```css
p.summary {
  font-weight: bold;
}
```
You can use a pound sign to select an object with an id.  
Attribute selectors select elements based on their attributes. You use an attribute selector to select any element with a given attribute (`a[href]`). You can also specify a required value for an attribute (`a[href="./fish.png"]`) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (`p[href*="https://"]).
```css
p[class='summary'] {
  color: red;
}
```

Declarations:
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |


# Simon Observations
HTML:
- Semantically different tags for the same functionality are interesting, like menu vs. ul
- Since I'm getting to this late, I am so glad CSS is a thing because using old HTML for the visual fomatting seems like a pain
- Not sure why the name entry doesn't work with the code provided?
CSS:
- WOW this is a huge visual upgrade
- Still missing functionality, but I assume we will be implementing that with the Java
- The Simon game itself is the most visually impressive, but for some reason I am really impressed by the table styling
- I need to make sure I don't get too lost in the CSS on my startup because I can for sure get lost in trying to make it look pretty
JS:
- There's functionality now!
- I still feel like Javascript is the weird love child of Java and Python that makes less sense than either one
- I think the main thing throwing me off is using this.element without having to first declare element as a member of the class
- need to reference the documentation so I know all the style attributes I can manipulate
Service:
- The random picture and quote is kind of fun, though I don't know that I would use those in my startup project
- Local storage is still useful in case internet goes wack
- index.js is interesting as a routing point for basic functioning
Database:
- Now we're actually using those endpoints from Service!
- The scores page is where it's most noticeable; greater feeling of interconnectedness seeing other people's high scores
- Random quote of the day: Does wisdom perhaps appear on the earth as a raven which is inspired by the smell of carrion?
Login:
- Yay secure login using cookies!
- Also nice how it hides login controls depending on login state
- This one has a combined login/create account page, unlike my startup. Ah well.
WebSocket:
- Simon: now with peer to peer communication!
- More than the score list, the communication between active players makes this experience more of a group thing (or would, if other people were playing)
- PeerProxy handles the protocol change to WebSocket from HTTP

# Startup Observations
HTML:
- br tags are necessary but annoying
- I think the option group stuff will be really helpful for the project, I just hope I'm able to dynamically change options when the user is logged in
- As I worked on this, I feel like there were just more and more pages I realized I needed; can you drastically change content depending on login status?
CSS:
- I got it to look pretty!
- Hamburger menus are harder than I would have thought
- I definitely looked up some code, but I feel like I was able to innovate and make the website look how I want it to
- Using hamburger menu everywhere b/c project is mobile first, and I don't need to overcomplicate navigation with how much is left to accomplish
