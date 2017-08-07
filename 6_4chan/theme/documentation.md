# Degenerate Theme

[Jump to the pre-made colour schemes based on 4chan's themes.](#colour-schemes)

## Options

- Banner (image)
- Background (color)
- Gradient Top (color)
- Gradient Bottom (color)
- Title (color)
- Text (color)
- Link (color)
- Link Hover (color)
- Reply (color)
- Lines (color)
- Post Title (color)
- Names (color)
- Button Background (color)
- Button Border (color)
- Meme Arrows (color)
- Font (font)
- Gradient Background (boolean)
- Anonymous (boolean)
- Spoiler Text (boolean)
- Borders (boolean)
- Infinite Scroll (boolean)
- Yotsuba Favicon (boolean)
- Font Size (number)

Default styling is 4chan's Yotsuba theme. Option explanations and additional information below. 

### Banner 

Can be any image and size you want. Make it 300px by 100px if you want it to look like 4chan. Default to the Calvin picture.

### Background 

Make this the same as `Gradient Bottom` if you have `Gradient Background` turned on. Just to support IE6 and the like.

### Reply

Background of replies to a post, post notes on permalink page, and pagination. 

### Lines

Color of borders.

### Post Title

Color of text in post titles.

### Names

Color of OP's name; either 'Anonymous' or ReblogRootName.

### Button Background

Background of the post toggle buttons.

### Button Outline

Outline of the post toggle buttons.

### Meme Arrows

Color of `>quoted` text. Default is 4chan styling. I don't recommend changing this.

### Font

A selection of fonts. Many of them are bad. I suggest using Georgia, Helvetica, Lucida Sans, or Verdana.

### Gradient Background

Switches between regular background and background with a gradient. Default ON.

### Anonymous

Switches between using 'Anonymous' and the name of the OP in the name field. Default ON.

### Spoiler Text

If ON, `<s>`, `<strike>`, `<del>` are rendered like 4chan spoilers. Default ON.

### Borders

Toggles borders on post replies, post notes, and pagination. Default ON.

### Infinite Scroll

Toggles infinite scroll, which only works on the first page (that's how it is on 4chan). Default ON.

### Yotsuba Favicon

Toggles between the default 4chan favicon and your tumblr avatar for the favicon. Default ON.

### Font Size

A number of pixels, default 13. Do NOT write units. 

## Colour Schemes

- [Yotsuba](#yotsuba)
- [Yotsuba B](#yotsuba-b)
- [Tomorrow](#tomorrow)
- [Photon](#photon)
- [Futaba](#futaba)
- [Burichan](#burichan)

### Yotsuba

- Background: #ffffee
- Gradient Top: #fed6ae
- Gradient Bottom: #ffffee
- Title: #800000
- Text: #800000
- Link: #0000ee
- Link Hover: #dd0000
- Reply: #f0e0d6
- Lines: #d9bfb7
- Post Title: #cc1105
- Names: #117743
- Button Background: #9f403b
- Button Border: #800201
- Meme Arrows: #789922
- Font: Helvetica
- Gradient Background: ON
- Borders: ON
- Yotsuba Favicon: ON
- Font Size: 13

Note: Yotsuba is the default colour scheme, so if you want it, just re-install the theme.

### Yotsuba B

- Background: #edf1ff
- Gradient Top: #d1d5ee
- Gradient Bottom: #edf1ff
- Title: #af0a0f
- Text: #000000
- Link: #34345c
- Link Hover: #dd0000
- Reply: #d6daf0
- Lines: #b7c5d9
- Post Title: #0f0c5d
- Names: #117743
- Button Background: #8993cd
- Button Border: #0e0b5d
- Meme Arrows: #789922
- Font: Helvetica
- Gradient Background: ON
- Borders: ON
- Yotsuba Favicon: ON
- Font Size: 13

### Tomorrow

- Background: #1d1f21
- Title: #c5c8c6
- Text: #c5c8c6
- Link: #81a2be
- Link Hover: #5f89ac
- Reply: #282a2e
- Lines: #282a2e
- Post Title: #b294bb
- Names: #c5c8c6
- Button Background: #2b2b2b
- Button Border: #383838
- Meme Arrows: #789922
- Font: Helvetica
- Gradient Background: OFF
- Borders: ON
- Yotsuba Favicon: ON
- Font Size: 13

### Photon

- Background: #eeeeee
- Title: #004a99
- Text: #333333
- Link: #ff6600
- Link Hover: #ff3300
- Reply: #dddddd
- Lines: #cccccc
- Post Title: #111111
- Names: #004a99
- Button Background: #0069d3
- Button Border: #003163
- Meme Arrows: #789922
- Font: Helvetica
- Gradient Background: OFF
- Borders: ON
- Yotsuba Favicon: ON
- Font Size: 13

### Futaba

Same as [Yotsuba ](#yotsuba)EXCEPT:

- Lines: #666666
- Borders: OFFF
- Font Size: 16

### Burichan

Same as [Yotsuba B](#yotsuba-b) EXCEPT: 

- Lines: #666666
- Borders: OFFF
- Font Size: 16

## Additional Information

There are a lot of scripts in this theme, because I had to make the markup look similar to that of 4chan's. Nonetheless, it shouldn't take *too* long to load and style.

This theme uses [unnest](http://neothm.com/post/148902138319/un-nest-tumblr-captions-a-plugin-by), a plugin by neothm and magnusthemes on tumblr. This plugin creates a lot of empty paragraphs, so I've written a simple loop to delete them all. If for some reason you use empty paragraph tags in your posts, and you're finding that they're being removed by my script, I suggest using `<br>` instead. 
