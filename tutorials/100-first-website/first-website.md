
[← Code With Cory - Home](../../README.md)

# First Website

A tutorial for absolute beginners to code your first website.

**Table of Contents**

- [First Website](#first-website)
  - [1) Goal](#1-goal)
  - [2) Setup](#2-setup)
    - [2.1) Development Environment](#21-development-environment)
    - [2.2) Choose a Topic](#22-choose-a-topic)
  - [3) HTML](#3-html)
    - [3.1) What is HTML?](#31-what-is-html)
    - [3.2) Make your index.html file](#32-make-your-indexhtml-file)
    - [3.3) Intro to HTML syntax](#33-intro-to-html-syntax)
    - [3.4) Boilerplate HTML](#34-boilerplate-html)
    - [3.5) HTML Heading and First Paragraph](#35-html-heading-and-first-paragraph)
    - [3.6) Viewing In-Browser](#36-viewing-in-browser)
    - [3.7) HTML Image](#37-html-image)
    - [3.8) HTML Lists](#38-html-lists)
  - [4) CSS](#4-css)
    - [4.1) What is CSS?](#41-what-is-css)
    - [4.2) Make and link your style.css file](#42-make-and-link-your-stylecss-file)
    - [4.3) Intro to CSS syntax](#43-intro-to-css-syntax)
    - [4.4) Add font and spacing style](#44-add-font-and-spacing-style)
    - [4.4) Styling images](#44-styling-images)
    - [4.5) Design for screens of varying sizes](#45-design-for-screens-of-varying-sizes)


---

## 1) Goal

The end-goal is to create a showcase website to show multimedia information about anything you'd like to showcase. For example:

![](./assets/example-website-blank.png)

You can choose what content to put in your site later.

---

## 2) Setup

---

### 2.1) Development Environment

You will need two apps:

1. Visual Studio Code ("VS Code")
   1. This is a text-editor app for coding, also known as an integrated development environment (IDE)
   2. Install from: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2. A web browser such as Google Chrome, Microsoft Edge, or Firefox
   1. We are building a website in this project, so we can use a web browser to view our progress as we go
   2. If you don't already have one of these, install one from:
      1. [https://www.google.com/chrome/](https://www.google.com/chrome/)
      2. [https://www.microsoft.com/en-us/edge/download](https://www.microsoft.com/en-us/edge/download)
      3. [https://www.mozilla.org/en-US/firefox/new/](https://www.mozilla.org/en-US/firefox/new/)

Next, make a project folder on your computer:
1. Use your system's files app (File Explorer for Windows, Finder for macOS) to create a new, empty project folder somewhere on your computer.
2. I recommend creating your folder somewhere memorable like this:

```text
├── Desktop/                  <-- Easy place to remember
│   ├── code/                 <-- Folder just for code projects
│   │   ├── first-website/    <-- New project folder
│   │   │
```

> Note: don't include the trailing slashes (`/`) in your folder name, this is just a notation to indicate if something is a folder; for example, `first-website/`, indicates that `first-website` is a folder

Finally, open your project folder in VS Code:
1. Open the VS Code app
2. Use File --> Open and select your `first-website` folder
3. Confirm you have opened the correct folder by clicking the VS Code Explorer tab in the top-left, then confirm you see "FIRST-WEBSITE" just under "OPEN EDITORS"

| ![](./assets/explorer-icon.png) | ![](./assets/explorer-tab.png) |
| ------------------------------- | ------------------------------ |
| Explorer tab icon               | Click it to expand             |

---

### 2.2) Choose a Topic

Choose a topic that you would like to showcase with your website. You'll need a title, an image, some text, and a list or links.

Here are some ideas of things to showcase:

* A photo you took and its story
* A recipe
* A website you really like and why
* An organization you want to give a shout-out to
* Art you made
* Your favorite book or comic book
* Your resume

---

## 3) HTML

---

### 3.1) What is HTML?

✨ Key Concept: **HTML** ✨

HTML is a markup language and file-format that web browsers display. For example, Microsoft Word displays `.docx` files as Google Chrome displays `.html` files.

> Note: HTML stands for HyperText Markup Language, in case you were curious.

---

### 3.2) Make your index.html file

1. If not already done, open VS Code to your `first-website` folder as described above
2. Using the VS Code Explorer tab, right-click in the empty space and select New File, then name it `index.html`

![](./assets/new-file.png)

3. Afterwards, your folder should look like this:

```text
├── first-website/
│   ├── index.html        <-- New file
│   │
```

4. You can now click `index.html` to open the file, you should see an empty file with space to type.

> Note: `index` is the common name for a home page or entrypoint HTML file, that's why our file is called `index.html`.

---

### 3.3) Intro to HTML syntax

HTML looks like this:

```html
<section>
   <p>Hello, World!</p>
</section>
```

✨ Key Concept: HTML **Tags** ✨

HTML syntax (code grammar) uses opening and closing triangle brackets `< >` to define HTML tags. These tags tell the web browser what content it needs to display and where.

* Most HTML tags have both opening and closing tags, like `<section> </section>`, and you can put content between them
* Some HTML tags do not have a closing tag and instead are self-closing, like the image tag `<img/>`

In the above example, we have two tags:

* `<p>` - this is a **paragraph** tag, used for holding text and giving it some space
* `<section>` - this **section** tag groups other HTML together when you put them between its opening and closing tags

✨ Key Concept: HTML **Elements** ✨

An HTML **element** is just one complete tag. For example, if you have multiple paragraphs on your page, you could say you have multiple `p` tags, but each one is a different HTML element.

> Notes:
> * When HTML elements are grouped inside other HTML elements, it's common to indent them as you see above with the paragraph `<p>` element indented since it's inside the section element.
> * In VS Code you press Shift+Option+F (macOS) or Shift+Alt+F (Windows) to auto-format the file. This will fix the indentation for you, assuming your opening and closing tags have proper syntax.

---

### 3.4) Boilerplate HTML

You need some HTML to start out with. Copy-paste the following into your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Web browsers will only display HTML placed between the opening body tag `<body>` and the closing body tag `</body>`. This is where you will be writing HTML code for the rest of this tutorial.

> Notes:
> * The text coloring you see is called Syntax Highlighting, different parts of the code are colored differently
> * The `<head>` is meta information used by the browser and is not displayed on the web page
> * Content inside the `<title>` tag is the text that displays up in the browser tab

---

### 3.5) HTML Heading and First Paragraph

In HTML we use heading tags for titles of varying degrees. The `h1` tag is the largest, and it goes down to `h6`.

Create your page's heading by adding the following line of code to the `body` of your HTML. Replace "YOUR HEADING HERE" with some title relating to your topic.

```html
<h1>YOUR HEADING HERE</h1>
```

Next, add a paragraph tag with some text. Replace "YOUR TEXT HERE" with a sentence or two about your topic.

```html
<p>YOUR TEXT HERE</p>
```

⚠️ Common pitfall: Once you start editing your HTML, make sure your opening (e.g. `<p>`) and closing (e.g. `</p>`) tags remain intact. All HTML tags must be *precisely typed*, or else the web browser will read it wrong.

---

### 3.6) Viewing In-Browser

First, ensure your `index.html` file is saved. You will see a white dot next to the filename if the file is not saved:

![](./assets/vs-code-unsaved-file.png)

* Use CMD+S (macOS) or CTRL+S (Windows) to save the file.

Once your `index.html` file is saved, open it in your web browser to see what it looks like:

1. Right-click in the empty space in your VS Code Explorer tab and click "Reveal in Finder" (macOS) or "Reveal in File Explorer" (Windows)
2. Double-click your `index.html` file in your files app and it should open in your default web browser

For the rest of this lesson, you should remember to save your files and refresh this browser tab to see the changes in real-time.

> Note: If you make a code mistake in a file, use CMD+Z (macOS) or CTRL+Z (Windows) to **undo**.

---

### 3.7) HTML Image

Let's add an image relating to your topic. 

First, find an image file to use. Typically these end with `.jpg`, `.jpeg`, or `.png`. Then create a new folder next to your `index.html` called `img`. Put the image file you would like to use in this new `img` folder.

Your folder structure should now look like this:

```text
├── first-website/
│   ├── img/                           <-- New image folder
│   │   ├── your-image-name.jpeg       <-- New image file
│   ├── index.html
│   │
```

Next, add a new HTML tag for your image like this:

```html
<img src=""/>
```

✨ Key Concept: HTML Tag **Attributes** ✨

This `img` tag has an **attribute** called `src`, short for "source" as in "the source of the image". HTML tags often have attributes used to differentiate that tag from others. In this case, the `src` attribute is used to provide the HTML `img` tag with a file path to your image file, so that HTML knows where to get the image from.

✨ Key Concept: **Relative Paths** ✨

You should put the relative path to your image file as if you were starting from your index.html file. In this case, you'd want to use something like `./img/your-image-name.jpeg`.

Let's break that filepath down:
1. The `./` at the beginning means "from the current folder", this is what makes it a relative path
2. Next we see `img/` meaning HTML will then look into the `img` folder
3. Finally, you should end the filepath with the name of your image, such as `your-image-name.jpeg`

The final `img` tag should look something like this:

```html
<img src="./img/your-image-name.jpeg" />
```

Refresh the browser tab containing your `index.html` file and see if your image appears.

By this point, your HTML should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <h1>YOUR HEADING HERE</h1>

  <p>YOUR TEXT HERE</p>
  <img src="./img/your-image-name.jpeg" />

</body>
</html>
```

> Note: Troubleshooting
> 
> If you're running into any issues, try the following:
> * Ensure your folder structure matches the example shown at the start of the HTML Image section
> * Compare your `index.html` content with the above
> * Ensure your image filename matches what's written in the HTML `img` tag.

---

### 3.8) HTML Lists

Lists in HTML are created using a combination of `ul` or `ol`, and `li` elements.

```html
<ul>
   <li></li>
   <li></li>
   <li></li>
</ul>
```

* `ul` means Unordered List which are displayed like info bullets
* `ol` means Ordered List which are displayed like a numbered list
* `li` means List Item, meaning the items inside either of the types of list above

Add a list to your page using another paragraph (`<p>`) tag as a title for your list. It could be a list of ingredients, facts, tools, or anything else related to your topic. The list should look something like this:

```html
<p>LIST TITLE</p>
<ul>
   <li>LIST ITEM 1</li>
   <li>LIST ITEM 2</li>
   <li>LIST ITEM 3</li>
</ul>
```

Once you're done, save your file and refresh your browser tab to see what the result looks like.

By this point, your HTML should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <h1>YOUR HEADING HERE</h1>
  
  <p>YOUR TEXT HERE</p>
  <img src="./img/your-image-name.jpeg" />

   <p>LIST TITLE</p>
   <ul>
      <li>LIST ITEM 1</li>
      <li>LIST ITEM 2</li>
      <li>LIST ITEM 3</li>
   </ul>

</body>
</html>
```

---

## 4) CSS

---

### 4.1) What is CSS?

✨ Key Concept: **CSS** ✨

CSS is a language and file format used for adding style to HTML, such as font, color, size, and spacing.

> Note: CSS stands for Cascading Style Sheets, in case you were curious.

---

### 4.2) Make and link your style.css file

1. If not already done, open VS Code to your `first-website` folder as described above
2. Using the VS Code Explorer tab, right-click in the empty space and select New File, then name it `style.css`
3. Afterwards, your folder should look like this:

```text
├── first-website/
│   ├── img/
│   │   ├── your-image-name.jpeg
│   ├── index.html
│   ├── style.css             <-- New file
│   │
```

4. Next, you need to link your CSS file to your HTML file. Add the following line of code to the `head` section of your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

The `head` section of your HTML should now look like this:

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
```

> Note: You can have multiple stylesheets and link them all in the same way.


---

### 4.3) Intro to CSS syntax

CSS looks like this:

```css
section {
   font-family: 'Arial';
   color: 'black';
}
```

✨ Key Concept: CSS **Selectors** ✨

In the example above, `section` is a CSS **selector**. This is the name of the HTML tag that the CSS style rules will apply to.

✨ Key Concept: CSS **Rules and Properties** ✨

```css
section {
   font-family: 'Arial';   <-- Rule
   ^^^^^^^^^^^
   Property
```

In CSS, style **rules** are placed between the curly braces `{ }` as seen above. A CSS rule is made up of:
1. A CSS **property**, like `font-family`
2. An associated **value**, like `'Arial'`
3. Finally a **semicolon** `;` at the end of the line.

All together:
```css
font-family: 'Arial';
```

This rule will change the text font of all text font-face to Arial.

✨ Key Concept: CSS **Classes** ✨

Let's say you have five `section` tags but you want to change the style of just *one or two* specific ones without changing *all* them. This is where CSS **classes** come to the rescue. A CSS class is a way to identify specific HTML elements regardless of their type of tag.

In HTML a class is defined as an **attribute**, while in CSS the class is used as a selector.

HTML:
```html
<p class="description">Did you know...</p>
<p class="list-title">Here's a list of...</p>
```

CSS:
```css
.description {
  font-size: 14px;
}
.list-title {
  font-size: 16px;
}
```

In CSS, `.description` is how you specify a class as a CSS **selector**. You use a dot immediately followed by the name of the class to tell CSS that you want to apply some CSS rules to that class name specifically. Typically CSS classes are written in **kebab case**, meaning lowercase words with dashes between them, like `list-title`.

> Note: There are a lot of funny names for different programming type cases, like "kebab case". Here are a few common ones:
> * Camel Case: `exampleHelloWorld`
>   * Each new word uses a capital letter, no spaces
>   * Commonly used in JavaScript
> * Kebab Case: `example-hello-world`
>   * Lowercase, dash word separator
>   * Commonly used for CSS classes and other selectors
> * Snake Case: `example_hello_world`
>   * Lowercase, underscore word separator
>   * Commonly used in the Python programming language
> * Screaming Snake Case: `EXAMPLE_HELLO_WORLD`
>   * Uppercase, underscore word separator
>   * Commonly used to name "constants", values that do not frequently change, in languages like JavaScript and Python

---

### 4.4) Add font and spacing style

Two of the first things you can do to make your page look good are choose a nice font and add some spacing.

Let's start by targeting the `body` HTML element. Add a new empty ruleset to your `style.css` file like so:

```css
body {

}
```

Now let's add a rule to change the font:

```css
body {
  font-family: 'Arial';
}
```

> Note: Instead of `'Arial'`, there are plenty of other **web-safe** fonts you can choose from, such as `'Helvetica'`, `'Verdana'`, `'Tahoma'`, `'Georgia'`, `'Baskerville'`, etc. Try searching online for "CSS web-safe fonts".

Next, let's add some spacing using the `padding` CSS property:

```css
body {
  font-family: 'Arial';
  padding: 10%;
}
```

The `padding` CSS property allows you to add space on the inside border of a CSS element. In this case, since the `body` tag encompasses everything, adding padding will simply add space between our content and the edge of our webpage. It's good aesthetic practice to add space on your page so it does not appear cluttered.

> Notes:
> * Notice how the unit we're using for padding is a percentage `%`, so a value of `5%` would refer to 5% of the `body`'s size.
> * The `margin` property is similar to `padding` in that it also adds space space, however, it adds space *outside* the border of the HTML element, so is commonly used to add space between elements.

Try saving your changes and refreshing your page to see your changes.

---

### 4.4) Styling images

Let's start out by giving your image a specific **class** so that it can be targeted individually (in case you add more images in the future):

```html
<img src="./img/your-image-name.jpeg" class="main-image" />
```

Next, target your main image with CSS by adding a new empty ruleset below your previous `body` ruleset. Remember that in CSS the period `.` indicates that your selector is targeting a **class** on HTML element(s). Add the following *below* your `body` ruleset.

```css
.main-image {

}
```

Next, use the `width` CSS property to give the image a size using the units `px` (pixels).

```css
.main-image {
  width: 400px;
}
```

Feel free to play with the `400px` value to get the image to your liking.

> Note: When setting the size of an image, you should typically only set either the height or width, but not both. The image will automatically set its own aspect ratio if you just set one. If you set both, the image will stretch.

---

### 4.5) Design for screens of varying sizes

✨ Key Concept: **Responsive Design** ✨

A common strategy when designing a website is to ensure your content displays well not only in web browsers on laptops, but on phone-sized screens too. Normally content like text naturally line-wraps, so this is often not a problem. However, static elements like images can quickly become poorly displayed. This is a large topic, but CSS has several tools which can help with responsive design such as Media Queries.

✨ Key Concept: **CSS Media Queries** ✨

A CSS **media query** allows you to write CSS rules that only apply above or below a certain screen width. For example:

```css
@media (max-width: 700px) {

}
```

`max-width: 700px` means that any rulesets you put in this space will take effect when the screen width is lower than 700 pixels. For your app, let's ensure the image will never be too wide for the page:

```css
@media (max-width: 700px) {
  .main-image {
    width: 100%;
  }
}
```

By setting the image's width to 100% while the screen is under 700 pixels wide, you ensure the image will never hang off the right side of the page.


<!-- 
## 5) Helping yourself

Congrats! By this point you have enough foundation to create and design simple scrolling web pages. What do 

---

## 6) JavaScript

### 6.1) What is JavaScript?

JavaScript is a full-fledged programming language, one of the world's most popular and most used. In front-end web development like we're doing in this tutorial, **JavaScript is used for interactivity**. JavaScript is written in text files with a `.js` file extension.

---

### 6.2 Make and link your script.js file

1. If not already done, open VS Code to your `first-website` folder as described above
2. Using the VS Code Explorer tab, right-click in the empty space and select New File, then name it `script.js`
3. Afterwards, your folder should look like this:

```text
├── first-website/
│   ├── img/
│   │   ├── your-image-name.jpeg
│   ├── index.html
│   ├── script.js             <-- New file
│   ├── style.css
│   │
```

1. Next, you need to link your CSS file to your HTML file. Add the following line of code just before the closing body tag `</body>` of your HTML file:

```html
<script src="script.js">
```

The bottom of your `body` section of your HTML should now look like this:

```html
  <script src="script.js">
</body>
```

> Notes:
> * The reason you put the script reference in this position is because you want the script to run (activate) *after* the rest of the page has loaded. Otherwise, JavaScript may not be able to find an element it needs.
> * You can have multiple stylesheets and link them all in the same way.

---

### (WIP) 7.3) Very simple intro to JavaScript

## WORK IN PROGRESS (WIP)

### The rest of this tutorial is still a work-in-progress.
















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


✨ Key Concept: CSS Selector **Specificity** ✨

Notice how we use a new selector syntax here, `img.main-image`. We are chaining together selectors by first using the tag selector `img` immediately followed by the class selector `.main-image`. This increases the **specificity** of the selector. In CSS, **specificity is how you override other styles**. For example, later if you were to add a new style to affect all images (`img { }`), your `img.main-image` ruleset will still be in effect because it is more specific.


 -->
