const TabList = ({ isShowCompleted, displayCompleted }) => {
  return (
    <div className="nav nav-tabs">
      <span
        onClick={() => displayCompleted(true)}
        className={isShowCompleted ? "nav-link active" : "nav-link"}
      >
        Выполнено
      </span>
      <span
        onClick={() => displayCompleted(false)}
        className={isShowCompleted ? "nav-link" : "nav-link active"}
      >
        Не выполнено
      </span>
    </div>
  );
};

export default TabList;
