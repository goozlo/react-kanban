import "./AddBoard.scss";

export const AddBoard = () => {
  return (
    <div className="add-board">
      <h3 className="add-board__title">Add New Board</h3>
      <form>
        <label className="add-board__input">
          <span>Name</span>        
          <input type="text"></input>
        </label>
        <label className="add-board__input">
          <span>Columns</span>
          <input type="text"></input>
        </label>
        <button>+ Add New Column</button>
        <button>Create New Board</button>
      </form>
    </div>
  );
};
