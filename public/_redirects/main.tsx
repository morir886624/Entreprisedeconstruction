# Cloudflare Pages / Netlify : sert le HTML statique de chaque route quand disponible,
# fallback SPA sinon. Permet aux URLs deep-link de marcher au reload.
/contact              /contact/index.html              200
/services/:slug       /services/:slug/index.html       200
/mentions-legales     /mentions-legales/index.html     200
/*                    /index.html                       200
