module.exports = {
  siteMetadata: {
    title: 'Mangu | A Gatsby + Netlify CMS Demo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      // make sure to keep it last in the array
      resolve: 'gatsby-plugin-netlify',
      options: {
        /*This affects every page that we actually build*/
        allPageHeaders: [
          "Content-Security-Policy: default-src 'none'; connect-src links.services.disqus.com aagamamusic.report-uri.com; font-src 'self' cdnjs.cloudflare.com fonts.gstatic.com; frame-src disqus.com c.disquscdn.com www.google.com www.youtube.com; img-src 'self' c.disquscdn.com referrer.disqus.com www.gstatic.com data:; script-src 'self' c.disquscdn.com disqus.com mangu.disqus.com www.google.com www.gstatic.com cdnjs.cloudflare.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' c.disquscdn.com cdnjs.cloudflare.com fonts.googleapis.com; form-action 'none'; base-uri 'self'; upgrade-insecure-requests; report-uri https://aagamamusic.report-uri.com/r/d/csp/enforce",
        ],
        headers: {
          /*This afffects every page requested, even malicious requests and 404s*/
          "/*": [
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
            "Content-Security-Policy: default-src 'none'; report-uri https://aagamamusic.report-uri.com/r/d/csp/enforce",
            "Expect-CT: max-age=86400, enforce, report-uri='https://aagamamusic.report-uri.com/r/d/ct/enforce'",
            "Feature-Policy: vibrate 'none';  microphone 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'self'; fullscreen 'self'; payment 'self'; usermedia 'self'; sync-xhr 'self'; geolocation 'self'; midi 'self'; notifications 'self'; push 'self';",
            "A-Music-Hacker: '0___0 If you are reading this, send a message to someone[at]example[dot]com and mention this header.'",
          ],
          /*Just the Netlify CMS Admin panels*/
          "/admin/*": [
            "Cache-Control: must-revalidate, no-cache, no-store, pre-check=0, post-check=0, max-age=0, s-maxage=0",
            "Content-Security-Policy: default-src 'self'; font-src 'self' https://fonts.gstatic.com; frame-src https://www.youtube.com; connect-src 'self'; img-src 'self' https://raw.githubusercontent.com; media-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; report-uri https://aagamamusic.report-uri.com/r/d/csp/report;",
            "Expires: 0",
            "Pragma: no-cache",
            "X-Robots-Tag: noindex,nofollow",
          ],
          /*News posts (which contain disqus comment sections)*/
          "/news/*": [
            "Cache-Control: no-cache",
          ],
        },
      }
    }
  ],
}
