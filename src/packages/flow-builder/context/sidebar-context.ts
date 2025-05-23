import React from 'react';

import { NodeRenderReturnType } from '@flow/free-layout-editor';

export const SidebarContext = React.createContext<{
  visible: boolean;
  nodeRender?: NodeRenderReturnType;
  setNodeRender: (node: NodeRenderReturnType | undefined) => void;
}>({ visible: false, setNodeRender: () => {} });

export const IsSidebarContext = React.createContext<boolean>(false);
