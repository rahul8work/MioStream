import { CardVideoModel } from "./CardVideo"

test("can be created", () => {
  const instance = CardVideoModel.create({})

  expect(instance).toBeTruthy()
})
