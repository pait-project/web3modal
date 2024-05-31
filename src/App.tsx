import { useEffect, useCallback, useState } from "react";


import { useWeb3Modal } from '@web3modal/react'
import { useWalletClient } from 'wagmi'



import "./App.css";

function App() {
  const [isConneted, setConnected] = useState(false);
  const { open } = useWeb3Modal()
  const result = useWalletClient()


  const event = new Event('CONNECT_SUCCESS');



  useEffect(() => {
    console.log(result.isSuccess)

    if (result.isSuccess) {
      document.dispatchEvent(event);
      setConnected(true)
    } else  {
      setConnected(false)
    }
  }, [result, setConnected])



  const handleBtnClick = useCallback(() => open({ view: 'Connect' }), [open])



  return (
    <>
      <div className={`common-white-btn form-1_content_form-block_form_btn-connect ${isConneted && 'connected'}`} style={{ pointerEvents: isConneted ? 'none' : 'auto'}}  onClick={handleBtnClick}>
        {
          isConneted
            ?
            <>
              <img src="https://uploads-ssl.webflow.com/6645e7046629ba71066f47ff/66582458354559d9565f31bc_Vector.svg" className="form-1_content_form-block_form_btn-connect_img"/> connected
            </>
            :
            'Connect Wallet'
        }
      </div>
    </>
  );
}

export default App;
