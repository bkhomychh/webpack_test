export default class User {
  constructor(name, imgUrl = '') {
    this.name = name;
    this.date = new Date();
    this.image = imgUrl;
  }

  getInfo() {
    return `${this.name} ${this.date}`;
  }
}
