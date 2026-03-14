export const ProductSkeleton = () => {
  return (
    <div className="card">
      <div className="cardImage">
        <div className="skeleton skImage" />
      </div>
      <div className="cardBody">
        <div className="skeleton skCategory" />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div className="skeleton skTitleFull" />
          <div className="skeleton skTitleHalf" />
        </div>
        <div className="skeleton skStars" />
        <div className="cardFooter">
          <div className="skeleton skPrice" />
          <div className="skeleton skButton" />
        </div>
      </div>
    </div>
  );
};
