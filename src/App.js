import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return (
    <React.Fragment> 
      {!isLoaded && (
        <p className='Loading'>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity className='UnityCanvas'
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </React.Fragment>
  );
}
export default App;
