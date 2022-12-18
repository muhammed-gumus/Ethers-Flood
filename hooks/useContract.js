

import { useEffect, useState } from "react";
import { abi } from "../constant/abi";
import { address } from "../constant/address";
import {ethers} from "ethers"

export const useContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _contract = new ethers.Contract(address, abi, provider);

    setContract(_contract);
  }, []);

  return contract;
};






