interface TopProps {
  content: string;
}

const Top: React.FC<TopProps> = ({ content }) => {
  return (
    <div className="flex-1 text-center">
      <h2 className="text-neutral-600">{content}</h2>
    </div>
  );
};

export default Top;
