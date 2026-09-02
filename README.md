# wbstkr.me

[![Astro][astro-shield]][astro-url]
[![GitHub Pages][pages-shield]][pages-url]
[![Cloudflare][cloudflare-shield]][cloudflare-url]

Personal portfolio, project directory, and technical write-ups.

**[View Live Site](https://wbstkr.me)**

## Architecture & Stack

Built to prioritize lightweight static delivery and a strict zero-JS overhead where possible. 

* **Framework**: [Astro](https://astro.build/) (Static Site Generation)
* **Styling**: Vanilla CSS with scoped component styles. Themed via global CSS custom properties strictly adhering to a brutalist 3-color palette (`#FFF`, `#000`, `#00F`).
* **CI/CD**: Automated build and deployment pipeline via GitHub Actions to GitHub Pages.

## Project Structure

The UI is decoupled into reusable, scoped `.astro` components for modularity and maintainability:

* `src/layouts/Layout.astro` — Base HTML shell, global resets, and CSS custom properties.
* `src/components/` — Isolated UI elements (`Navbar`, `Footer`, `ProjectCard`, `WorkEntry`).
* `src/pages/` — File-based routing for the static build.

## Local Development

Standard Astro environment:

```sh
npm install
npm run dev
```

---

### Omar Faruque

[![GitHub][github-shield]][github-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Email][email-shield]][email-url]


<!-- Shields -->

[astro-shield]: https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro&logoColor=white
[astro-url]: https://astro.build

[pages-shield]: https://img.shields.io/badge/GitHub%20Pages-000000?style=for-the-badge&logo=github&logoColor=white
[pages-url]: https://pages.github.com/

[cloudflare-shield]: https://img.shields.io/badge/Cloudflare-0000FF?style=for-the-badge&logo=cloudflare&logoColor=white
[cloudflare-url]: https://www.cloudflare.com/

[github-shield]: https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/wbstkr

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0000FF?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/wbstkr

[email-shield]: https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=white
[email-url]: mailto:ofaruque245@gmail.com