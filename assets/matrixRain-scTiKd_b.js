window.startTheMatrix=function(i){const n=`日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789Z"'=:.+<>|_ç`;function e(){const t=document.createElement("div");t.className="rain-drop",t.style.left=`${Math.round(Math.random()*99)}%`;const a=document.querySelector("#code");a&&a.appendChild(t);let o=0;var d=setInterval(()=>{t.innerHTML+=n[Math.round(Math.random()*(n.length-1))],o++,o>60*.9&&t.classList.add("fade-out"),o>60&&(clearInterval(d),t.remove())},100)}function r(){e(),e(),e(),e(),e(),setInterval(()=>{e()},150)}i?((t=>{document.body.innerHTML=`
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
      </style>
      <div id="code"></div>
      `,r()})(),console.log("toggle")):window.location.reload()};
