export enum TodoModelType {
  GREEN,
  ORANGE,
  RED
}

export class TodoModel {
  id: number = -1
  title: string = 'Item'
  type: TodoModelType = TodoModelType.GREEN
  startTime: string = '2023-01-01'
  content: string = 'This is a message!'

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
