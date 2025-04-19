import { FlowMinimapService, MinimapRender } from '@flow/minimap-plugin';
import { useService } from '@flow/free-layout-editor';

import { MinimapContainer } from './styles';

export const Minimap = ({ visible }: { visible?: boolean }) => {
  const minimapService = useService(FlowMinimapService);
  if (!visible) {
    return <></>;
  }
  return (
    <MinimapContainer>
      <MinimapRender
        service={minimapService}
        panelStyles={{}}
        containerStyles={{
          pointerEvents: 'auto',
          position: 'relative',
          top: 'unset',
          right: 'unset',
          bottom: 'unset',
          left: 'unset',
        }}
        inactiveStyle={{
          opacity: 1,
          scale: 1,
          translateX: 0,
          translateY: 0,
        }}
      />
    </MinimapContainer>
  );
};
