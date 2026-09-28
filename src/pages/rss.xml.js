import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) { const posts = (await getCollection('posts')).sort((a,b) => b.data.pubDate.valueOf()-a.data.pubDate.valueOf()); return rss({ title: 'BBakGoSu IT', description: 'AI와 개발, 일하며 배운 것을 기록합니다.', site: context.site, items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: `/posts/${post.id}/` })) }); }
