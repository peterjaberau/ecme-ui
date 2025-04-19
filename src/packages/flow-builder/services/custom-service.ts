import { injectable, inject } from '@flow/free-layout-editor';
import {
  FreeLayoutPluginContext,
  SelectionService,
  Playground,
  WorkflowDocument,
} from '@flow/free-layout-editor';

/**
 * Docs: https://inversify.io/docs/introduction/getting-started/
 * Warning: Use decorator legacy
 *   // rsbuild.config.ts
 *   {
 *     source: {
 *       decorators: {
 *         version: 'legacy'
 *       }
 *     }
 *   }
 * Usage:
 *  1.
 *    const myService = useService(CustomService)
 *    myService.save()
 *  2.
 *    const myService = useClientContext().get(CustomService)
 *  3.
 *    const myService = node.getService(CustomService)
 */
@injectable()
export class CustomService {
  @inject(FreeLayoutPluginContext) ctx: FreeLayoutPluginContext | any;

  @inject(SelectionService) selectionService: SelectionService | any;

  @inject(Playground) playground: Playground | any;

  @inject(WorkflowDocument) document: WorkflowDocument | any;

  save() {
    console.log(this.document.toJSON());
  }
}
