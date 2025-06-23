import React from 'react';
import { defineConfig, defaultConfig, createSystem, ChakraProvider, defaultSystem } from '@chakra-ui/react';


const config: any = defineConfig({
    // preflight: false,
    preflight: {
        scope: ".chakra-reset",
    },
})
const newSystem = createSystem(defaultConfig, config)


export const Provider = (props: { children: React.ReactNode }) => {
  return (
      <ChakraProvider value={newSystem}>
          {props.children}
      </ChakraProvider>
  );
};
