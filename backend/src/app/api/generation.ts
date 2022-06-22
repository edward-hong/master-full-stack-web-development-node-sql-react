import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ generation: req.app.locals.engine.generation() })
})

export default router
