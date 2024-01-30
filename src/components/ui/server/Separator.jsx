import BackToTop from "@/components/common/client/BackToTop";

export const Separator = ({ children }) => {
  return (
    <div className="flex items-center justify-center after:content-[''] after:h-px after:bg-gray-300 after:w-1/2 before:content-[''] before:h-px before:bg-gray-300 before:w-1/2">
      <BackToTop></BackToTop>
    </div>
  );
};
