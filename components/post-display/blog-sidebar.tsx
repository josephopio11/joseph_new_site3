import { AuthorBio } from "./author-bio";
import { NewsletterSignup } from "./newsletter-signup";
import { PopularTopics } from "./popular-topics";
import { SocialLinks } from "./social-links";

export function BlogSidebar() {
  return (
    <div className="space-y-8 print:hidden">
      {/* <TrendingArticles /> */}
      <PopularTopics />
      <NewsletterSignup />
      <AuthorBio />
      <SocialLinks />
    </div>
  );
}
