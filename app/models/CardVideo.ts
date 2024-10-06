import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const CardVideoModel = types
  .model("CardVideo")
  .props({
    id: types.identifier,
    category: types.maybe(types.string),
    type: "video",
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface CardVideo extends Instance<typeof CardVideoModel> {}
export interface CardVideoSnapshotOut extends SnapshotOut<typeof CardVideoModel> {}
export interface CardVideoSnapshotIn extends SnapshotIn<typeof CardVideoModel> {}
