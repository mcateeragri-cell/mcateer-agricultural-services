McAteer Agricultural Services Website v9.4

Corrected across the whole website:

James — 07928 744939
- Call
- WhatsApp

Office — 07517 359358
- Call
- WhatsApp

Email — mcateeragri@gmail.com

Also fixed:
- Header
- Mobile quick-contact bar
- Floating WhatsApp button
- Service-page contact buttons
- Footer names and links
- Contact/support page direct contacts
- Successful-enquiry WhatsApp link with enquiry reference
- Our Work WhatsApp CTA
- Double '?text=' WhatsApp URL problem

AgriCore webhook and date/enquiry workflow are unchanged.

Extract mcateer_work over:
C:\projects\McAteer-Website\mcateer_work

Then run:
npm.cmd run build

If successful:
git add .
git commit -m "Fix phone WhatsApp and email links"
git push
