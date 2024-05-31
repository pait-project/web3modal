import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'viem/chains';
import { Web3Button } from '@web3modal/react';


function HomePage() {
    return <Web3Button />
}

const chains = [arbitrum, mainnet, polygon];
const projectId = '5b9d2a7e594a65f3d634489802d445c9';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function Main() {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <App />
            </WagmiConfig>

            <Web3Modal
                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Main/>
    </React.StrictMode>,
);
