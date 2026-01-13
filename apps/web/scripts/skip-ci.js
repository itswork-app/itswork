/**
 * apps/web Vercel Build Skip Script
 *
 * This app is not the active product (Cost Guard is in apps/app).
 * The web app requires BASEHUB_TOKEN for CMS which is not configured.
 * Always skip Vercel builds until this is ready for production.
 */

console.log("Skipping apps/web build - not active product");
console.log("Active product: Cost Guard (apps/app)");
process.exit(0); // Exit 0 = skip build in Vercel
