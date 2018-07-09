import serverless from 'serverless-http';
import express from 'express';

import Todo from 'models/todo';

export const handler = async (req, res) => {
	try {
		const result = await Todo.scan().exec();
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

export const app = express().use(handler);

export default serverless(app);
