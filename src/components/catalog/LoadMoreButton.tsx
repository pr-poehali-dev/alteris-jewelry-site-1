import React from "react";
import { Button } from "@/components/ui/button";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  hasMore: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  isLoading = false,
  hasMore,
}) => {
  if (!hasMore) return null;

  return (
    <div className="mt-10 flex justify-center">
      <Button
        variant="outline"
        className="metallic-button"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : "Загрузить ещё"}
      </Button>
    </div>
  );
};

export default LoadMoreButton;
