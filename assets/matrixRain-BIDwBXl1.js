window.startTheMatrix=function(a){const i=`日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789Z"'=:.+<>|_ç`;function t(){const e=document.createElement("div");e.className="rain-drop",e.style.left=`${Math.round(Math.random()*99)}%`;const n=document.querySelector("#code");n&&n.appendChild(e);let o=0;var l=setInterval(()=>{e.innerHTML+=i[Math.round(Math.random()*(i.length-1))],o++,o>60*.9&&e.classList.add("fade-out"),o>60&&(clearInterval(l),e.remove())},100)}function r(){t(),t(),t(),t(),t(),setInterval(()=>{t()},150)}a?((e=>{document.body.innerHTML=`
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
      <h1 id="message" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">${e}</h1>
      `,r()})(""),console.log("toggle")):window.location.reload()};
