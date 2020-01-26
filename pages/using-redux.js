import { useDispatch, useSelector, connect } from 'react-redux'

const UsingRedux = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div>
      <button
        type="button"
        onClick={onIncrement}
      >
        +
      </button>
      <span>
        {count}
      </span>
      <button
        type="button"
        onClick={onDecrement}
      >
        -
      </button>
    </div>
  )
};

export default connect(state => state)(UsingRedux);
