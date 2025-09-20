import { useLocation, Link } from 'react-router-dom';
import { siteText } from './siteText';

// Helper hook to read query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Function to highlight matched text
function highlightMatch(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  );
}

export default function SearchResults() {
  const query = useQuery().get('q')?.toLowerCase() || '';

  // Filter results based on query
  const results = siteText.filter(item =>
    item.text.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Results for "{query}"</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((item, idx) => (
            <li key={idx}>
              <Link to={item.page}>
                {highlightMatch(item.text, query)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
