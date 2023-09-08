import { useEffect, useState } from "react";
import BanksRepository from "../webapi/BanksRepository";
import { useDispatch } from "react-redux";
import { addBank } from "../redux/bankSlice";

const useBanksInfo = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getBanks = async () => {
    let dataResponse = { data: [] };
    try {
      const response = await BanksRepository.getBanksInfo();
      setLoading(false);
      dataResponse.data = response.data;
      dispatch(addBank(dataResponse));
    } catch (error) {
      console.log("error mensaje", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  return { loading };
};

export default useBanksInfo;
