export const ParallaxImage = ({ spanText, backgroundImageNumber }) => {
  return (
    <div className={`bgimg-${backgroundImageNumber}`}>
      <div className="caption">
        <div className="border">
          {spanText && <span className="border">{spanText}</span>}
        </div>
      </div>
    </div>
  );
};
