import React, {Context, useContext} from 'react';
import {GameService} from "../game-service/game-service";


export interface Services {
 gameService:GameService
}

interface Props {
  children: React.ReactNode;
  services: Services;
}

const ServiceContext = React.createContext<Services | null>(null);
ServiceContext.displayName = 'ServiceContext';

export const ServiceProvider = ({ children, services }: Props) => {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = createUseContextHook(ServiceContext);



export function createUseContextHook<T>(
        theContext: Context<T | null>,
): () => T {
  return () => {
    const context = useContext(theContext);
    if (context === null) {
      throw new Error(
              `${theContext.displayName} is null, wrap your component with a matching Provider`,
      );
    }
    return context;
  };
}
