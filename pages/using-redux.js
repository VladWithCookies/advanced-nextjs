import { useDispatch, useSelector } from 'react-redux'

import withRedux from '../lib/withRedux'

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

export default withRedux(UsingRedux);
