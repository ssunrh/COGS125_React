export interface Project {
    slug: string;
    title: string;
    description: string;       // Short summary (for list view)
    fullDescription?: string;  // Optional detailed write-up
    imageUrl: string;
    link: string;
  }