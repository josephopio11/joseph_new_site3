// 1. Define the Context Wrapper
export type WithContext<T> = T & {
  "@context": "https://schema.org";
};

// 2. Define the ReadAction Subtype
export interface ReadAction {
  "@type": "ReadAction";
  target: string | string[];
}

// 3. Define your target WebSite Interface
export interface WebSite {
  "@type": "WebSite";
  "@id"?: string;
  url: string;
  name: string;
  description?: string;
  inLanguage?: string;
  potentialAction?: ReadAction[];
}
