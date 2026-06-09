export class Counter {
  // プロパティ
  private count: number;

  // コンストラクタ
  constructor(initialCount: number) {
    this.count = initialCount;
  }

  // メソッド
  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public reset(): void {
    this.count = 0;
  }

  public getValue(): number {
    return this.count;
  }
}
