import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Реализация поиска
    console.log("Поиск по запросу:", searchQuery);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Заглушка для демонстрации автозаполнения
    if (query.length > 0) {
      setSuggestions([
        `${query} кольцо`,
        `${query} серьги`,
        `${query} браслет`,
      ]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <Input
          type="search"
          placeholder="Поиск украшений..."
          value={searchQuery}
          onChange={handleChange}
          className="flex-grow border-alteris-grey-light focus:border-alteris-silver"
          autoFocus
        />
        <Button type="submit" variant="ghost" className="ml-2">
          <Search className="h-5 w-5" />
        </Button>
        <Button type="button" variant="ghost" onClick={onClose} className="ml-2">
          <X className="h-5 w-5" />
        </Button>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white shadow-md z-10 rounded-sm">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-alteris-grey-light cursor-pointer"
                onClick={() => {
                  setSearchQuery(suggestion);
                  setSuggestions([]);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;