# EcoLogic
So, in this project I learned how to make **fixed pictures as a wallpaper** in websites with the text on it. What about other aspects, it was just a chance to check my opportunities and to practice. It was a good experience in making website layout and using bootstrap features in positioning.
___

## Fixed picture as a wallpaper
#### Html
```html
<div id="main">
	<div class="imfix">
		<div class="cont-img">
			<div class="imag">

			</div>
		</div>
	</div>

	<div class="text-center col-10 offset-1 capt">
		...
	</div>	
</div>
```
#### Css
```css
.imfix {
   position: relative;
   display: table;
   left: 0;
   top: 0;
   width: 100%;
   height: 100vh;
}

.cont-img {
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   will-change: transform;
}

.imag {
   position: fixed;
   display: table;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-size: cover;
   will-change: transform;
   background-image: url(...);
   filter: brightness(50%);
}

.capt {
   position: absolute;
   top: 40%;
}
```
