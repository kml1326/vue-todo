import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Dashboard", () => {
  it("If todoArray length is false do not map todoArray", () => {
    const wrapper = shallowMount(Dashboard, {
      mocks: {
        $t: () => "some specific text"
      }
    });
    expect(wrapper.find("div").isVisible()).toBe(true);
  });

  // Evaluate the results of functions in
  // the raw component options
  it("sets the correct default data", () => {
    expect(typeof Dashboard.data).toBe("function");
    const defaultData = Dashboard.data();
    expect(defaultData.todo).toBe("");
  });

  it("computed data todoList is array", () => {
    expect(typeof Dashboard.computed).toBe("object");
    const wrapper = shallowMount(Dashboard, {
      mocks: {
        $t: () => "some specific text"
      }
    });
    expect(typeof wrapper.vm.todoList).toBe("object");
  });
});
