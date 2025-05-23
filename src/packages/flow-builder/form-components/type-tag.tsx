import styled from 'styled-components';
import { Tag, Tooltip } from '@douyinfe/semi-ui';

import { VariableTypeIcons, ArrayIcons } from '../plugins/sync-variable-plugin/icons';
import { ReactElement } from 'react'

interface PropsType {
  name?: string | ReactElement;
  type: string;
  className?: string;
  isArray?: boolean;
}

const TooltipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
`;

export function TypeTag({ name, type, isArray, className }: PropsType) {
  const icon = isArray ? ArrayIcons[type] : VariableTypeIcons[type];
  return (
    <Tooltip
      content={
        <TooltipContainer>
          {icon} {type}
        </TooltipContainer>
      }
    >
      <Tag color="white" className={className} style={{ padding: 4, maxWidth: 450 }}>
        {icon}
        {name && (
          <span
            style={{
              display: 'inline-block',
              marginLeft: 4,
              marginTop: -1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {' '}
            {name}
          </span>
        )}
      </Tag>
    </Tooltip>
  );
}
