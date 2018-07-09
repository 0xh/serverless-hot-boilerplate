import Todo from 'models/todo';
import { handler } from 'handlers/create';

jest.mock('models/todo');

describe('create.handler', () => {
	beforeEach(() => {
		Todo.mockClear();
	});

	test('create an item in Dynamo', async () => {
		const req = {
			body: JSON.stringify({
				text: 'add one item',
			}),
		};
		const res = {
			json: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.create.mock.calls).toHaveLength(1);
	});
});
