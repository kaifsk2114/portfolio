# Premium Engineering Portfolio — Static Website

A complete, responsive multi-page personal website with a modern editorial design. It uses **plain HTML, CSS and JavaScript** and needs **no paid service, API key, Node.js, or build system**.

## Open the website

Double-click `index.html` in a browser, or use **VS Code → Live Server**. Navigation works locally and after uploading to GitHub Pages.

## Edit your details (important)

Open **`assets/js/data.js`** in VS Code or Notepad. All the content is in this one file. Change:

- `name`, `initials`, `headline`, `role`, `intro`, `aboutIntro`, `location`, `philosophy`;
- `email`, `github`, `linkedin`, `youtubeVideo` (add *your real* public links);
- `resume` and `avatar` (optional local files);
- `education`, `skillGroups`, `projects`, `blogs`.

**Please check and personalize the prefilled engineering projects and article drafts before publishing them as your own work.** They were assembled as editable starting points. The two article drafts have a clearly marked draft label until you change their `date` fields. Do not claim that projects or experience belong to you if they don't.

To use a local image, add the file to `assets/images/` and set `avatar: 'assets/images/profile.jpg'`. For project photos, set `image: 'assets/images/your-project.jpg'` in the appropriate project. For the résumé, add `assets/resume.pdf` and set `resume: 'assets/resume.pdf'`. **Local assets paths and public HTTPS links are supported.** A Google Drive HTTPS résumé link also works.

## Publishing for free on GitHub Pages

1. Create a free GitHub account or sign in.
2. Create a new **public** repository named `my-portfolio`.
3. Upload `index.html`, `about.html`, `projects.html`, `blogs.html`, `links.html`, the `assets` directory, and `README.md` to the repository root. Commit the files.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose `main` and `/ (root)`, then Save.
5. Once published, visit `https://YOUR-USERNAME.github.io/my-portfolio/` and check all links and pages, on both desktop and mobile.

> No GitHub repo, LinkedIn account, YouTube video, email address, or résumé link was fabricated. The interface clearly says when a link has not been added.

## Assignment checklist

The supplied coursework brief requires **About Me, Blogs, Technical Projects, and Links to Other Accounts**, and also asks for:

- A résumé PDF and professional contact information;
- At least **two** projects with problem, concepts, output/screenshot, *working* GitHub code links and READMEs;
- At least **two original** blogs (150–300 words each) with **your own photos**;
- LinkedIn, GitHub and a **2–5 minute** self-introduction YouTube video;
- A public site that works on mobile and preserves academic honesty.

The portfolio contains pages, examples, and editorial article drafts. **You still need to supply your real project code links, photos, personal blog experiences, resume and video** for full coursework compliance. The coursework brief specifies Google Sites, while this is a coded GitHub Pages website. **Ask the instructor whether HTML/GitHub Pages is acceptable before submitting it in place of Google Sites.**

## Adjusting styles

Edit `assets/css/styles.css`. Colors are defined in the `:root` variables near the top. There is a built-in dark/light theme toggle; users' selection is saved in their browser.

## Accessibility and behavior

- Responsive desktop, tablet, and mobile layouts;
- Keyboard-focus styles and skip-to-content link;
- Reduced-motion handling, accessible project details dialogs, and mobile menu;
- Client-side project category filtering;
- No tracking scripts or form submissions;
- Theme toggle persists to localStorage.

## License / use

Template is for personal use and editing. Keep your descriptions, blog photos and repository code original and accurate.
