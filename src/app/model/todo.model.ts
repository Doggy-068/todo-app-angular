export enum TodoModelType {
  GREEN,
  ORANGE,
  RED
}

export class TodoModel {
  constructor(
    public id: number,
    public title: string,
    public type: TodoModelType,
    public startTime: string,
    public content: string
  ) { }

  get color() {
    switch (this.type) {
      case TodoModelType.GREEN:
      default:
        return 'green'
      case TodoModelType.ORANGE:
        return 'orange'
      case TodoModelType.RED:
        return 'red'
    }
  }
}
