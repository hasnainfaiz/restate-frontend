// import { auth } from "./services/utils/firebase";
// import { GoogleAuthProvider } from 'firebase/auth';
// import { socialLoginWithPopUp } from './services/utils/firebase-login';
// import { images } from './assets';
import './App.scss';

function App() {
  // const googleLogin = async () => {
  //   const provider = GoogleAuthProvider;
  //   const user = await socialLoginWithPopUp(auth, provider,);
  //   console.log(user, "user is this one")
  // }
  return (
    <div>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
      <div>
        <p className='test'>Testing</p>
      </div>
      {/* <div>
        <button onClick={googleLogin}>Test Login</button>
      </div>
      <div>
        <img src={images.cclogo} height={90} width={90} alt='testing' />
      </div> */}
    </div>
  );
}

export default App;
