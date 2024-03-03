export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="spinner-dot animate-bounce bg-white mx-1 w-2 h-2 rounded-full"></div>
      <div
        className="spinner-dot animate-bounce bg-white mx-1 w-2 h-2 rounded-full"
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div
        className="spinner-dot animate-bounce bg-white mx-1 w-2 h-2 rounded-full"
        style={{ animationDelay: '0.2s' }}
      ></div>
    </div>
  );
};
