# Deployment checklist — mcateeragservices.co.uk

1. Create a new GitHub repository for this website (separate from AgriCore).
2. Push this project to that repository.
3. Create a separate Vercel project from the repository.
4. Add the variables from `.env.example` to Vercel Environment Variables.
5. In Vercel Domains, add `mcateeragservices.co.uk` and `www.mcateeragservices.co.uk`.
6. Update the domain DNS records using the exact values Vercel gives you.
7. Keep AgriCore in its own repository/project/domain.
8. When the AgriCore intake endpoint is ready, add the webhook URL/token only in Vercel; never expose the token as `NEXT_PUBLIC_*`.
9. Submit a test website enquiry and confirm it reaches the intended AgriCore company/inbox.
10. Only then turn on paid ads and conversion tracking.
