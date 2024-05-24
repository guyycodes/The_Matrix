import React, {useEffect} from 'react';
import { useColorMode, Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
// import MatrixRain from '';

// const script = document.createElement('script');
// script.src = '../../../public/matrixRain'; // Adjust the path to your script
// script.async = true;

export const CustomThemeSwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () =>{
      window.location.reload();
  }
  
  // we are trying to dynamically load a script that manipulates the DOM
  const enterTheMatrix = async (themeColor) => {
    try {
      await import('../../../public/matrixRain');
      if (themeColor !== 'dark' && window.startTheMatrix) {
        window.startTheMatrix(true);
        window.addEventListener('click', handleClick);
      } else {
        window.startTheMatrix(false);
      }
    } catch (error) {
      console.error('Failed to load matrixRain script:', error);
    }
  };
  // Define your CSS here, using template literals to include dynamic parts if necessary
  const switchStyles = css`
    * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }  
    :root {
      --hue: 223;
      --bg: hsl(var(--hue),90%,90%);
      --fg: hsl(var(--hue),90%,10%);
      --primary: hsl(var(--hue),90%,50%);
      --trans-dur: 0.4s;
      --trans-timing: cubic-bezier(0.83,0,0.17,1);
      font-size: calc(48px + (72 - 48) * (100vw - 320px) / (2560 - 320));
    }
    body,
    input {
      font: 1em/1.5 sans-serif;
    }
    body {
      backgroundColor: var(--bg);
     Color: var(--fg);
      display: flex;
      height: 100vh;
      transition:
        backgroundColor var(--trans-dur),
       Color var(--trans-dur);
    }
    .switch,
    .switch__input,
    .switch__scene {
      display: block;
      position: relative;
    }
    .switch,
    .switch__input {
      border-radius: 0.75em;
      -webkit-tap-highlightColor: transparent;
    }
    .switch {
      margin: 0;
    }
    .switch__input {
      background-image: linear-gradient(hsl(213,90%,60%),hsl(193,70%,60%));
      box-shadow: 0 0 0 0.125em hsla(var(--hue),90%,50%,0);
      cursor: pointer;
      outline: transparent;
      width: 4.5em;
      height: 2.2em;
      -webkit-appearance: none;
      appearance: none;
      transition: box-shadow 0.15s linear;

      margin: 0 auto;

    }
    .switch__input:focus-visible {
      box-shadow: 0 0 0 0.125em hsla(var(--hue),90%,50%,1);
    }
    .switch__input:before {
      backgroundColor: hsl(3,90%,50%);
      background-image: linear-gradient(hsla(253,90%,50%,1),hsla(253,90%,50%,0));
      border-radius: inherit;
      content: "";
      display: block;
      opacity: 0;
      position: absolute;
      width: inherit;
      height: inherit;
      transition:
        backgroundColor var(--trans-dur) var(--trans-timing),
        opacity var(--trans-dur) var(--trans-timing);
    }
    .switch__cloud,
    .switch__handle,
    .switch__handle-side,
    .switch__handle-side circle,
    .switch__moon-hole,
    .switch__star,
    .switch__star use,
    .switch__stars {
      transition:
        opacity var(--trans-dur) var(--trans-timing),
        transform var(--trans-dur) var(--trans-timing);
    }
    .switch__cloud {
      transform: translate(34px,9px);
      transform-origin: 4.5px 4px;
    }
    .switch__cloud:nth-of-type(2) {
      transform: translate(24px,13px) scale(0.8);
      transition-delay: 0.2s;
    }
    .switch__cloud:nth-of-type(3) {
      transform: translate(24px,5px) scale(0.6);
      transition-delay: 0.1s;
    }
    .switch__handle {
      transform: translate(12px,12px);
    }
    .switch__moon-hole {
      transform: translate(16px,0);
    }
    .switch__scene {
      pointer-events: none;
      position: absolute;
      top: .75rem;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0.5);
      
    }
    .switch__star,
    .switch__star use {
      transform-origin: 2px 2px;
    }
    .switch__star {
      transform: translate(28px,14px) scale(0) rotate(20deg);
    }
    .switch__star use {
      transform: scale(0);
    }
    .switch__star:nth-of-type(2) {
      transform: translate(21px,13px) scale(0) rotate(-20deg);
    }
    .switch__star:nth-of-type(3) {
      transform: translate(17px,10px) scale(0) rotate(20deg);
    }
    .switch__star:nth-of-type(4) {
      transform: translate(24px,6px) scale(0) rotate(-20deg);
    }
    .switch__star:nth-of-type(5) {
      transform: translate(31px,5px) scale(0) rotate(20deg);
    }
    .switch__stars {
      opacity: 0;
    }
    .switch__text {
      overflow: hidden;
      position: absolute;
      width: 1px;
      height: 1px;
    }

    /* Dark theme */
    :has(.switch__input:checked) {
      --bg: hsl(var(--hue),90%,10%);
      --fg: hsl(var(--hue),90%,90%);
    }
    .switch__input:checked:before {
      backgroundColor: hsl(223,90%,60%);
      opacity: 1;
    }
    .switch__input:checked + .switch__scene .switch__cloud {
      opacity: 0;
      transform: translate(34px,24px);
      transition-duration: 0.25s, var(--trans-dur);
      transition-delay: 0s;
    }
    .switch__input:checked + .switch__scene .switch__cloud:nth-of-type(2) {
      transform: translate(24px,24px) scale(0.8);
    }
    .switch__input:checked + .switch__scene .switch__cloud:nth-of-type(3) {
      transform: translate(24px,24px) scale(0.6);
    }
    .switch__input:checked + .switch__scene .switch__handle {
      transform: translate(36px,12px);
    }
    .switch__input:checked + .switch__scene .switch__handle-side:first-of-type circle:nth-of-type(2){
      transform: scale(0.75);
    }
    .switch__input:checked + .switch__scene .switch__handle-side:nth-of-type(2),
    .switch__input:checked + .switch__scene .switch__stars {
      opacity: 1;
    }
    .switch__input:checked + .switch__scene .switch__moon-hole {
      transform: translate(0,0);
    }
    .switch__input:checked + .switch__scene .switch__star {
      transform: translate(18px,14px) scale(1) rotate(-20deg);
    }
    .switch__input:checked + .switch__scene .switch__star use {
      transform: scale(1);
      transition:
        opacity var(--trans-dur) var(--trans-timing),
        transform 0.5s cubic-bezier(0.65,0,0.35,2);
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(2) {
      transform: translate(11px,13px) scale(0.8) rotate(20deg);
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(2),
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(2) use {
      transition-delay: 0.2s;
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(3) {
      transform: translate(7px,10px) scale(0.6) rotate(-20deg);
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(3),
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(3) use {
      transition-delay: 0.05s;
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(4) {
      transform: translate(14px,6px) scale(0.6) rotate(20deg);
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(4),
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(4) use {
      transition-delay: 0.15s;
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(5) {
      transform: translate(21px,5px) scale(0.4) rotate(-20deg);
    }
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(5),
    .switch__input:checked + .switch__scene .switch__star:nth-of-type(5) use {
      transition-delay: 0.1s;
    }

    /* Pristine state */
    :has(.switch--pristine),
    .switch--pristine *,
    .switch--pristine *:before {
      transition: none !important;
    }
  `;

  return (
    <Box css={switchStyles} background='transparent' alignContent='center' left={'50%'}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label className="switch">Toggle the switch
      <input 
        className="switch__input" 
        type="checkbox" 
        role="switch" 
        checked={colorMode === 'dark'} 
        onChange={() => {toggleColorMode(); enterTheMatrix(colorMode);}} 
        
      />
      
      {/* Embeded SVG */}
      <svg className="switch__scene" viewBox="0 0 48 24" width="48px" height="24px" aria-hidden="true" style={{ zIndex: '2' }}>
      <symbol id="switch-cloud" viewBox="0 0 10 6">
        <path d="m7.5,1c-.238,0-.463.049-.675.125-.55-.681-1.381-1.125-2.325-1.125-1.13,0-2.103.633-2.614,1.556-.124-.033-.251-.056-.386-.056-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5c.134,0,.262-.023.386-.056.511.924,1.484,1.556,2.614,1.556.943,0,1.775-.444,2.325-1.125.212.076.437.125.675.125,1.105,0,2-.895,2-2s-.895-2-2-2Z"/>
      </symbol>
      <symbol id="switch-star" viewBox="0 0 4 4">
        <path d="m2.277.172l.379.767c.045.091.132.154.233.169l.847.123c.253.037.355.348.171.527l-.613.597c-.073.071-.106.173-.089.273l.145.843c.043.252-.222.445-.448.326l-.757-.398c-.09-.047-.197-.047-.287,0l-.757.398c-.227.119-.491-.073-.448-.326l.145-.843c.017-.1-.016-.202-.089-.273L.094,1.758c-.183-.179-.082-.49.171-.527l.847-.123c.101-.015.188-.078.233-.169l.379-.767c.113-.23.441-.23.554,0Z"/>
      </symbol>
      <defs>
        <linearGradient id="switch-sun1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(18,90%,50%)" />
          <stop offset="1" stopColor="hsl(43,90%,50%)" />
        </linearGradient>
        <linearGradient id="switch-sun2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(43,90%,50%)" />
          <stop offset="1" stopColor="hsl(33,90%,50%)" />
        </linearGradient>
        <linearGradient id="switch-moon1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(213,90%,95%)" />
          <stop offset="1" stopColor="hsl(213,90%,85%)" />
        </linearGradient>
        <linearGradient id="switch-moon2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsla(213,90%,95%,0)" />
          <stop offset="1" stopColor="hsla(213,90%,95%,1)" />
        </linearGradient>
        <linearGradient id="switch-moon3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsla(213,90%,75%,1)" />
          <stop offset="1" stopColor="hsla(213,90%,75%,0)" />
        </linearGradient>
        <linearGradient id="switch-cloud1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsla(0,0%,100%,1)" />
          <stop offset="1" stopColor="hsla(0,0%,100%,0)" />
        </linearGradient>
      </defs>
      <g className="switch__stars" fill="hsl(213,90%,95%)">
        <g className="switch__star" transform="translate(28,14) scale(0)">
          <use href="#switch-star" width="4px" height="4px" />
        </g>
        <g className="switch__star" transform="translate(21,13) scale(0)">
          <use href="#switch-star" width="4px" height="4px" />
        </g>
        <g className="switch__star" transform="translate(17,10) scale(0)">
          <use href="#switch-star" width="4px" height="4px" />
        </g>
        <g className="switch__star" transform="translate(24,6) scale(0)">
          <use href="#switch-star" width="4px" height="4px" />
        </g>
        <g className="switch__star" transform="translate(31,5) scale(0)">
          <use href="#switch-star" width="4px" height="4px" />
        </g>
      </g>
      <g className="switch__handle" transform="translate(12,12)" >
        <g className="switch__handle-side">
          <circle r="10" fill="url(#switch-sun1)" />
          <circle r="6.5" fill="url(#switch-sun2)" />
        </g>
        <g className="switch__handle-side" opacity="0">
          <circle r="10" fill="url(#switch-moon1)" />
          <circle r="6.5" fill="url(#switch-moon2)" />
          <clipPath id="switch-moon-clip">
            <circle className="switch__moon-hole" r="1.5" cx="-6" cy="2" />
            <circle className="switch__moon-hole" r="1.5" cx="-1" cy="3" />
            <circle className="switch__moon-hole" r="2" cx="-1" cy="8" />
            <circle className="switch__moon-hole" r="1" cx="2" cy="0" />
            <circle className="switch__moon-hole" r="5" cx="8" cy="6" />
          </clipPath>
          <circle r="8" fill="url(#switch-moon3)" clipPath="url(#switch-moon-clip)" />
        </g>
      </g>
      <g fill="url(#switch-cloud1)">
        <use className="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(34,9)" />
        <use className="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(24,13) scale(0.8)" />
        <use className="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(24,5) scale(0.6)" />
      </g>
      </svg>
      <span className="switch__text">Dark Mode</span>
      </label>
      </div>
    </Box>
  );
};
