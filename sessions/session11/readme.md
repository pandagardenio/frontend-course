# Exercise

Today we are going to improve a picture gallery app. Instead of starting from scratch as we have been doing in the last sessions, today we are going to be writing code on top of a working application.

The working app is in the folder exercises/picture-gallery in session11 folder.


## Install dependencies and start the app
As always, first thing we need is to cd into the folder (sessions/session11/exercises/picture-gallery from the root of the repository), run **npm install** to install the dependencies (react at this point) and run **npm start** in order to start the React local server.

**After all this happens, your browser should have opened a new tab with the picture gallery showing.**

## Getting to know the app structure
First we are going to check the code of the app to get familiar with it. If we open the App component we can see that it is using 3 components (Header, Footer and PictureGallery). It is also declaring an array with picture urls that is passed via props to PictureGallery

If we explore the components folder, we can see another folder with the different components for the PictureGallery.

The tree of React components for the application looks something like this:
IMAGE

As we can see each component has its corresponding css file for styling purpouses

## Fixing the Picture Gallery Thumbnails
First thing we need to do to improve our picture gallery app is fixing the thumbnails carousel. We can see that it works correctly at the beginning, but if we keep pushing next or previous, there is a point where the pictures top showing.

### Detecting the issue
First we are going to spend 5 minutes understanding what is going on.
Pay attention to the following parts of the code and try to find out what's happening:
- The pictures that we see come from an array
- When the application loads, we are showing the first photo of that array (position 0)
- Every time we click previous or next buttons we change that position (if we keep clicking next, we are showing the position 1, 2, 3, etc.)

After the 5 minutes, let's see if somebody has some clues of what's going on

### Fixing the issue
Now that we know what's going on, let's fix it.
Implement one of the following solutions.

#### Disabling the buttons in PictureGalleryControls when needed
In this solution we are going to disable the Previous and Next buttons before index of the picture we are showing gets out of bounds. For that, we are going to add a disabled prop to the buttons in case they should not be clickable in PictureGalleryControls.

#### Controlling the index of the picture
In this solution we are going to control that the index of the picture showing is not out of bounds (is not less thatn 0 or bigger than the pictures array length - 1). We are going to do this in PictureGallery.

## Improving the buttons
We want to improve a little bit the design of our buttons and in this case, instead of implementing styles for the buttons from scractch we are going to use a third party library called Material UI.

### Installing MUI
First thing we are going to need to do is install the library. For that, we can check the steps here https://mui.com/getting-started/installation/

We basically need to run **npm install @mui/material @emotion/react @emotion/styled** to instal the library along with other two dependencies needed to make Material UI work.

With this, we can use a lot of already made UI components. In this case, we are going to replace our plain boring buttons with Buttons from Material UI. We can see the documentation and how to use them here https://mui.com/components/buttons/. If you click on the **<>** symbols in the documentation blocks you can see code examples.

### Implementing the buttons from MUI
We are going to replace the buttons in Picture Gallery Controls with the ones from Material UI. Play a little bit with the props variant and color of MUI Buttons to see how we have access to multiple types of different buttons.

## Improving our Header
The header of the app right now only shows a text. Let's try to see if there is another MUI component that can help us make it look better.

### Replacing our Header with an AppBar
We are going to replace the code in our Header to use the AppBar component and the ToolBar component from MUI, as we can see in the examples here https://mui.com/components/app-bar/

Don't worry if you see in those examples things you don't understand, Material UI allow us to write styles using other tools appart from CSS and it also shows advanced use cases.

At this point, our Header component should look like this:

```js
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';

function Header() {
    return (
        <AppBar>
            <Toolbar>
                My Picture Gallery
            </Toolbar>
        </AppBar>
    )
}

export default Header;
```

There are two things left here to do.
1. The first one, we are not using the css in Header.css anymore, so we can go ahead delete the file and remove the import from Header.js
2. Second one, if we go back to our browser we can see that our image is overlapping with the AppBar we just implemented. This is because AppBar is set to have a fixed position, so it is not occupying any space. In this case, to fix this, we are going to add an extra margin-top of 64px (it's the height of the AppBar) to our .picture-gallery


## Making the thumbnails clickable
The last improvement we want to make to our picture gallery is allowing the user to click in a thumbnail and showing the clicked picture in big.

### Allow clicking the thumbnails
First thing we need to do is go to our PictureThumbnails component and assing an event handler for the click event to each of the li elements that are being rendered. What we want is to pass to that handler the index of the picture that is being rendered (remember, to do this the best approach is to use an anonymous arrow function as event handler so we can call inside of it another function passing the desired parameter, the index in our case).

Then in the function we are going to call from our event handler, we are going to propagate the index of the picture that has been clicked to the father component using a function that is passed via props.

At this point, your code PictureThumbnails look like this

```js
import './PictureGalleryThumbnails.css';

function PictureGalleryThumbnails(props){
    const handleThumbnailClick = (pictureIndex) => {
        props.onThumbnailClick(pictureIndex);
    };

    const getThumbnailsTransform = () => {
        const thumbnailWidth = 250;
        const thumbnailTranslate = -(thumbnailWidth * props.currentPictureIndex);
        return 'translateX(' + thumbnailTranslate + 'px)';
    }

    return (
        <div className="picture-gallery__thumbnails">
            <ul className="picture-gallery__thumbnails-items" style={{ transform: getThumbnailsTransform() }}>
                {props.pictures.map((picture, index) => {
                    let thumbnailItemClass = 'picture-gallery__thumbnails-item';
                    if (props.currentPictureIndex === index) {
                        thumbnailItemClass += ' picture-gallery__thumbnails-item--current';
                    }
                    return (
                        <li className={thumbnailItemClass} onClick={() => handleThumbnailClick(index)}>
                            <img className="picture-gallery__thumbnail" src={picture}/>
                            <div className="picture-gallery__thumbnail-overlay"/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default PictureGalleryThumbnails;
```

### Setting the clicked thumbnail as current picture to show
Now that the user can click in a thumbnail and we are propagating the index of the picture that is being clicked, we can use that in our PictureGallery component to set the index of the picture that we want to show.

At this point your PictureGallery component should look like this

```js
import { useState } from 'react';

import PictureGalleryControls from './PictureGalleryControls';
import PictureGalleryCanvas from './PictureGalleryCanvas';
import PictureGalleryThumbnails from './PictureGalleryThumbnails';

import './PictureGallery.css';

function PictureGallery(props) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const getValidPictureIndex = (pictureIndex) => {
        if (pictureIndex < 0) {
            return props.pictures.length - 1;
        }

        if (pictureIndex > props.pictures.length -1) {
            return 0;
        }

        return pictureIndex;
    }

    const handleOnThumbnailClick = (pictureIndex) => {
        setCurrentPictureIndex(pictureIndex);
    };

    const handleOnPreviousPicture = () => {
        setCurrentPictureIndex(getValidPictureIndex(currentPictureIndex - 1));
    };

    const handleOnNextPicture = () => {
        setCurrentPictureIndex(getValidPictureIndex(currentPictureIndex + 1));
    };

    return (
        <div className="picture-gallery">
            <PictureGalleryCanvas picture={props.pictures[currentPictureIndex]}/>
            <PictureGalleryControls onPreviousPicture={handleOnPreviousPicture} onNextPicture={handleOnNextPicture}/>
            <PictureGalleryThumbnails
                currentPictureIndex={currentPictureIndex}
                pictures={props.pictures}
                onThumbnailClick={handleOnThumbnailClick}
            />
        </div>
    );
}

export default PictureGallery;

```
