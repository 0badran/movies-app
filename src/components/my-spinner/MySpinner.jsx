import Spinner from 'react-bootstrap/Spinner';

function MySpinner() {
  return (
    <div className="text-center my-5">
      <Spinner variant="light" className='me-2' animation="grow" size="sm" />
      <Spinner variant="light" className='me-2' animation="grow" size="sm" />
      <Spinner variant="light" className='me-2' animation="grow" size="sm" />
      <Spinner variant="light" animation="grow" size="sm" />
    </div>
  )
}

export default MySpinner;
