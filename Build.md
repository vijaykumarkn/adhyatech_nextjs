16:27:53.325 Running build in Washington, D.C., USA (East) – iad1
16:27:53.326 Build machine configuration: 2 cores, 8 GB
16:27:53.370 Cloning github.com/vijaykumarkn/adhyatech_nextjs (Branch: main, Commit: 0e42611)
16:27:53.371 Skipping build cache, deployment was triggered without cache.
16:27:53.804 Cloning completed: 433.000ms
16:27:54.185 Running "vercel build"
16:27:54.207 Vercel CLI 58.1.0
16:27:54.402 Installing dependencies...
16:27:59.497 npm warn deprecated uuid@9.0.1: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
16:27:59.954 npm warn deprecated three-mesh-bvh@0.7.8: Deprecated due to three.js version incompatibility. Please use v0.8.0, instead.
16:28:07.237 
16:28:07.237 added 464 packages in 13s
16:28:07.238 
16:28:07.238 131 packages are looking for funding
16:28:07.238   run `npm fund` for details
16:28:07.289 Detected Next.js version: 14.2.35
16:28:07.296 Running "npm run build"
16:28:07.423 
16:28:07.424 > adyatech-solutions-website@1.0.0 build
16:28:07.424 > next build
16:28:07.424 
16:28:07.990 Attention: Next.js now collects completely anonymous telemetry regarding usage.
16:28:07.991 This information is used to shape Next.js' roadmap and prioritize features.
16:28:07.991 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
16:28:07.991 https://nextjs.org/telemetry
16:28:07.991 
16:28:08.054   ▲ Next.js 14.2.35
16:28:08.055 
16:28:08.070    Creating an optimized production build ...
16:28:08.597  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
16:28:23.197  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
16:28:24.272  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
16:28:38.885  ✓ Compiled successfully
16:28:38.887    Linting and checking validity of types ...
16:28:48.824    Collecting page data ...
16:28:49.198  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
16:28:51.149    Generating static pages (0/34) ...
16:28:51.492  ⚠ Unsupported metadata viewport is configured in metadata export in /about. Please move it to viewport export instead.
16:28:51.493 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.493  ⚠ Unsupported metadata viewport is configured in metadata export in /about. Please move it to viewport export instead.
16:28:51.493 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.493 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.493     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:51.494     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.494     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.494     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.494     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.494     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.494     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.494     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.495     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:51.495     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:51.495   digest: '1104687188'
16:28:51.495 }
16:28:51.495  ⚠ Unsupported metadata viewport is configured in metadata export in /about. Please move it to viewport export instead.
16:28:51.495 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.495 
16:28:51.495 Error occurred prerendering page "/about". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.495 
16:28:51.495 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.495     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:51.496     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.497     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.497     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.497     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.497     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.497     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.497     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.497     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:51.497     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.539  ⚠ Unsupported metadata viewport is configured in metadata export in /careers. Please move it to viewport export instead.
16:28:51.539 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.540  ⚠ Unsupported metadata viewport is configured in metadata export in /careers. Please move it to viewport export instead.
16:28:51.540 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.540 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.541     at o (/vercel/path0/.next/server/app/careers/page.js:1:3206)
16:28:51.541     at em (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:134808)
16:28:51.542     at e (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:137693)
16:28:51.542     at e_ (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:138168)
16:28:51.543     at Array.toJSON (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135777)
16:28:51.544     at stringify (<anonymous>)
16:28:51.544     at eE (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142242)
16:28:51.544     at eT (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142721)
16:28:51.544     at Timeout._onTimeout (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135497)
16:28:51.545     at listOnTimeout (node:internal/timers:605:17) {
16:28:51.546   digest: '3174194258'
16:28:51.546 }
16:28:51.547 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.547     at o (/vercel/path0/.next/server/app/careers/page.js:1:3206)
16:28:51.547     at em (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:134808)
16:28:51.549     at e (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:137693)
16:28:51.550     at e_ (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:138168)
16:28:51.550     at Array.toJSON (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135777)
16:28:51.550     at stringify (<anonymous>)
16:28:51.551     at eE (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142242)
16:28:51.551     at eT (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142721)
16:28:51.552     at Timeout._onTimeout (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135497)
16:28:51.552     at listOnTimeout (node:internal/timers:605:17) {
16:28:51.552   digest: '3174194258'
16:28:51.552 }
16:28:51.552 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.553     at o (/vercel/path0/.next/server/app/careers/page.js:1:3206)
16:28:51.556     at em (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:134808)
16:28:51.557     at e (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:137693)
16:28:51.558     at e_ (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:138168)
16:28:51.569     at Array.toJSON (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135777)
16:28:51.571     at stringify (<anonymous>)
16:28:51.572     at eE (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142242)
16:28:51.573     at eT (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142721)
16:28:51.578     at Timeout._onTimeout (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135497)
16:28:51.579     at listOnTimeout (node:internal/timers:605:17) {
16:28:51.580   digest: '3174194258'
16:28:51.587 }
16:28:51.588  ⚠ Unsupported metadata viewport is configured in metadata export in /careers. Please move it to viewport export instead.
16:28:51.588 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.589 
16:28:51.589 Error occurred prerendering page "/careers". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.590 
16:28:51.590 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.591     at o (/vercel/path0/.next/server/app/careers/page.js:1:3206)
16:28:51.591     at em (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:134808)
16:28:51.594     at e (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:137693)
16:28:51.594     at e_ (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:138168)
16:28:51.595     at Array.toJSON (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135777)
16:28:51.596     at stringify (<anonymous>)
16:28:51.596     at eE (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142242)
16:28:51.597     at eT (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:142721)
16:28:51.597     at Timeout._onTimeout (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:135497)
16:28:51.599     at listOnTimeout (node:internal/timers:605:17)
16:28:51.623  ⚠ Unsupported metadata viewport is configured in metadata export in /contact. Please move it to viewport export instead.
16:28:51.624 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.624  ⚠ Unsupported metadata viewport is configured in metadata export in /contact. Please move it to viewport export instead.
16:28:51.624 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.625 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.625     at i (/vercel/path0/.next/server/app/contact/page.js:1:2938)
16:28:51.625     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.625     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.626     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.626     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.626     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.626     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.626     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.627     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.627     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:51.627   digest: '3239025033'
16:28:51.627 }
16:28:51.628  ⚠ Unsupported metadata viewport is configured in metadata export in /contact. Please move it to viewport export instead.
16:28:51.628 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.628 
16:28:51.628 Error occurred prerendering page "/contact". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.630 
16:28:51.630 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.630     at i (/vercel/path0/.next/server/app/contact/page.js:1:2938)
16:28:51.630     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.631     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.631     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.631     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.631     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.631     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.631     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.631     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.631     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:51.651  ⚠ Unsupported metadata viewport is configured in metadata export in /alumnyo. Please move it to viewport export instead.
16:28:51.653 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.653  ⚠ Unsupported metadata viewport is configured in metadata export in /alumnyo. Please move it to viewport export instead.
16:28:51.653 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.655 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.656     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:51.656     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.656     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.657     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.657     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.657     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.657     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.657     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.658     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.658     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:51.658   digest: '1085423977'
16:28:51.658 }
16:28:51.676  ⚠ Unsupported metadata viewport is configured in metadata export in /alumnyo. Please move it to viewport export instead.
16:28:51.677 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.677 
16:28:51.678 Error occurred prerendering page "/alumnyo". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.678 
16:28:51.679 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.679     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:51.680     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.680     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.681     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.681     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.682     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.682     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.683     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.683     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.684     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:51.702  ⚠ Unsupported metadata viewport is configured in metadata export in /insights. Please move it to viewport export instead.
16:28:51.702 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.702  ⚠ Unsupported metadata viewport is configured in metadata export in /insights. Please move it to viewport export instead.
16:28:51.702 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.703 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.703     at c (/vercel/path0/.next/server/app/insights/page.js:1:3209)
16:28:51.703     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.704     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.704     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.705     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.705     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.705     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.705     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.705     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.705     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:51.705   digest: '907424862'
16:28:51.705 }
16:28:51.723  ⚠ Unsupported metadata viewport is configured in metadata export in /insights. Please move it to viewport export instead.
16:28:51.724 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.724 
16:28:51.725 Error occurred prerendering page "/insights". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.725 
16:28:51.725 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.725     at c (/vercel/path0/.next/server/app/insights/page.js:1:3209)
16:28:51.725     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.725     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.726     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.726     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.726     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.726     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.726     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.726     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.726     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:51.775  ⚠ Unsupported metadata viewport is configured in metadata export in /osciva. Please move it to viewport export instead.
16:28:51.775 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.775  ⚠ Unsupported metadata viewport is configured in metadata export in /osciva. Please move it to viewport export instead.
16:28:51.776 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.776 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.776     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:51.776     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.776     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.776     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.776     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.776     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.776     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.776     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.776     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.776     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:51.776   digest: '1085423977'
16:28:51.776 }
16:28:51.776  ⚠ Unsupported metadata viewport is configured in metadata export in /osciva. Please move it to viewport export instead.
16:28:51.777 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.777 
16:28:51.777 Error occurred prerendering page "/osciva". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.777 
16:28:51.777 TypeError: Cannot read properties of undefined (reading '0')
16:28:51.777     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:51.777     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.777     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.777     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.777     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.777     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.777     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.777     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.777     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.777     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:51.791    Generating static pages (8/34) 
16:28:51.810  ⚠ Unsupported metadata viewport is configured in metadata export in /. Please move it to viewport export instead.
16:28:51.810 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.810  ⚠ Unsupported metadata viewport is configured in metadata export in /. Please move it to viewport export instead.
16:28:51.810 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.931 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.932     at c (/vercel/path0/.next/server/app/page.js:1:22487)
16:28:51.932     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.932     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.932     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.932     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.932     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.932     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.932     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.932     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.932     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:51.932   digest: '3257272567'
16:28:51.932 }
16:28:51.932  ⚠ Unsupported metadata viewport is configured in metadata export in /. Please move it to viewport export instead.
16:28:51.932 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:51.932 
16:28:51.933 Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:51.933 
16:28:51.933 TypeError: Cannot read properties of undefined (reading 'map')
16:28:51.933     at c (/vercel/path0/.next/server/app/page.js:1:22487)
16:28:51.933     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:51.933     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:51.933     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:51.933     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:51.933     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.933     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:51.933     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:51.933     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:51.933     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:52.044  ⚠ Unsupported metadata viewport is configured in metadata export in /portfolio. Please move it to viewport export instead.
16:28:52.045 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.046  ⚠ Unsupported metadata viewport is configured in metadata export in /portfolio. Please move it to viewport export instead.
16:28:52.047 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.048 TypeError: Cannot read properties of undefined (reading 'reduce')
16:28:52.049     at o (/vercel/path0/.next/server/app/portfolio/page.js:1:5007)
16:28:52.049     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.050     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.051     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.051     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.052     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.053     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.054     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.055     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.055     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:52.056   digest: '3174128311'
16:28:52.056 }
16:28:52.056  ⚠ Unsupported metadata viewport is configured in metadata export in /portfolio. Please move it to viewport export instead.
16:28:52.056 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.056 
16:28:52.056 Error occurred prerendering page "/portfolio". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.056 
16:28:52.056 TypeError: Cannot read properties of undefined (reading 'reduce')
16:28:52.056     at o (/vercel/path0/.next/server/app/portfolio/page.js:1:5007)
16:28:52.056     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.056     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.056     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.058     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.060     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.061     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.062     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.063     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.063     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:52.102  ⚠ Unsupported metadata viewport is configured in metadata export in /quote. Please move it to viewport export instead.
16:28:52.102 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.102  ⚠ Unsupported metadata viewport is configured in metadata export in /quote. Please move it to viewport export instead.
16:28:52.103 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.103 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.103     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.103     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.103     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.103     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.103     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.103     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.103     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.103     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.103     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.103     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.103   digest: '1269446231'
16:28:52.103 }
16:28:52.103  ⚠ Unsupported metadata viewport is configured in metadata export in /quote. Please move it to viewport export instead.
16:28:52.104 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.104 
16:28:52.104 Error occurred prerendering page "/quote". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.104 
16:28:52.104 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.104     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.104     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.104     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.104     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.104     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.104     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.104     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.104     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.104     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.105     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.132  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ai-agents. Please move it to viewport export instead.
16:28:52.135 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.135  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ai-agents. Please move it to viewport export instead.
16:28:52.136 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.136 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.136     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.137     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.137     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.137     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.137     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.137     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.137     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.137     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.137     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.137     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.137   digest: '1269446231'
16:28:52.137 }
16:28:52.291  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ai-agents. Please move it to viewport export instead.
16:28:52.293 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.294 
16:28:52.294 Error occurred prerendering page "/services/ai-agents". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.295 
16:28:52.295 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.296     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.296     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.300     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.300     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.300     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.300     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.300     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.300     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.300     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.300     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.393  ⚠ Unsupported metadata viewport is configured in metadata export in /services/cms-content-platforms. Please move it to viewport export instead.
16:28:52.393 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.393  ⚠ Unsupported metadata viewport is configured in metadata export in /services/cms-content-platforms. Please move it to viewport export instead.
16:28:52.393 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.393 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.393     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.393     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.393     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.393     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.393     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.393     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.393     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.393     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.393     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.393     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.393   digest: '1269446231'
16:28:52.393 }
16:28:52.393  ⚠ Unsupported metadata viewport is configured in metadata export in /services/cms-content-platforms. Please move it to viewport export instead.
16:28:52.401 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.410 
16:28:52.410 Error occurred prerendering page "/services/cms-content-platforms". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.410 
16:28:52.411 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.411     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.420     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.421     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.421     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.422     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.422     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.422     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.422     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.422     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.422     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.504  ⚠ Unsupported metadata viewport is configured in metadata export in /services/custom-software. Please move it to viewport export instead.
16:28:52.505 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.506  ⚠ Unsupported metadata viewport is configured in metadata export in /services/custom-software. Please move it to viewport export instead.
16:28:52.506 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.506 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.506     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.507     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.507     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.507     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.507     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.508     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.508     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.508     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.509     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.509     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.509   digest: '1269446231'
16:28:52.509 }
16:28:52.509  ⚠ Unsupported metadata viewport is configured in metadata export in /services/custom-software. Please move it to viewport export instead.
16:28:52.510 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.510 
16:28:52.510 Error occurred prerendering page "/services/custom-software". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.511 
16:28:52.511 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.511     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.511     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.511     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.511     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.511     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.511     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.511     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.511     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.511     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.511     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.541  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ecommerce. Please move it to viewport export instead.
16:28:52.542 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.542  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ecommerce. Please move it to viewport export instead.
16:28:52.542 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.542 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.542     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.542     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.542     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.542     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.542     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.542     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.542     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.542     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.542     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.542     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.542   digest: '1269446231'
16:28:52.542 }
16:28:52.542  ⚠ Unsupported metadata viewport is configured in metadata export in /services/ecommerce. Please move it to viewport export instead.
16:28:52.542 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.543 
16:28:52.543 Error occurred prerendering page "/services/ecommerce". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.543 
16:28:52.543 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.543     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.543     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.543     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.543     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.543     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.543     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.543     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.543     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.543     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.543     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.643  ⚠ Unsupported metadata viewport is configured in metadata export in /services/mobile-apps. Please move it to viewport export instead.
16:28:52.643 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.644  ⚠ Unsupported metadata viewport is configured in metadata export in /services/mobile-apps. Please move it to viewport export instead.
16:28:52.644 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.678 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.678     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.679     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.679     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.680     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.680     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.680     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.680     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.681     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.681     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.681     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.682   digest: '1269446231'
16:28:52.682 }
16:28:52.682  ⚠ Unsupported metadata viewport is configured in metadata export in /services/mobile-apps. Please move it to viewport export instead.
16:28:52.682 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.685 
16:28:52.685 Error occurred prerendering page "/services/mobile-apps". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.686 
16:28:52.686 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.686     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.687     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.687     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.687     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.688     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.688     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.688     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.688     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.689     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.689     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.692    Generating static pages (16/34) 
16:28:52.712  ⚠ Unsupported metadata viewport is configured in metadata export in /services. Please move it to viewport export instead.
16:28:52.712 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.712  ⚠ Unsupported metadata viewport is configured in metadata export in /services. Please move it to viewport export instead.
16:28:52.712 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.739 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.739     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:52.739     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.739     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.739     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.739     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.740     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.740     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.740     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.740     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.740     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:52.740   digest: '1085423977'
16:28:52.740 }
16:28:52.740  ⚠ Unsupported metadata viewport is configured in metadata export in /services. Please move it to viewport export instead.
16:28:52.741 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.741 
16:28:52.741 Error occurred prerendering page "/services". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.741 
16:28:52.741 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.741     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:52.741     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.742     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.742     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.742     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.742     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.742     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.742     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.742     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.742     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:52.756  ⚠ Unsupported metadata viewport is configured in metadata export in /services/rag-knowledge-systems. Please move it to viewport export instead.
16:28:52.757 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.758  ⚠ Unsupported metadata viewport is configured in metadata export in /services/rag-knowledge-systems. Please move it to viewport export instead.
16:28:52.758 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.771 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.772     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.775     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.775     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.775     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.775     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.775     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.775     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.775     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.775     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.775     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.775   digest: '1269446231'
16:28:52.775 }
16:28:52.775  ⚠ Unsupported metadata viewport is configured in metadata export in /services/rag-knowledge-systems. Please move it to viewport export instead.
16:28:52.775 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.783 
16:28:52.784 Error occurred prerendering page "/services/rag-knowledge-systems". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.784 
16:28:52.785 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.785     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.789     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.789     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.789     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.789     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.789     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.789     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.789     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.789     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.789     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.802  ⚠ Unsupported metadata viewport is configured in metadata export in /services/saas-development. Please move it to viewport export instead.
16:28:52.803 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.803  ⚠ Unsupported metadata viewport is configured in metadata export in /services/saas-development. Please move it to viewport export instead.
16:28:52.804 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.804 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.804     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.804     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.804     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.804     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.804     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.804     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.804     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.805     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.805     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.806     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.806   digest: '1269446231'
16:28:52.807 }
16:28:52.820  ⚠ Unsupported metadata viewport is configured in metadata export in /services/saas-development. Please move it to viewport export instead.
16:28:52.821 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.822 
16:28:52.822 Error occurred prerendering page "/services/saas-development". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.822 
16:28:52.822 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.823     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.823     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.824     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.824     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.824     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.825     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.826     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.826     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.828     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.829     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.839  ⚠ Unsupported metadata viewport is configured in metadata export in /services/voice-ai. Please move it to viewport export instead.
16:28:52.840 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.840  ⚠ Unsupported metadata viewport is configured in metadata export in /services/voice-ai. Please move it to viewport export instead.
16:28:52.840 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.874 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.876     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.876     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.877     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.877     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.878     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.878     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.878     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.878     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.879     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.879     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.881   digest: '1269446231'
16:28:52.881 }
16:28:52.881  ⚠ Unsupported metadata viewport is configured in metadata export in /services/voice-ai. Please move it to viewport export instead.
16:28:52.881 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.882 
16:28:52.882 Error occurred prerendering page "/services/voice-ai". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.882 
16:28:52.882 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.883     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.883     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.883     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.883     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.883     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.883     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.883     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.883     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.884     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.884     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.907  ⚠ Unsupported metadata viewport is configured in metadata export in /services/web-development. Please move it to viewport export instead.
16:28:52.907 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.907  ⚠ Unsupported metadata viewport is configured in metadata export in /services/web-development. Please move it to viewport export instead.
16:28:52.907 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.907 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.907     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.907     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.907     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.907     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.907     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.907     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.907     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.907     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.907     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.908     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:52.908   digest: '1269446231'
16:28:52.908 }
16:28:52.908  ⚠ Unsupported metadata viewport is configured in metadata export in /services/web-development. Please move it to viewport export instead.
16:28:52.908 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.924 
16:28:52.925 Error occurred prerendering page "/services/web-development". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.926 
16:28:52.927 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.927     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:52.928     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.929     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.929     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.929     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.932     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.933     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.933     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:52.933     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.934     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:52.965  ⚠ Unsupported metadata viewport is configured in metadata export in /testimonials. Please move it to viewport export instead.
16:28:52.966 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.967  ⚠ Unsupported metadata viewport is configured in metadata export in /testimonials. Please move it to viewport export instead.
16:28:52.967 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.967 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.968     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:52.968     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.968     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.970     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.970     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.970     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.970     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.972     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.972     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.973     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561) {
16:28:52.973   digest: '1085423977'
16:28:52.973 }
16:28:52.975  ⚠ Unsupported metadata viewport is configured in metadata export in /testimonials. Please move it to viewport export instead.
16:28:52.975 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:52.975 
16:28:52.976 Error occurred prerendering page "/testimonials". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:52.976 
16:28:52.976 TypeError: Cannot read properties of undefined (reading '0')
16:28:52.976     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:52.976     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:52.976     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:52.977     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:52.978     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:52.978     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.979     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:52.979     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:52.980     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:52.980     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58561)
16:28:52.997  ⚠ Unsupported metadata viewport is configured in metadata export in /_not-found. Please move it to viewport export instead.
16:28:52.999 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.000  ⚠ Unsupported metadata viewport is configured in metadata export in /_not-found. Please move it to viewport export instead.
16:28:53.001 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.002 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.003     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.003     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.004     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.005     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.006     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.006     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.007     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.007     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.009     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.010     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681) {
16:28:53.010   digest: '954328189'
16:28:53.010 }
16:28:53.010  ⚠ Unsupported metadata viewport is configured in metadata export in /_not-found. Please move it to viewport export instead.
16:28:53.010 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.025 
16:28:53.026 Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.027 
16:28:53.027 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.027     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.027     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.027     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.027     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.027     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.027     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.027     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.027     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.027     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.027     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.042  ⚠ Unsupported metadata viewport is configured in metadata export in /government/zilla-panchayat-edraft. Please move it to viewport export instead.
16:28:53.042 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.042  ⚠ Unsupported metadata viewport is configured in metadata export in /government/zilla-panchayat-edraft. Please move it to viewport export instead.
16:28:53.042 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.058 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.058     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.059     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.059     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.059     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.059     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.059     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.059     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.059     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.059     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.059     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:53.059   digest: '2829159817'
16:28:53.059 }
16:28:53.059  ⚠ Unsupported metadata viewport is configured in metadata export in /government/zilla-panchayat-edraft. Please move it to viewport export instead.
16:28:53.059 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.059 
16:28:53.059 Error occurred prerendering page "/government/zilla-panchayat-edraft". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.059 
16:28:53.059 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.060     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.060     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.060     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.060     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.060     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.060     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.060     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.060     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.060     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.060     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.094  ⚠ Unsupported metadata viewport is configured in metadata export in /government/stock-maintaining-system. Please move it to viewport export instead.
16:28:53.095 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.095  ⚠ Unsupported metadata viewport is configured in metadata export in /government/stock-maintaining-system. Please move it to viewport export instead.
16:28:53.096 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.101 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.101     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.101     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.102     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.102     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.102     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.102     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.102     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.103     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.103     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.103     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:53.103   digest: '2829159817'
16:28:53.103 }
16:28:53.111  ⚠ Unsupported metadata viewport is configured in metadata export in /government/stock-maintaining-system. Please move it to viewport export instead.
16:28:53.112 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.112 
16:28:53.112 Error occurred prerendering page "/government/stock-maintaining-system". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.113 
16:28:53.113 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.113     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.113     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.113     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.113     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.113     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.113     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.113     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.113     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.114     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.114     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.122    Generating static pages (25/34) 
16:28:53.138  ⚠ Unsupported metadata viewport is configured in metadata export in /government/citizen-services-portal. Please move it to viewport export instead.
16:28:53.138 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.139  ⚠ Unsupported metadata viewport is configured in metadata export in /government/citizen-services-portal. Please move it to viewport export instead.
16:28:53.139 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.151 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.151     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.154     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.154     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.154     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.154     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.154     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.154     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.154     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.154     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.154     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:53.155   digest: '2829159817'
16:28:53.155 }
16:28:53.155  ⚠ Unsupported metadata viewport is configured in metadata export in /government/citizen-services-portal. Please move it to viewport export instead.
16:28:53.155 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.160 
16:28:53.161 Error occurred prerendering page "/government/citizen-services-portal". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.161 
16:28:53.161 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.162     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.162     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.162     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.162     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.162     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.162     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.162     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.162     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.162     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.162     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.179  ⚠ Unsupported metadata viewport is configured in metadata export in /disclaimer. Please move it to viewport export instead.
16:28:53.179 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.180  ⚠ Unsupported metadata viewport is configured in metadata export in /disclaimer. Please move it to viewport export instead.
16:28:53.180 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.364 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.365     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.365     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.365     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.365     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.365     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.365     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.365     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.365     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.365     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.365     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:53.365   digest: '1269446231'
16:28:53.365 }
16:28:53.365  ⚠ Unsupported metadata viewport is configured in metadata export in /disclaimer. Please move it to viewport export instead.
16:28:53.365 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.366 
16:28:53.366 Error occurred prerendering page "/disclaimer". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.366 
16:28:53.366 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.366     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.367     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.367     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.367     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.367     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.367     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.367     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.367     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.367     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.367     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:53.400  ⚠ Unsupported metadata viewport is configured in metadata export in /government. Please move it to viewport export instead.
16:28:53.401 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.401  ⚠ Unsupported metadata viewport is configured in metadata export in /government. Please move it to viewport export instead.
16:28:53.401 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.401 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.401     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.401     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.401     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.401     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.401     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.401     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.401     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.401     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.401     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.401     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:53.401   digest: '2829159817'
16:28:53.401 }
16:28:53.403  ⚠ Unsupported metadata viewport is configured in metadata export in /government. Please move it to viewport export instead.
16:28:53.403 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.403 
16:28:53.407 Error occurred prerendering page "/government". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.407 
16:28:53.407 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.408     at u (/vercel/path0/.next/server/chunks/472.js:1:16861)
16:28:53.408     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.409     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.409     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.409     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.410     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.410     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.410     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.412     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.415     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.432  ⚠ Unsupported metadata viewport is configured in metadata export in /cookies. Please move it to viewport export instead.
16:28:53.434 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.434  ⚠ Unsupported metadata viewport is configured in metadata export in /cookies. Please move it to viewport export instead.
16:28:53.434 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.455 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.457     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.458     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.459     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.460     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.460     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.461     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.461     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.465     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.467     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.468     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:53.469   digest: '1269446231'
16:28:53.470 }
16:28:53.470  ⚠ Unsupported metadata viewport is configured in metadata export in /cookies. Please move it to viewport export instead.
16:28:53.470 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.472 
16:28:53.472 Error occurred prerendering page "/cookies". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.473 
16:28:53.474 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.474     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.474     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.474     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.474     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.474     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.474     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.474     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.474     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.474     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.476     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:53.800  ⚠ Unsupported metadata viewport is configured in metadata export in /refund-products. Please move it to viewport export instead.
16:28:53.801 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.801  ⚠ Unsupported metadata viewport is configured in metadata export in /refund-products. Please move it to viewport export instead.
16:28:53.801 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.801 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.803     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.803     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.803     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.803     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.803     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.803     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.803     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.803     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.804     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.804     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:53.804   digest: '1269446231'
16:28:53.804 }
16:28:53.804  ⚠ Unsupported metadata viewport is configured in metadata export in /refund-products. Please move it to viewport export instead.
16:28:53.804 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.804 
16:28:53.804 Error occurred prerendering page "/refund-products". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.804 
16:28:53.804 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.804     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.804     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.804     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.804     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.804     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.805     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.805     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.805     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.805     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.806     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:53.818  ⚠ Unsupported metadata viewport is configured in metadata export in /products. Please move it to viewport export instead.
16:28:53.819 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.819  ⚠ Unsupported metadata viewport is configured in metadata export in /products. Please move it to viewport export instead.
16:28:53.819 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.819 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.819     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.819     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.819     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.820     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.820     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.820     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.820     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.820     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.820     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.820     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539) {
16:28:53.820   digest: '1104687188'
16:28:53.820 }
16:28:53.824  ⚠ Unsupported metadata viewport is configured in metadata export in /products. Please move it to viewport export instead.
16:28:53.824 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.832 
16:28:53.833 Error occurred prerendering page "/products". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:53.833 
16:28:53.833 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.833     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.833     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.833     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.833     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61547)
16:28:53.833     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.833     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.833     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.833     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.834     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64826)
16:28:53.835     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.840  ⚠ Unsupported metadata viewport is configured in metadata export in /terms. Please move it to viewport export instead.
16:28:53.841 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.850  ⚠ Unsupported metadata viewport is configured in metadata export in /terms. Please move it to viewport export instead.
16:28:53.851 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:53.861 TypeError: Cannot read properties of undefined (reading '0')
16:28:53.861     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:53.861     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:53.861     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:53.861     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.862     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:53.863     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:53.863     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:53.864     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:53.864     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:53.865     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011) {
16:28:53.865   digest: '1269446231'
16:28:53.865 }
16:28:53.865  ⚠ Unsupported metadata viewport is configured in metadata export in /terms. Please move it to viewport export instead.
16:28:53.865 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
16:28:54.198 
16:28:54.198 Error occurred prerendering page "/terms". Read more: https://nextjs.org/docs/messages/prerender-error
16:28:54.198 
16:28:54.198 TypeError: Cannot read properties of undefined (reading '0')
16:28:54.198     at j (/vercel/path0/.next/server/chunks/472.js:1:17905)
16:28:54.198     at nj (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46252)
16:28:54.198     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47572)
16:28:54.198     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:54.198     at nB (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67539)
16:28:54.198     at nD (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66681)
16:28:54.198     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64854)
16:28:54.198     at nM (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59103)
16:28:54.198     at nL (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64547)
16:28:54.198     at nI (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47011)
16:28:54.208  ⚠ Unsupported metadata viewport is configured in metadata export in /refund. Please move it to viewport export instead.
16:28:54.208 Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport