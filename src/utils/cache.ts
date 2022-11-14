class Cache {
  private store: { [ticket: number]: number } = {};

  public load(ticket: number) {
    return this.store[ticket];
  }

  public save(ticket: number, value: number) {
    this.store[ticket] = value;
  }
}

export default new Cache();
