import Chance from "chance";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "jest-enzyme";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const middlewares = [thunk];

global.mockStore = configureMockStore(middlewares);

global.chance = new Chance();
global.shallow = shallow;

global.expectStateChanges = (result, mods, store) => {
    const state = store.getState();
    const expectedState = {...state, ...mods}
    expect(result).toEqual(expectedState);
}