type ActionType = {
  type: string;
};

export type StateType = {
  collapsed: boolean;
};

export const toggle_collapsed = "toggle-collapsed";

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case toggle_collapsed: {
      return { ...state, collapsed: !state.collapsed };
    }
    default: {
      throw new Error("Bad action type");
    }
  }
};
