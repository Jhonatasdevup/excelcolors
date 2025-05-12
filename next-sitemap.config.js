// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.excelcolors.com',
  generateRobotsTxt: true, // Gera também o robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500'], // Exclui páginas de erro
};
