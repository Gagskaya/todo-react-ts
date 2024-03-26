import "./ListTitle.scss";

interface Props {
  title: string | undefined;
  color: string | undefined;
}

const ListTitle = ({ title, color }: Props) => {
  return (
    <h2 className="list-title" style={{ color }}>
      {title}
    </h2>
  );
};

export default ListTitle;
