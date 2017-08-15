# pure CSS circular bar with animation

Description:

A pure CSS circular bar view with animation, based on André Firchow work. I translated to stylus, added some animation and used data attribute for the percentage.

How to use it:
	Load the cpbs.css in the document’s head section.

Add the html and set the data attribute "p" to your wanted percentage
```html
	<div class="c100" data-p="70">
		<div class="slice">
			<div class="second_half"></div>
			<div class="warp_first_half">
				<div class="first_half"></div>
			</div>
		</div>
	</div>
```

Overwrite size and color like so : 

```css
	.first_half,.second_half {
	border-color:black;
	border-width:20px;
	}
```

check it live here
	https://codepen.io/romainmalauzat/pen/XaKjVM