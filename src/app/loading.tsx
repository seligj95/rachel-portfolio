const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-32 bg-gray-200 rounded mx-auto"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
          <div className="h-4 w-40 bg-gray-200 rounded mx-auto"></div>
        </div>
        <p className="text-accent/60 text-sm mt-8 font-light tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
