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

const ColorContext = createContext<ColorContextType>({
  state: initialState,
} as ColorContextType);

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

export const useColorContext = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }
  return context;
};
