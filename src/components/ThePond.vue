<template>
  <div>
    <body>
      <h1>⸨ POND ⸩</h1>
      <pre>{{pondGo}}</pre>
      <label>viewing angle:<input max="1" min="0.2" step="0.1" type="range" value="0.2" /></label>
      <h1>{{msg}}</h1>
    </body>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        msg: 'Toss a coin in the pond'
      }
    },
    computed: {
      pondGo: function () {
      window.addEventListener('load', _ => {
  const FONT_SIZE = '72px';
  const FONT_FAMILY = 'monospace';

  // ctx.measureText() only returns width for now, so we'll just place characters
  // into a dummy span element and measure their approximate size.
  const span = document.createElement('span');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const chars = Array.from({length: 95}, (_, i) => String.fromCharCode(i + 32));

  span.style.font = `${FONT_SIZE} "${FONT_FAMILY}"`;
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  document.body.appendChild(span);

  const {w: maxWidth, h: maxHeight} = chars.reduce((max, char) => {
    span.textContent = char;
    const {width, height} = span.getBoundingClientRect();
    return {w: Math.max(max.w, width), h: Math.max(max.w, height)};
  }, {w: 0, h: 0});

  document.body.removeChild(span);

  const horizontalPadding = maxWidth / 4;
  const verticalPadding = maxHeight / 4;
  const fullWidth = canvas.width = maxWidth + 2 * horizontalPadding;
  const fullHeight = canvas.height = maxHeight + 2 * verticalPadding;

  ctx.font = `${FONT_SIZE} "${FONT_FAMILY}"`;
  ctx.textBaseline = 'top';

  function getPixelWeight (char) {
    ctx.clearRect(0, 0, fullWidth, fullHeight);
    ctx.fillText(char, horizontalPadding, verticalPadding);
    // r, g, b channels will always be 0. Transparent pixels will have an alpha
    // channel of 0. So by summing `data`, we're summing the opacity of all filled-in
    // pixels. This is wildly inefficient but it gives us a dead simple, reliable
    // measure of relative size.
    return ctx.getImageData(0, 0, fullWidth, fullHeight).data.reduce((a, b) => a + b);
  }

  const sortedChars = chars
    .map(char => ({char, weight: getPixelWeight(char)}))
    .sort(({weight: a}, {weight: b}) => a - b)
    .map(({char}) => char)
    ;

    const {sin, cos, pow} = Math;
    const [w, h] = [100, 40];

    // Get references to DOM nodes.
    const slider = document.querySelector('input');
    const pre = document.querySelector('pre');

    // Hook the slider up.
    let viewingAngle = slider.value;
    slider.addEventListener('input', () => viewingAngle = slider.value);

    // Main draw loop.
    !(function draw (t) {
      pre.textContent = Array.from({length: h}, (_, y) => Array.from({length: w}, (_, x) => sortedChars[
        Math.round(Math.abs(sin(

          (t - pow(
            (viewingAngle*pow(x-w/2, 2) + pow(y-h/2, 2)
          ), .7)) / 18

        )) * (sortedChars.length - 1))]
    ).join(' ')).join('\n');

      requestAnimationFrame(draw.bind(null, t + 1));
    })(0);
});

    },
  }
}
</script>

<style scoped>
  body {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font: 8px monospace;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
}

h1 {
  display: inline-block;
  font-size: 3em;
  color: #efefef;
}
h1:hover, h1:hover + pre, h1:hover + pre + label {
  color: blue;
}

pre {
  margin: 0;
}

label, input {
  margin-top: 1.5em;
  display: block;
}

label {
  font-size: 16px;
}

input {
  margin-right: auto;
  margin-left: auto;
}
</style>
