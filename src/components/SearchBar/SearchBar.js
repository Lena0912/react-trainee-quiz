export const SearchBar = () => {
    return (
      <div>
        <input type="text" placeholder="Filter by topic..." />
        <select>
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    );
    
};