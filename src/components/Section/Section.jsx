export const Section = ({ sectionTitle, children }) => {
  return (
    <div className="section">
      <h3 className="border">{sectionTitle}</h3>
      <p>{children}</p>
    </div>
  );
};
