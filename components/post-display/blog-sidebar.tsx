import { AuthorBio } from "./author-bio";
import { NewsletterSignup } from "./newsletter-signup";
import { SocialLinks } from "./social-links";
import { TrendingArticles } from "./trending-articles";

export function BlogSidebar() {
  return (
    <div className="space-y-8 print:hidden">
      <TrendingArticles title="Random Articles" />
      {/* <PopularTopics /> */}
      <NewsletterSignup />
      <AuthorBio />
      <SocialLinks />
    </div>
  );
}
