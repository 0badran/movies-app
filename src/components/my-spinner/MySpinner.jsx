import Spinner from 'react-bootstrap/Spinner';

function MySpinner() {
  return (
    <div className="text-center my-5">
      <Spinner variant="success" className="my-5" animation="grow" size="sm" />
      <Spinner variant="light" animation="grow" />
      <Spinner variant="light" animation="grow" />
      <Spinner variant="success" className="my-5" animation="grow" size="sm" />
    </div>
  )
}

export default MySpinner;
