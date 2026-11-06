import { getCollection } from 'astro:content';

/** 依層級、order 排序後的所有專案 */
export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.tier - b.data.tier || a.data.order - b.data.order);
}
