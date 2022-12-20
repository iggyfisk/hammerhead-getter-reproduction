class reproduction_class {
  constructor() {}

  #private_value = "foo";

  get value() {
    return this.#private_value;
  }

  set value(new_value: string) {
    console.log(`Changing value from ${this.#private_value} to ${new_value}`);
  }
}

const reproduction_object = new reproduction_class();
const div = document.createElement("div");
div.innerText = reproduction_object.value;
document.body.appendChild(div);

reproduction_object.value = "bar";
