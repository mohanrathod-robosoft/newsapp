import React from 'react';
import './App.css';
import Comment from "./components/organisms/comment"
// import { Fetch } from "./util/fetch";

function App() {
  // const [state, setState] = useState([])
  //   const [hasError, setHasError] = useState(false)
    // const {loading, setLoading} = useState(false)
    // useEffect(() => {
    //   Fetch
    //       .then(res => setState(res))
    //       .catch(err => setHasError(err));
    // }, [])
    return (
        <>
            {
              <div>
                <Comment></Comment>
              </div>
            }
        </>
    )
}

export default App;
