const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  currentLink: "",
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.currentLink = "( )";
    } else {
      this.currentLink = "( " + String(value) + " )";
    }
    this.links.push(this.currentLink);
    return this;
  },
  removeLink(position) {
    let t = position - 1;
    if (
      typeof position !== "number" ||
      position % 1 !== 0 ||
      this.links[t] === undefined
    ) {
      this.links = [];
      throw new Error();
    }
    this.links.splice(t, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let boom = this.links;
    this.links = [];
    return boom.join("~~");
  },
};
module.exports = chainMaker;
