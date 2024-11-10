import { FallingLines } from "react-loader-spinner";
import render from 'react-dom';

const Loader = () => {
  return (
    render(<FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
      />)
  )
}

export default Loader;