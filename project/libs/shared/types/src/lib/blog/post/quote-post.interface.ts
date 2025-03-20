import { IBasePost } from './base-post.interface';

export interface IQuotePost extends IBasePost {
  type: 'quote';
  content: {
    quote: string;
    quoteAuthor: string;
  };
}
