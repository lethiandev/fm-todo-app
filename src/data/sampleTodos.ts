import Todo from '@/models/Todo'

const sampleTodos: Todo[] = [
  {
    id: 'some-random-id-1',
    label: 'Complete online JavaScript course',
    completed: true,
    order: 0,
  },
  {
    id: 'some-random-id-2',
    label: 'Jog around the park 3x',
    completed: false,
    order: 1,
  },
  {
    id: 'some-random-id-3',
    label: '10 minutes meditation',
    completed: false,
    order: 2,
  },
  {
    id: 'some-random-id-4',
    label: 'Read for 1 hour',
    completed: false,
    order: 3,
  },
  {
    id: 'some-random-id-5',
    label: 'Pick up groceries',
    completed: false,
    order: 4,
  },
  {
    id: 'some-random-id-6',
    label: 'Complete Todo App on Frontend Mentor',
    completed: false,
    order: 5,
  },
]

export default sampleTodos
