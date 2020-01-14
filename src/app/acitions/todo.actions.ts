import {Todo} from '../models/Todo.model';

export class AddTodo {
  static readonly type = '[Todo] Add Todo';

  constructor(public payload: Todo) {
  }
}

export class GetTodos {
  static readonly type = '[Todo] Get Todos';
}

export class UpdateTodo {
  static readonly type = '[Todo] Update todo';

  constructor(public payload: Todo, public id: number) {
  }
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete Todo';

  constructor(public id: number) {
  }
}

export class SetSelectedTodo {
  static readonly type = '[Todo] Set Todo';

  constructor(public payload: Todo) {
  }
}
