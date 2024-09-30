import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ColorType, getColors } from "firestoreClient";

export type ClientDataType = ColorType & { id: string };

type ColorsContextType = {
  colors: ClientDataType[];
  setColors: Dispatch<SetStateAction<ClientDataType[]>>;
};

const initialContext: ColorsContextType = {
  colors: [],
  setColors: () => null,
};

const ColorsContext = createContext<ColorsContextType>(initialContext);

export const ColorsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [colors, setColors] = useState<ClientDataType[]>([]);

  const getAsyncColors = async () => {
    const data = await getColors();

    setColors(data);
  };

  useEffect(() => {
    getAsyncColors();
  }, []);

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorsContext.Provider>
  );
};

export const useColors = () => useContext(ColorsContext);
