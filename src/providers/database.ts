import * as redis from "redis";

class Databse {
  public client = redis.createClient();

  public init() {
    this.client.on("connect", function () {
      console.log("Connected!");
    });
  }
}

export default new Databse();
