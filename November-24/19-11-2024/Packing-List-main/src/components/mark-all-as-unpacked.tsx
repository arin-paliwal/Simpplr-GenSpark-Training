type HeaderProps = {
  onClick: () => void;
}

const MarkAllAsUnpacked = ({ onClick }:HeaderProps) => (
  <div className="mb-16">
    <button className="w-full" onClick={onClick}>
      🏠 Mark All As Unpacked
    </button>
  </div>
);

export default MarkAllAsUnpacked;
