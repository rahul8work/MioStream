import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const CardModel = types
  .model("Card")
  .props({
    id: types.identifier,
    category: types.maybe(types.string),
    type: types.enumeration(["video", "frame", "text"]),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Card extends Instance<typeof CardModel> {}
export interface CardSnapshotOut extends SnapshotOut<typeof CardModel> {}
export interface CardSnapshotIn extends SnapshotIn<typeof CardModel> {}
