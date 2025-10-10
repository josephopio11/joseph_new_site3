import { AuthorBio } from "./author-bio";
import { NewsletterSignup } from "./newsletter-signup";
import { SocialLinks } from "./social-links";
import { TrendingArticles } from "./trending-articles";

export function ServicesSidebar() {
  return (
    <div className="space-y-8 print:hidden">
      {/* <BookService /> */}
      <NewsletterSignup />
      <TrendingArticles title="Articles You May Like" />
      {/* <PopularTopics /> */}
      <AuthorBio />
      <SocialLinks />
    </div>
  );
}
