




# The box model





All tags in HTML will behave like **boxes**. These boxes have some common properties that we need to be aware of.





Examples in `box.html`.





![Box model](./assets/boxmodel.png)





## Box model properties





- Width and height apply to the content of the box



- The padding is the distance from the content to the border



- The border sits between the margin and padding



- The margin is the distance from the border to the other elements





All this properties can be modified via CSS



``` {.css}



.my-box {



background: green;



width: 100px;



padding: 20px;



margin: 20px;



border: 5px solid orange;



}



```





## Display



With the `display` property, we can specify the display behavior (the type of rendering box) of an element.



All HTML values have a default display property.





Examples in `display.html`.





### display - block



Block elements are those that start on a new line and fill their whole container, from left to right.



Some elements with display block by default are **`<div>`** or **`<p>`**





### display - inline



Inline elements do not break the flow of text in a paragraph.



Some examples of elements with display inline by default are **`<a>`** or **`<span>`**





### display - inline-block



Compared to `display: inline`, the major difference is that **inline-block** allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.





Compared to `display: block`, with **display: block**, a line break happens after the element, so a block element doesn’t sit next to other elements.





### display - none



**`display:none`** makes the element not to be displayed in the screen.





## Horizontal centering



One of the first things we'll want to do when creating the layout of a webpage is centering the content horizontally.





This can be done using **margin** and **width**:



``` {.css}



body {



width: 800px;



margin: auto;



}



```





But, what happens when we resize the window to less than **800px**?





**max-width** allows us to express the maximum width we want for a box, so it resizes in case of smaller screens.





``` {.css}



body {



max-width: 800px;



margin: auto;



}



```



Examples in `horizontal-centering.html`.





## box-sizing



With **box-sizing** property we can modify how width and height are calculated.



Examples in `box-sizing.html`.



### box-sizing - content-box



**`box-sizing: content-box;`** gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.



### box-sizing - border-box



**`box-sizing: border-box;`** tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.



## Position





We use the **position** css property to make more complex layouts.



There are a number of different values for it:





Examples in `position.html`.





### Position - relative



**`position: relative;`** allows us to place the element related to where it would be placed by default.





We can move them with: **top, bottom, right,** and **left.**





### Position - fixed



With the **`position: fixed;`** attribute we can make elements that stay in the same position. These are elements whose position doesn't change even when scrolling.





### Position - absolute



With **`position: absolute;`** we can place elements like with **fixed** but relative to their *nearest positioned parent*




## display - flex



With **`display: flex;`** we make the element children behave in a flexible way, giving them the ability to adapt.



We will use this as a cheatsheet reference for flex [flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)



Examples in `flex.html`.
