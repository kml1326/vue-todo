import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  // Evaluate the results of functions in
  // the raw component options
  it("sets the correct default data", () => {
    expect(typeof Home.data).toBe("function");
    const defaultData = Home.data();
    expect(defaultData.user).toBe("");
    expect(typeof defaultData.langs).toBe("object");
    expect(defaultData.mode).toBe("light");
    expect(defaultData.styleToImport).toBe("dark.scss");
  });

  it("filters is object", () => {
    expect(typeof Home.filters).toBe("object");
  });

  it("user data in mounted is not undefined", () => {
    expect(typeof Home.mounted).toBe("function");
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: () => "some specific text"
      }
    });
    expect(wrapper.vm.user).not.toBe(undefined);
  });
});
