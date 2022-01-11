# HTML

**HTML** (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.
It provides a way of representing and structuring information and content that can be interpreted by Web Browsers.

## HTML Markup Language

A **Markup Language** is a computer language that consists of easily understood keywords, names, or tags that help format the overall view of a page and the data it contains.
In the case of **HTML**, it is composed of tags that are assigned different default behaviours and functionalities. A basic HTML document looks like this.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>
```

As we can see in the example above, each tag has other tags inside it and finally has a closing tag for the element.

### HTML tags

#### HTML structure tags

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>
```

##### html

It is the root tag in every HTML document, every other tag in our document must be between the opening and closing html tags.

##### head

It represents the head of the document and is the place where we can put a variety of meta tags to load resources like stylesheets (**css**), **javascript** or **meta tags** to hint bots like the Google crawler about the content of our HTML document.

##### body

It encloses the content of our HTML document, what the user will actually see in the web browser.

#### HTML main meta tags

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Example title</title>
      <meta name="description" content="This is an example description for my HTML document"/>
      <link rel="stylesheet" href="https://pro.packlink.fr/wp-content/plugins/cookie-law-info/public/css/cookie-law-info-gdpr.css?ver=2.0.5" type="text/css" media="all"/>
      <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
   </head>
   <body>
      <p>This is an example of a simple HTML page with one paragraph.</p>
   </body>
</html>
```

##### title

The text in this tag will be shown in the web browser tab. It is also very relevant for crawlers like the Google crawler or when sharing the HTML document via Social Networks like Facebook or Instagram.

##### meta

This tag is meant to represent meta data about our HTML document to crawlers like the Google Crawler or Facebook Crawler.

##### script

This tag is mainly used to load javascript files so they get interpreted and executed by the browser to add additional functionality to our HTML document.

##### link

This tag is mainly used to load css files so they get interpreted and executed by the browser to add styles to ur HTML document.

#### HTML main content tags

```html
<!DOCTYPE html>
<html>
   <head>
      <link rel="stylesheet" href="https://pro.packlink.fr/wp-content/plugins/cookie-law-info/public/css/cookie-law-info-gdpr.css?ver=2.0.5" type="text/css" media="all"/>
   </head>
   <body>
      <h1>
      This is the main header of our HTML document>
      <p>This is an example of a simple HTML page with one paragraph.</p>
      <a href="https://google.com">Click here to navigate to Google</a>
      <img src="https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2020/08/1140-panda-smithsonian-esp.imgcache.rev.web.900.513.jpg" title="Lovely panda"/>
      <div>
         <p>This is an example of a pragraph inside a block divison <span>with an inline division</span> and <strong>some highlited text</strong></p>
      </div>
   </body>
</html>
```

##### h1, h2, h3, h4, h5

This tag represents headings in our HTML document.

##### p

This tag represents a paragrapah in our HTML document.

##### a

This tag represents a link in our HTML document.

##### img

This tag represents an image in our HTML document.

##### div

This tag represents a block division in our HTML document.

##### span

This tag represents an inline division in our HTML document.

##### strong

This tag represents content that we want to highlight in our HTML document.

#### HTML form tags

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My example form</title>
   </head>
   <body>
      <form>
         <div>
            <label for="name">Your name</label>
            <input id="name" type="text"/>
         </div>
         <div>
            <label for="animals">Your favourite animals</label>
            <select id="animals">
               <option value="pandas">Pandas</option>
               <option value="koalas">Koalas</option>
               <option value="cats">Cats</option>
            </select>
         </div>
         <div>
            <label for="comments">Any comments?</label>
            <textarea id="comments"></textarea>
         </div>
         <div>
            <button type="submit">Submit your data</button>
         </div>
      </form>
   </body>
</html>
```

##### form

This tag represents a form in our HTML document. It is used to enclose a series of inputs and buttons so the user can submit data from our HTML document to our server to be processed.

##### label

This tag represents a label for another HTML tag, mainly used for form content tags (input, textarea, select).

##### input

This tag represents a form input. Depending on the type attribute (see HTML attributes below) it can render a variety of builtin inputs (text input, numeric input, radio input, checkbox input, etc.)

##### textarea

This tag represents a long multiline text input.

##### select

This tag represents a drop-down list.

##### button

This tag represents a button.

#### HTML attributes

HTML attributes provide additional information about HTML tags.

- All HTML elements can have **attributes**
- Attributes provide **additional information** about elements
- Attributes are always specified in **the start tag**
- Attributes usually come in name/value pairs like: **name="value"**
- Some attributes are common for all HTML tags and others are specific to some tags

## Code Academy

There is a small course in Code Academy to practice and consolidate what we are going to learn in this session.
Go to the following link [Learn HTML](https://www.codecademy.com/learn/learn-html)
