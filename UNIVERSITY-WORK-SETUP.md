# University Work — simple Google Drive setup

This version uses Google Drive links instead of a database or upload backend. It is intentionally simple: you upload files to Drive, then add public file links to `drive-work.js`.

## Add a public assignment
1. Upload the file to Google Drive (PDF, image, code file, PowerPoint, or ZIP).
2. Open Share for that file.
3. Set General access to **Anyone with the link** and role **Viewer**.
4. Copy the link.
5. Open `drive-work.js` and add an object inside `window.UNIVERSITY_WORK`, following this example:

```js
{
  title: "Data Structures Assignment 1",
  description: "Linked lists and basic operations.",
  academic_year: "Year 2",
  type: "PDF",
  file_name: "assignment-1.pdf",
  url: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  visibility: "public"
}
```

Use `type` values `PDF`, `Image`, `Code`, or `PowerPoint`. For multiple items, separate objects with commas. Save the file and redeploy the site with `index.html`, `style.css`, `script.js`, `drive-work.js`, and your CV PDF.

## Keep work private
Do not add private items to `drive-work.js`. In Google Drive, leave their access as **Restricted**. This static website does not authenticate an owner, so a `private` flag or hidden card would not secure a file. Only share public links for work you are comfortable making available to anyone who has the link.

## What this does and does not do
- The files themselves are stored by Google Drive.
- The portfolio displays the public links you list in `drive-work.js` and filters them by academic year and type.
- Uploading a file to Drive does not automatically update the portfolio; add its link and redeploy the site.
- No database, backend, or in-page upload feature is connected in this version.
