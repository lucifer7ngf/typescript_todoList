import { NextApiRequest, NextApiResponse } from 'next'
import type { Todo } from '@/app/types' 

export default function handler(req: NextApiRequest, res: NextApiResponse ) {
    switch (req.method){
        case 'GET':
            return getTodos(req, res)
        default:
            res.status(405).end()
            break
    }
}

const todos: Todo[] =[
        {
        toDoId: "1",
        toDoTitle: "go to gem",
        toDoCategory: "health",
        toDoCompleted: true,
    },
    {
        toDoId: "2",
        toDoTitle: "make dinner",
        toDoCategory: "health",
        toDoCompleted: false,
    },
    {
        toDoId: "3",
        toDoTitle: "stady for exam",
        toDoCategory: "Education",
        toDoCompleted: false,
    },
];

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).json({ message: 'severe error' })
    }
}
