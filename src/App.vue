<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/servicios">Servicios</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    data: () => ({
    }),
    mounted() {
      $("#test").html("Hello world")
      const URLCss = [
        { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
        { href: '../assets/plugins/jquery-ui/jquery-ui.min.css' },
        { href: '../assets/plugins/bootstrap/css/bootstrap.min.css' },
        { href: '../assets/plugins/font-awesome/css/all.min.css' },
        { href: '../assets/plugins/animate/animate.min.css' },
        { href: '../assets/css/default/style.min.css' },
        { href: '../assets/css/default/style-responsive.min.css' },
        { href: '../assets/css/default/theme/default.css' },
        { href: '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css' },
        { href: '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css' },
        { href: '../assets/css/bootstrap-icons.css' }
      ];

      const URLJs = [
        { href: '../assets/plugins/jquery/jquery-3.3.1.min.js' },
        { href: '../assets/plugins/jquery-ui/jquery-ui.min.js' },
        { href: '../assets/plugins/bootstrap/js/bootstrap.bundle.min.js' },
        { href: '../assets/plugins/slimscroll/jquery.slimscroll.min.js' },
        { href: '../assets/plugins/js-cookie/js.cookie.js' },
        { href: '../assets/js/theme/default.min.js' },
        { href: '../assets/js/apps.min.js' },
        { href: '../assets/plugins/DataTables/media/js/jquery.dataTables.js' },
        { href: '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js' },
        { href: '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js' },
        { href: '../assets/js/demo/table-manage-responsive.demo.min.js' },
      ];

      for (const url of URLCss) {
          const Link = document.createElement('link');
          Link.setAttribute('href', url.href);
          Link.setAttribute('rel', 'stylesheet');
          Link.setAttribute('type', 'text/css');
          document.head.appendChild(Link);
      }

    //   for (const url of URLJs) {
    //       const Script = document.createElement('script');
    //       Script.setAttribute('type', 'text/javascript');
    //       Script.setAttribute('src', url['href']);
          
    //       document.body.appendChild(Script);
    //   }
    },
    methods: {
    }
  }
</script>


<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
