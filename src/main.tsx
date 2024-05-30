import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, zkSyncTestnet } from "wagmi/chains";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "5b9d2a7e594a65f3d634489802d445c9";

const chains = [mainnet, arbitrum, zkSyncTestnet];

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: "pait",
  },
});

createWeb3Modal({
  chains,
  projectId,
  wagmiConfig,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
);
