<template>
  <div class="layout">
    <slot/>
    <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Made with ❤️ by
        <a class="link" href="//twitter.com/lauragift21">Gift Egwuenu</a>
      </p>
    </div>
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid #fecd43;
  min-height: 100vh;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  border: 2px dashed #fecd43;
  padding: 7px;
  color: #333;
  text-decoration: none;
}
</style>

<script>
export default {
  mounted() {
    let twitterScript = document.createElement('script')
    twitterScript.async = true;
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(twitterScript)

    
    let codepenScript = document.createElement('script')
    codepenScript.async = true;
    codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
    
    let GistStyles = document.createElement('link')
    GistStyles.async = true;
    GistStyles.setAttribute('rel', 'stylesheet');
    GistStyles.setAttribute('href', 'https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css');
    document.head.appendChild(GistStyles);
  }
}
</script>