// import Databse from "./database";
import Express from "./express";

class App {
  public loadServer(): void {
    // Databse.init();

    Express.init();
  }
}

export default new App();
