import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from 'react';
import {
  ColorAction,
  colorReducer,
  ColorState,
  initialState,
} from '../color-reducer';

type ColorContextType = {
  state: ColorState;
  dispatch: Dispatch<ColorAction>;
};

type ColorProviderProps = {
  children: ReactNode;
};

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export const ColorContext = createContext<ColorContextType>({
  state: initialState,
} as ColorContextType);
