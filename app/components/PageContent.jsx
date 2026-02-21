export default function PageContent({ children, className = "", as: Tag = "section" }) {
  return (
    <Tag className={`w-full max-w-[80rem] mx-auto px-2 md:px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
