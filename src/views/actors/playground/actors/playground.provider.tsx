import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { rootMachine, builderDemoMachine,
    renderWidgetMachine,
    editorInspectorMachine, editorMachine, inspectorComponentMachine
} from './playground.machines';

export const globalPlaygroundMachine = createMachine({
  entry: [
      spawnChild(rootMachine, { systemId: 'root' }),
      spawnChild(builderDemoMachine, { systemId: 'builder-demo' }),
      spawnChild(renderWidgetMachine, { systemId: 'render-widget' }),
      spawnChild(editorInspectorMachine, { systemId: 'editor-inspector' }),
      spawnChild(editorInspectorMachine, { systemId: 'editor' }),
      spawnChild(inspectorComponentMachine, { systemId: 'inspector-component' }),

  ],
});

export const GlobalPlaygroundContext = createActorContext(globalPlaygroundMachine);

export const GlobalPlaygroundProvider = ({ children }: any) => {
  return <GlobalPlaygroundContext.Provider>{children}</GlobalPlaygroundContext.Provider>;
};
