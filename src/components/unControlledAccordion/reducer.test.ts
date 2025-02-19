import { expect, test } from "vitest";
import { reducer, StateType, toggle_collapsed } from "./reducer";
// import { beforeEach } from 'vitest'

test("cpllapsed should be true", () => {
  //date
  const state: StateType = {
    collapsed: false,
  };
  //action
  const newState = reducer(state, { type: toggle_collapsed });
  //expection
  expect(newState.collapsed).toBe(true);
});

test("cpllapsed should be false", () => {
  //date
  const state: StateType = {
    collapsed: true,
  };
  //action
  const newState = reducer(state, { type: toggle_collapsed });
  //expection
  expect(newState.collapsed).toBe(false);
});

test("reducer should throw error because action type is correct?", () => {
  //date
  const state: StateType = {
    collapsed: false,
  };
  //action
  expect(() => reducer(state, { type: "fake-type" })).toThrowError();
  expect(() => reducer(state, { type: toggle_collapsed })).not.toThrowError();
  //expectio
});
