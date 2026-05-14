export interface PostMetadata {
  id: string;
  title: string;
  date: Date;
  slug: string;
  subtitle: string;
  image?: string;
  tags?: string[];
  badge?: string;
}
