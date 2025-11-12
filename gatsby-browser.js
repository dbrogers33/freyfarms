/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// gatsby-browser.js
import "normalize.css"; // base first
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// optional: force layout settle on route change
export const onRouteUpdate = () => {
  // Nudge slick/gatsby-image after navigation
  window.requestAnimationFrame(() => {
    window.dispatchEvent(new Event("resize"));
    setTimeout(() => window.dispatchEvent(new Event("resize")), 120);
  });
};
