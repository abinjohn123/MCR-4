import { useEffect } from 'react';

import { useAppContext } from '../../../AppContext';

export const SortSection = () => {
  const { setData } = useAppContext();

  const handleSortChange = ({ target: { value } }) => {
    if (value === 'latest' || value === 'oldest')
      setData((data) => ({
        ...data,
        posts: [...data.posts].sort((a, b) => {
          const date1 = new Date(a.createdAt);
          const date2 = new Date(b.createdAt);
          return value === 'latest' ? date2 - date1 : date1 - date2;
        }),
      }));
    else if (value === 'popular' || value === 'unpopular')
      setData((data) => ({
        ...data,
        posts: [...data.posts].sort((a, b) => {
          return value === 'popular'
            ? b.upvotes - a.upvotes
            : a.upvotes - b.upvotes;
        }),
      }));
  };

  useEffect(() => handleSortChange({ target: { value: 'latest' } }), []);
  return (
    <div className="controls">
      <h3>Sort by</h3>
      <div className="sort-box">
        <select onChange={handleSortChange}>
          <option value="latest">Latest posts</option>
          <option value="oldest">Oldest posts</option>
          <option value="popular">Popular posts</option>
          <option value="unpopular">Least favorite posts</option>
        </select>
      </div>
    </div>
  );
};
