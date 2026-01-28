// Blog Engine logic will be implemented here
export interface Post {
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export async function getLatestPosts(): Promise<Post[]> {
  // Mocking data for now
  return [];
}
