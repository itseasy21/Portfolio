# Portfolio

## Sections

- Home
- Education and Certificates
- Experience
- Projects
- Contact and Resume

## How To Use

- Clone this repository (or fork, then clone your fork :) )
- Run `npm i`
- Check it out using `npm start`

## How Do I Customize

- Replace `homepage` in package.json to your domain name or `https://<username>.github.io`
- In `src/portfolio.js` you can add your personal portfolio details.
- In `src/theme.js` you can change the theme colors. You can change between Light and Dark theme with the theme switch on the header.

## Deployment

### GitHub Pages

- Run `npm run deploy` to deploy to GitHub Pages

### Cloudflare Pages

1. Make sure you have installed the Wrangler CLI:
   ```
   npm install -g wrangler
   ```
2. Authenticate with Cloudflare:
   ```
   wrangler login
   ```
3. Deploy your portfolio:
   ```
   npm run deploy:cloudflare
   ```
4. Alternatively, connect your GitHub repository to Cloudflare Pages for automatic deployments when you push changes.

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)
- [fleek](https://fleek.co/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# References

Based on https://github.com/ashutosh1919/masterPortfolio/, https://github.com/saadpasta/developerFolio and https://github.com/harikanani/PortfolioV2
Illustrations: https://undraw.co/
