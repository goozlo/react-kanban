import './Board.scss';

const Board = () => {

    return(
        <div className='board' >
            <div className="board__container">
                <p className="board__title">This board is empty. Create a new column to get started.</p>
                <button className="board__new-column">
                    + Add New Column
                </button>
            </div>
        </div>
    )
}

export default Board;