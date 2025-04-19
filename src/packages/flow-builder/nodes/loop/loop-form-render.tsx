import { FormRenderProps, FlowNodeJSON } from '@flow/free-layout-editor';
import { SubCanvasRender } from '@flow/free-container-plugin';

import { useIsSidebar } from '../../hooks';
import { FormHeader, FormContent, FormInputs, FormOutputs } from '../../form-components';

export const LoopFormRender = ({ form }: FormRenderProps<FlowNodeJSON>) => {
  const isSidebar = useIsSidebar();
  if (isSidebar) {
    return (
      <>
        <FormHeader />
        <FormContent>
          <FormInputs />
          <FormOutputs />
        </FormContent>
      </>
    );
  }
  return (
    <>
      <FormHeader />
      <FormContent>
        <FormInputs />
        <SubCanvasRender />
        <FormOutputs />
      </FormContent>
    </>
  );
};
