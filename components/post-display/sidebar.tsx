import { AuthorBio } from "./author-bio";
import { NewsletterSignup } from "./newsletter-signup";
import { PopularTopics } from "./popular-topics";
import { SocialLinks } from "./social-links";
import { TrendingArticles } from "./trending-articles";

export function Sidebar() {
  return (
    <div className="space-y-8 print:hidden">
      <TrendingArticles />
      <NewsletterSignup />
      <PopularTopics />
      <AuthorBio />
      <SocialLinks />
    </div>
  );
}
