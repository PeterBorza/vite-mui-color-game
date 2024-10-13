import { getColors } from "firestoreClient";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ClientDataType } from "types";

type ColorsContextType = {
  colors: ClientDataType[];
  setColors: Dispatch<SetStateAction<ClientDataType[]>>;
  loading: boolean;
};

const initialContext: ColorsContextType = {
  colors: [],
  setColors: () => null,
  loading: false,
};

const ColorsContext = createContext<ColorsContextType>(initialContext);

export const ColorsContextProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<ClientDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const getAsyncColors = async () => {
    setLoading(true);
    try {
      const data = await getColors();
      setColors(data);
    } catch (err) {
      alert(`Something went wrong in fetching: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAsyncColors();
  }, []);

  return (
    <ColorsContext.Provider value={{ colors, setColors, loading }}>
      {children}
    </ColorsContext.Provider>
  );
};

export const useColors = () => useContext(ColorsContext);
