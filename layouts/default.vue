<template>
  <div class="site-wrapper">
    <Navbar />

    <main id="main" class="main" role="main">
      <nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono|Poppins:200,500,600,700,900&display=swap');
@import '../assets/scss/syntax.scss';

* {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

html {
  font-size: 20px;
  word-spacing: 1px;
}

html,
body {
  margin: auto;
  max-width: 760px;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  color: #252525;
  font-family: 'Karla', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
  margin-bottom: 0;
  font-weight: 700;
}

h1 {
  font-size: 2.4rem;
  margin-top: 6rem;

  & + p {
    margin-top: 0.6rem;
  }
}
h2 {
  font-size: 1.8rem;
  margin-top: 2rem;

  & + p {
    margin-top: 0.6rem;
  }
}
h3 {
  font-size: 1.5rem;
  margin-top: 1.8rem;

  & + p {
    margin-top: 0.6rem;
  }
}
h4 {
  font-size: 1.2rem;
  margin-top: 1.6rem;

  & + p {
    margin-top: 0.6rem;
  }
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #4a5568;
  text-align: justify;
  line-height: 1.4;
}

a {
  color: #0069ff;
  text-decoration: none;
  transition: color 80ms ease-in, box-shadow 130ms ease-in-out,
    -webkit-box-shadow 130ms ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 currentcolor, 0 3px 0 currentcolor;
  }
}

strong {
  font-weight: 700;
}

blockquote {
  margin: 0;

  p {
    margin-bottom: 16px;
  }
}

img {
  border-radius: 0.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
}

pre[class*='language-'] {
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  background: #2f3640;
  overflow-x: scroll;

  code {
    background: inherit;
    color: #f6f8fa;
    line-height: 1 !important;
  }
}

code {
  font-family: 'Ubuntu Mono', sans-serif !important;

  * {
    font-family: inherit;
  }
}

code:not([class^='language-']) {
  background-color: #e2e8f0;
  color: #0069ff;
  border-radius: 0.25rem;
  padding: 2px 4px;
}

@media screen and (max-width: 768px) {
  .post-content img {
    width: 100vw;
    max-width: 100vw;
    margin-left: -20px;
    border-radius: 0px !important;
  }

  pre[class*=' language-'] {
    width: 100vw;
    max-width: 100vw;
    margin-left: -20px;
    border-radius: 0px !important;
  }
}

ul {
  color: #4a5568;
  padding-left: 1rem;
  font-size: 0.8rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 1.6rem;
  padding-left: 2rem;
  list-style: disc;
}

::-moz-selection {
  background: #e5e5e5;
}
::selection {
  background: #e5e5e5;
}

main {
  padding-top: 40px;
  padding-bottom: 10px;

  @media (max-width: 567px) {
    padding: 64px 0;
  }
}

// Transitions
.fade-enter-active {
  animation: acrossIn 0.2s ease-out both;

  @media (max-width: 567px) {
    animation: none;
  }
}
.fade-leave-active {
  animation: acrossOut 0.2s ease-in both;

  @media (max-width: 567px) {
    animation: none;
  }
}
@keyframes acrossIn {
  0% {
    opacity: 0;
    transform: translateX(-64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes acrossOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(64px);
  }
}
</style>
