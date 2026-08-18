McAteer Agricultural Services Website v9.2 Logo Patch

This patch installs the new matched-brand McAteer logo with the realistic blue tractor,
muted agricultural green, brushed steel and the same dark premium feel as mcateeragservices.co.uk.

Files included:
- public/brand/mcateer-logo-header.png
- public/brand/mcateer-logo-footer.png
- public/brand/mcateer-logo.png
- components/Header.tsx
- components/Footer.tsx
- app/LOGO-CSS-PATCH.txt

IMPORTANT:
After extracting, open app/globals.css and paste the contents of
app/LOGO-CSS-PATCH.txt at the very bottom.

Then run:
npm.cmd run build

If successful:
git add .
git commit -m "Update McAteer brand logo"
git push
