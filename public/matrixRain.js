
window.startTheMatrix = function (toggle) {

    const characters = `日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789Z"'=:.+<>|_ç`;
    const length = 60;
    
    function makeLine() {
      const snippet = document.createElement('div');
      snippet.className = 'rain-drop';
      snippet.style.left = `${Math.round(Math.random() * 99)}%`;
      // Ensure #code is available before appending
      const codeElement = document.querySelector('#code');
      if (codeElement) {
        codeElement.appendChild(snippet);
      }
      let counter = 0;
      var i = setInterval(() => {
        snippet.innerHTML += characters[Math.round(Math.random() * (characters.length - 1))];
        counter++;
        if (counter > (length * .90)) { //starts the fade when 1 second is left
            snippet.classList.add('fade-out');
        }
        if (counter > length) {
            clearInterval(i);
            snippet.remove();
        }
      }, 100);
    }

    function startRain() {
        makeLine();
        makeLine();
        makeLine();
        makeLine();
        makeLine();
        setInterval(() => {
          makeLine();
        }, 150);
      
    }
  
    const clearAndResetDoc = (message) => {
      document.body.innerHTML = `
      <style>
      html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          background: black;
      }
      #code {
          font-family: 'Ubuntu Mono', monospace;
          color: #00FF41;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
      }
      .rain-drop {
          position: absolute;
          top: 0;
          width: 1rem;
          writing-mode: vertical-lr;
          text-orientation: upright;
          white-space: nowrap;
          background: linear-gradient(transparent 10%, #008F11 50%, #00FF41 96%, white 3rem);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(1px 1px 1px #008F11);
          font-weight: bold;
          opacity: 1;
          transition: 1s ease-out;
      }
      .fade-out {
          opacity: 0;
      }
      #youtubeVideo {
          z-index: 1000; /* High z-index to ensure visibility */
      }
      </style>
      <div id="code"></div>
      <div style="position: absolute; bottom: 10px; width: 100%; text-align: center; z-index: 10;">
          <iframe id="youtubeVideo" width="560" height="315"
          src="https://www.youtube.com/embed/eH7qfq_KkVM?autoplay=1&controls=1&loop=1&mute=1&playlist=eH7qfq_KkVM"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen title="YouTube video player"></iframe>
      </div>
      <h1 id="message" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">${message}</h1>
      `;
  
      startRain(); // Moved startRain here to ensure it runs after the DOM update
    };
  
    if(toggle){
      clearAndResetDoc(''); // Always clear and reset to ensure #code is present
      console.log('toggle')
    } else {
      window.location.reload()
    }
  }
  