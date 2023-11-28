---
eleventyNavigation:
    key: Code
    parent: Typography
    order: 4
---
## The JETSansDigital Fontpack
On JET platforms, we use our custom font `JETSansDigital`. The full fontpack for these fonts [can be downloaded here](https://d30v2pzvrfyzpo.cloudfront.net/fonts/jetsansdigital-fontpack.zip). We recommend that you use the fonts via CDN and they are all available on these links:

```shell
# For the base subset
# Switch out *Regular* for *Bold* or *ExtraBold*. woff and woff2 files are available
https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2

# For the base subset
# Switch out *Regular* for *Bold* or *ExtraBold*. woff and woff2 files are available
https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised-extended.woff2
```

This fontpack includes Regular, Bold and ExtraBold variations (in `.woff` and `.woff2` formats) for the following subsets:

- `base-subset` – this is an optimised subset of JETSansDigital. This is a subset created using the Google font Latin subset of characters, covering languages such as English, French, Spanish and German.

{% contentPageImage {
src:"../../../assets/img/foundations/typography/jetsans-base-subset.png",
alt: "Wakamai Fondue font specification for JETSans Digital – the base subset"
} %}

- `extended-subset` – this is an extended subset of JETSansDigital, which contains the characters for all languages supported across JET (including Cyrillic and Hebrew).

{% contentPageImage {
src:"../../../assets/img/foundations/typography/jetsans-extended-subset.png",
alt: "Wakamai Fondue font specification for JETSans Digital – the extended base subset. The subset is approximately double the size, containing more characters, glyphs, layout features and languages."
} %}

For more details on font optimisation and how we subset our fonts, check out the `Font Optimisation` section below.

---

## Font loading

On the Just Eat and Menulog platform we use our custom font `JETSansDigital`, of which we currently use three weights: Regular, Bold and ExtraBold.

For any platform wanting to consume these fonts, we recommend implementing them using the [Critical FOFT with Preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload) technique as outlined by Zach Leat. A working demo of this loading strategy can be found on [Codepen](https://codepen.io/ashleynolan/pen/gOrMpex).

The basic strategy is to load in the `JETSansDigital-Regular` webfont as soon as possible. A faux bold is applied to this regular font while we lazy load in the `JETSansDigital-Bold` and `JETSansDigital-ExtraBold` webfonts, which then re-renders the faux bold as the intended bold typeface.

### Implementation

**1. Add the following code into the** `<head>` **of your application.**

  ```html
  <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2" as="font" type="font/woff2" crossorigin>
  <style>
  @font-face {
      font-family: JETSansDigital;
      src: url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2') format("woff2"),
      url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff') format("woff");
      font-weight: 400;
      font-display: swap;
  }
  body {
      font-feature-settings: "tnum"; /* Enable tabular numbers */
  }
  </style>
  ```

  The first `link` tag will load in the `JETSansDigital-Regular` font file. The `rel=preload` attribute tells the browser to download and cache it as soon as possible.

  The `@font-face` declaration is then to apply the `JETSansDigital` font as soon as it's available (and as it's inline in the `head` of the page, it won't wait for the rest of the CSS to be parsed until it renders the font).

**2. Add the following JS as an inline** `<script>` **block at the end of your HTML (just before your main JS bundle for example).**

  ```js
  (function () {
    var boldFontUrls = 'url("https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff2") format("woff2"), url("https://d30v2pzvrfyzpo.cloudfront.net/fonts/   JETSansDigital-Bold-optimised.woff") format("woff")';
    var extraboldFontUrls = 'url("https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-ExtraBold-optimised.woff2") format("woff2"), url("https://d30v2pzvrfyzpo.cloudfront.net/fonts/   JETSansDigital-ExtraBold-optimised.woff") format("woff")';

    if ('fonts' in document) {
      var bold = new FontFace('JETSansDigital', boldFontUrls, { weight: '700' });
      var extrabold = new FontFace('JETSansDigital', extraboldFontUrls, { weight: '800' });

      Promise.all([bold.load(), extrabold.load()])
        .then(function (fonts) {
          fonts.forEach(function (font) {
            document.fonts.add(font);
          }
        );
      })
      .then(function () {
        document.documentElement.classList.add('webfonts-loaded');
      });
    }

    // This next block is for IE11 and old Edge support, which don't support the new Font loading API
    if(!('fonts' in document) && 'head' in document) {
      // Awkwardly dump the second stage @font-face blocks in the head
      var style = document.createElement('style');
      // Note: Edge supports WOFF2
      style.innerHTML = '@font-face { font-family: JETSansDigital; font-weight: 700; src: ' + boldFontUrls + '; }';
      style.innerHTML += ' @font-face { font-family: JETSansDigital; font-weight: 800; src: ' + extraboldFontUrls    + '; }';
      document.head.appendChild(style);
      document.documentElement.classList.add('webfonts-loaded');
    }
  })();
  ```

  This lazily loads in the `JETSansDigital-Bold` and `JETSansDigital-ExtraBold` fonts to take over from the faux bold rendering of the regular font.

  N.b. You should also put the two webfont URLs into your service worker so that they are cached at browser level, saving additional requests on repeat visits.

**3. You should now be able to use the** `JETSansDigital` **font when defining your** `font-family` **in CSS**

If you use `fozzie`, this will automatically get set as part of the typography styles. If not, then you will need to set `font-family: 'JETSansDigital';` in your CSS to use it. Bold uses the same font-family with `font-weight: 700;`, with ExtraBold assigned to `font-weight: 800;`.


---

## Font Optimisation (subsetting)

We currently use the JETSansDigital font on JET platforms: a custom typeface created for use on our products.

The standard fontset comes with a huge number of glyphs and layout features that aren't required for use on the web. Therefore we optimise this fontset using a process called font-subsetting. Subsetting is the process of removing parts of the base fontset, to leave only the glyphs and features that you require.

For reference, the JETSans Digital Regular font has the following properties when inspected using the [Wakamai Fondue tool](https://wakamaifondue.com/):

{% contentPageImage {
src:"../../../assets/img/foundations/typography/jetsansdigital-base.png",
alt: "Overview of the main font specification for JETSans Digital. This is much larger in size than the optimised subsets as it contains even more characters, glyphs, layout features and languages."
} %}


### How to subset a font

To subset a base font like the one we use, you will need to use a command line tool called `pyftsubset` which is available as part of the fonttools library. For more information on installing `pyftsubset`, see this blog post which explains how to do that and covers any associated dependencies you'll also need (such as `pip`).

Once you have `pyftsubset` installed you can optimise your font!

For JETSansDigital, we subset `JETSansDigital-Regular.ttf`, `JETSansDigital-Bold.ttf` and `JETSansDigital-ExtraBold.ttf`, with the following rules:

```sh
# JETSansDigital-Regular
pyftsubset "JETSansDigital-Regular.ttf" --output-file="JETSansDigital-Regular-optimised.woff2" --flavor=woff2 --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD

# JETSansDigital-Bold
pyftsubset "JETSansDigital-Bold.ttf" --output-file="JETSansDigital-Bold-optimised.woff2" --flavor=woff2 --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD

# JETSansDigital-ExtraBold
pyftsubset "JETSansDigital-ExtraBold.ttf" --output-file="JETSansDigital-ExtraBold-optimised.woff2" --flavor=woff2 --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD

# And to generate .woff files for legacy browsers
# JETSansDigital-Regular
pyftsubset "JETSansDigital-Regular.ttf" --output-file="JETSansDigital-Regular-optimised.woff" --flavor=woff --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD

# JETSansDigital-Bold
pyftsubset "JETSansDigital-Bold.ttf" --output-file="JETSansDigital-Bold-optimised.woff" --flavor=woff --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD

# JETSansDigital-ExtraBold
pyftsubset "JETSansDigital-ExtraBold.ttf" --output-file="JETSansDigital-ExtraBold-optimised.woff" --flavor=woff --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
```

and for our extended subset, we use the following extended unicode settings:

```sh
# JETSansDigital-Regular
pyftsubset "JETSansDigital-Regular.ttf" --output-file="JETSansDigital-Regular-optimised-extended.woff2" --flavor=woff2 --layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD,U+0100-017F,U+0400-04FF,U+0401,U+0451,U+0404,U+0454,U+0406,U+0456,U+0407,U+0457,U+040D,U+045D,U+040E,U+045E,U+0490,U+0491,U+0590-05FF
```

### Breaking the command down

So what do the above commands actually do and what does each setting mean?

Let's break it down step-by-step:

- `pyftsubset "JETSansDigital-Regular.ttf" --output-file="JETSansDigital-Regular-optimised.woff2"`

  This runs the pyftsubset tool on the `JETSansDigital-Regular.ttf` file and outputs the results file as `JETSansDigital-Regular-optimised.woff2`.

- `--flavor=woff2`

  Optimise the file in `woff2` format (can be set to `woff` to output the file as a woff, as well as needing to change the `--output-file` value).

- `--layout-features=ccmp,locl,mark,mkmk,kern,dnom,numr,frac,tnum`

  Keeps the specified layout features as part of the sub-setted font. For more details on each of these layout features, check out the following resources:

  - [`ccmp`](https://docs.microsoft.com/en-us/typography/opentype/spec/features_ae#ccmp) – This feature permits composition/decompostion of glyphs.
  - [`locl`](https://www.preusstype.com/techdata/otf_locl.php) – Allow localised variants of specific letters/glyphs.
  - [`mark`](https://docs.microsoft.com/en-us/typography/opentype/spec/features_ko#tag-mark) – Positions mark glyphs with respect to base glyphs.
  - [`mkmk`](https://docs.microsoft.com/en-us/typography/opentype/spec/features_ko#tag-mkmk) – Positions mark glyphs with respect to other marks.
  - [`kern`](https://www.preusstype.com/techdata/otf_kern.php) – Adjusts the amount of space between glyphs, generally to provide optically consistent spacing between glyphs.
  - [`dnom`](https://www.preusstype.com/techdata/otf_dnom.php) – Short for denominators, this replaces selected figures which follow a slash with denominator figures.
  - [`numr`](https://www.preusstype.com/techdata/otf_numr.php) – Short for numerators, this replaces selected figures which precede a slash with numerator figures, and replaces the typographic slash with the fraction slash.
  - [`frac`](https://www.preusstype.com/techdata/otf_frac.php) – Short for fractions, this replaces figures separated by a slash with 'common' (diagonal) fractions.
  - [`tnum`](https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures) – Short for tabular figures, this deals with number spacing.


- `--unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`

  Specifies which characters to include as part of our optimised set. This character set is the same as those specified by Google font sets – more information on which [can be found in this blog post](https://markoskon.com/creating-font-subsets/#characters).
