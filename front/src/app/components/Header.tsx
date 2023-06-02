'use client';
import { useEffect } from "react";
import { useMoralis } from "react-moralis"
import { ConnectButton } from "web3uikit";

export default function Header (){
   
    return(
       <div>
        <ConnectButton moralisAuth={false}/>
       </div>
    )
}