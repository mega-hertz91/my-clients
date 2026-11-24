const HorizontalLineWithText = ({ text }: { text: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="grow border-t border-gray-300"></div>
      <span className="mx-4 shrink text-sm text-gray-500">{text}</span>
      <div className="grow border-t border-gray-300"></div>
    </div>
  );
};

export { HorizontalLineWithText };
