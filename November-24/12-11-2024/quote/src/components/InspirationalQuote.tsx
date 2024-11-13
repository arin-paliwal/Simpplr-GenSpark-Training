import { QuoteInterface } from "../types";

const InspirationalQuote = ({ quote, author }: QuoteInterface) => {
    return (
      <blockquote className="border-l-4 border-gray-800 pl-4 mb-4">
        <p>{quote}</p>
        {author && <cite className="block text-gray-600">{author}</cite>}
      </blockquote>
    );
  };

export default InspirationalQuote;